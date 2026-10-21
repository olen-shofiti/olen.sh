(() => {
    const articles = Array.isArray(window.WRITING_ARTICLES) ? window.WRITING_ARTICLES : [];
    const t = key => window.siteTranslate ? window.siteTranslate(key) : key;
    const escape = value => String(value).replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);
    const formatDate = value => new Intl.DateTimeFormat(window.siteLanguage || "en", { year: "numeric", month: "short", day: "numeric" }).format(new Date(`${value}T12:00:00`));
    const articleUrl = article => document.querySelector("[data-writing-article]") ? `../${article.slug}/index.html` : `${article.slug}/index.html`;
    const meta = article => `<span>${escape(article.category)}</span><span>${formatDate(article.date)}</span><span>${article.readingTime} ${t("min read")}</span>`;

    function card(article, featured = false) {
        return `<article class="article-card${featured ? " article-card-featured" : ""}">
            <div class="article-card-content"><div class="article-meta">${meta(article)}</div>
            ${article.example ? `<span class="example-badge">${t("Example article")}</span>` : ""}
            <h2><a href="${articleUrl(article)}">${escape(article.title)}</a></h2><p>${escape(article.description)}</p>
            <div class="article-tags">${article.tags.map(tag => `<span>${escape(tag)}</span>`).join("")}</div>
            <a class="article-read-link" href="${articleUrl(article)}">${t("Read article")} <span aria-hidden="true">→</span></a></div></article>`;
    }

    function renderIndex() {
        const featuredTarget = document.getElementById("featured-article");
        const results = document.getElementById("article-results");
        const filters = document.getElementById("category-filters");
        const search = document.getElementById("article-search");
        if (!featuredTarget || !results || !filters || !search) return;
        const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
        const categories = ["All", ...new Set(sorted.map(article => article.category))];
        let selected = "All";
        featuredTarget.innerHTML = sorted.find(article => article.featured) ? card(sorted.find(article => article.featured), true) : `<p class="writing-empty">${t("No articles available yet.")}</p>`;
        filters.innerHTML = categories.map(category => `<button type="button" class="category-filter${category === selected ? " is-active" : ""}" data-category="${escape(category)}" aria-pressed="${category === selected}">${t(category)}</button>`).join("");
        const update = () => {
            const query = search.value.trim().toLocaleLowerCase();
            const matching = sorted.filter(article => {
                const searchable = [article.title, article.description, article.category, ...article.tags].join(" ").toLocaleLowerCase();
                return (selected === "All" || article.category === selected) && searchable.includes(query);
            });
            results.innerHTML = matching.length ? matching.map(article => card(article)).join("") : `<p class="writing-empty">${t(query ? "No articles match your search." : "No articles in this category.")}</p>`;
        };
        filters.addEventListener("click", event => {
            const button = event.target.closest("button[data-category]");
            if (!button) return;
            selected = button.dataset.category;
            filters.querySelectorAll("button").forEach(item => { const active = item === button; item.classList.toggle("is-active", active); item.setAttribute("aria-pressed", active); });
            update();
        });
        search.addEventListener("input", update);
        update();
    }

    function articleTemplate(article) {
        const headings = [...article.content.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(match => ({ id: match[1], title: match[2] }));
        const toc = headings.map(item => `<li><a href="#${item.id}">${item.title}</a></li>`).join("");
        return `<a class="back-to-writing" href="../index.html">${t("← Back to Writing")}</a>
            <header class="article-header"><div class="article-meta">${meta(article)}</div>${article.example ? `<span class="example-badge">${t("Example article")}</span>` : ""}<h1>${escape(article.title)}</h1><p>${escape(article.description)}</p><div class="article-byline"><span>${t("By")} ${escape(article.author)}</span><span>${t("Published")} ${formatDate(article.date)}</span>${article.updated !== article.date ? `<span>${t("Updated")} ${formatDate(article.updated)}</span>` : ""}</div><div class="article-actions"><button type="button" class="article-share" data-share>${t("Share")}</button><button type="button" class="article-copy" data-copy>${t("Copy link")}</button><span class="copy-feedback" role="status" aria-live="polite"></span></div></header>
            <div class="article-layout"><aside class="article-toc"><p>${t("Table of contents")}</p><ol>${toc}</ol></aside><details class="article-toc-mobile"><summary>${t("Table of contents")}</summary><ol>${toc}</ol></details><article class="article-content">${article.content}</article></div>
            <footer class="article-footer"><div><p class="section-label">${t("Related articles")}</p><div class="article-grid article-related" id="related-articles"></div></div><div class="article-navigation" id="article-navigation"></div></footer>`;
    }

    function addCodeButtons(scope) {
        scope.querySelectorAll("pre").forEach(pre => {
            const button = document.createElement("button");
            button.type = "button"; button.className = "code-copy"; button.textContent = t("Copy code");
            button.addEventListener("click", async () => { try { await navigator.clipboard.writeText(pre.innerText); button.textContent = t("Copied"); setTimeout(() => { button.textContent = t("Copy code"); }, 1600); } catch { button.textContent = t("Copy failed"); } });
            pre.append(button);
        });
    }

    function renderArticle(slug) {
        const target = document.querySelector("[data-writing-article]");
        const article = articles.find(item => item.slug === slug);
        if (!target || !article) return;
        target.innerHTML = articleTemplate(article);
        document.title = `${article.title} | NaK0`;
        addCodeButtons(target);
        const related = articles.filter(item => item.slug !== slug && (item.category === article.category || item.tags.some(tag => article.tags.includes(tag)))).slice(0, 2);
        document.getElementById("related-articles").innerHTML = related.length ? related.map(item => card(item)).join("") : `<p class="writing-empty">${t("No related articles yet.")}</p>`;
        const ordered = [...articles].sort((a, b) => b.date.localeCompare(a.date)); const position = ordered.findIndex(item => item.slug === slug);
        document.getElementById("article-navigation").innerHTML = [ordered[position + 1], ordered[position - 1]].filter(Boolean).map(item => `<a href="../${item.slug}/index.html"><small>${item.date < article.date ? t("Previous article") : t("Next article")}</small>${escape(item.title)} <span aria-hidden="true">→</span></a>`).join("");
        const progress = document.querySelector(".reading-progress span");
        const updateProgress = () => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`; };
        addEventListener("scroll", updateProgress, { passive: true }); updateProgress();
        target.querySelector("[data-copy]").addEventListener("click", async () => { const feedback = target.querySelector(".copy-feedback"); try { await navigator.clipboard.writeText(location.href); feedback.textContent = t("Link copied"); } catch { feedback.textContent = t("Copy failed"); } });
        target.querySelector("[data-share]").addEventListener("click", async () => { if (navigator.share) { await navigator.share({ title: article.title, text: article.description, url: location.href }); } else target.querySelector("[data-copy]").click(); });
        const structuredData = document.createElement("script"); structuredData.type = "application/ld+json"; structuredData.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.description, datePublished: article.date, dateModified: article.updated, author: { "@type": "Person", name: article.author }, mainEntityOfPage: location.href }); document.head.append(structuredData);
    }

    document.addEventListener("site-language-change", () => { if (document.querySelector("[data-writing-index]")) renderIndex(); });
    document.addEventListener("DOMContentLoaded", () => { const article = document.querySelector("[data-writing-article]"); if (article) renderArticle(article.dataset.writingArticle); else renderIndex(); });
})();
