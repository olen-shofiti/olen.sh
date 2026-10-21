import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const sourceDirectory = join(root, "content/writing");
const outputDirectory = join(root, "writing");

function frontMatter(source) {
    const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!match) throw new Error("Each article needs YAML front matter enclosed by --- lines.");
    const metadata = {};
    for (const line of match[1].split("\n")) {
        const separator = line.indexOf(":");
        if (separator < 0) continue;
        const key = line.slice(0, separator).trim();
        let value = line.slice(separator + 1).trim().replace(/^"|"$/g, "");
        if (value.startsWith("[")) value = value.slice(1, -1).split(",").map(item => item.trim().replace(/^"|"$/g, ""));
        if (value === "true" || value === "false") value = value === "true";
        metadata[key] = value;
    }
    return { metadata, body: match[2] };
}

function markdownToHtml(markdown) {
    const escape = value => value.replace(/[&<>]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[character]);
    return markdown.trim().split(/\n{2,}/).map(block => {
        if (/^```/.test(block)) { const [first, ...lines] = block.split("\n"); return `<pre><code class="language-${first.slice(3) || "text"}">${escape(lines.slice(0, -1).join("\n"))}</code></pre>`; }
        if (/^## /.test(block)) { const title = block.slice(3).trim(); const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); return `<h2 id="${id}">${escape(title)}</h2>`; }
        if (/^> /.test(block)) return `<blockquote><p>${escape(block.replace(/^> /, ""))}</p></blockquote>`;
        if (/^- /.test(block)) return `<ul>${block.split("\n").map(line => `<li>${escape(line.slice(2))}</li>`).join("")}</ul>`;
        if (/^\d+\. /.test(block)) return `<ol>${block.split("\n").map(line => `<li>${escape(line.replace(/^\d+\. /, ""))}</li>`).join("")}</ol>`;
        return `<p>${escape(block).replace(/`([^`]+)`/g, "<code>$1</code>")}</p>`;
    }).join("\n");
}

const articles = readdirSync(sourceDirectory).filter(file => file.endsWith(".md")).map(file => {
    const { metadata, body } = frontMatter(readFileSync(join(sourceDirectory, file), "utf8"));
    const required = ["title", "description", "date", "category", "tags", "published"];
    for (const field of required) if (metadata[field] === undefined) throw new Error(`${file}: missing ${field}`);
    return { ...metadata, updated: metadata.updated || metadata.date, slug: basename(file, ".md"), readingTime: Math.max(1, Math.ceil(body.trim().split(/\s+/).length / 220)), author: metadata.author || "Olen Shofiti", content: markdownToHtml(body) };
}).filter(article => article.published).sort((a, b) => b.date.localeCompare(a.date));

const publishedSlugs = new Set(articles.map(article => article.slug));
for (const entry of readdirSync(outputDirectory, { withFileTypes: true })) {
    if (!entry.isDirectory() || publishedSlugs.has(entry.name)) continue;
    const generatedPage = join(outputDirectory, entry.name, "index.html");
    if (existsSync(generatedPage) && readFileSync(generatedPage, "utf8").includes("data-writing-article")) rmSync(join(outputDirectory, entry.name), { recursive: true, force: true });
}
writeFileSync(join(outputDirectory, "data.js"), `window.WRITING_ARTICLES = ${JSON.stringify(articles, null, 4)};\n`);
for (const article of articles) {
    const directory = join(outputDirectory, article.slug);
    mkdirSync(directory, { recursive: true });
    const title = String(article.title).replace(/&/g, "&amp;").replace(/</g, "&lt;");
    writeFileSync(join(directory, "index.html"), `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | NaK0</title><meta name="description" content="${String(article.description).replace(/"/g, "&quot;")}"><link rel="canonical" href="https://olen.sh/writing/${article.slug}/"><meta property="og:type" content="article"><meta property="og:title" content="${title} | NaK0"><meta property="og:description" content="${String(article.description).replace(/"/g, "&quot;")}"><meta name="twitter:card" content="summary_large_image"><link rel="icon" type="image/png" href="../../images/favicon.png"><link rel="stylesheet" href="../../css/style.css"><script src="../../js/language.js" defer></script><script src="../data.js" defer></script><script src="../../js/writing.js" defer></script></head><body><nav class="site-nav" aria-label="Primary navigation" data-language-aria="Primary navigation"><a href="../../home.html" data-language-text="Home">Home</a><a href="../../projects.html" data-language-text="Projects">Projects</a><a href="../../about.html" data-language-text="About">About</a></nav><div class="reading-progress" aria-hidden="true"><span></span></div><main class="article-page" data-writing-article="${article.slug}"></main></body></html>`);
}
const urls = ["", "home.html", "projects.html", "about.html", "writing/", ...articles.map(article => `writing/${article.slug}/`)];
writeFileSync(join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>https://olen.sh/${url}</loc></url>`).join("\n")}\n</urlset>\n`);
writeFileSync(join(outputDirectory, "rss.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>NaK0 Writing</title><link>https://olen.sh/writing/</link><description>Technical notes by Olen Shofiti.</description>${articles.map(article => `<item><title>${article.title}</title><link>https://olen.sh/writing/${article.slug}/</link><pubDate>${new Date(`${article.date}T00:00:00Z`).toUTCString()}</pubDate><description>${article.description}</description></item>`).join("")}</channel></rss>\n`);
console.log(`Built ${articles.length} published article${articles.length === 1 ? "" : "s"}.`);
