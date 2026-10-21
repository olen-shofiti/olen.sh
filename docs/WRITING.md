# Writing

The Writing section is a dependency-free static publishing workflow for GitHub Pages. Markdown source files live in `content/writing/`; the deployed pages and `writing/data.js` are static files, so visitors do not need a server or a CMS.

## Create an article

1. Copy an existing `.md` file in `content/writing/`.
2. Set a unique, URL-safe filename. `my-new-note.md` becomes `/writing/my-new-note/`.
3. Complete the front matter and write the article in Markdown.
4. Run the publishing script from the repository root: `node scripts/build-writing.mjs`.
5. Open `writing/` locally with a static server or deploy the changed files to GitHub Pages.

Only files with `published: true` are included. Use `published: false` for drafts. Mark demonstration material with `example: true`; the page displays an explicit badge.

```md
---
title: "A clear article title"
description: "A concise summary for cards and search engines."
date: "2026-10-22"
updated: "2026-10-22"
category: "Machine Learning"
tags: ["PyTorch", "Research Notes"]
featured: false
published: false
example: false
---

## First section

Write normal Markdown here.
```

## Supported content

The generator supports headings, paragraphs, ordered and unordered lists, blockquotes, fenced code blocks, inline code, and links. Fenced code blocks keep their language class, which the Writing stylesheet uses for code styling. Add images to `images/writing/` and use a relative Markdown image path. Keep images compressed and add meaningful alt text.

LaTeX and Mermaid are intentionally left as source blocks in this lightweight static site. Add a client renderer only if those formats become regular content needs; that keeps normal article pages fast and dependency-free.

## Categories, tags, and localization

Categories and tags are data-driven from front matter. The writing index builds its filter list from published articles and searches titles, descriptions, categories, and tags. The interface uses the existing `js/language.js` system. Article content remains in its authored language; when an article has no localized version, English is the deliberate fallback.

## Publishing and deployment

The publishing script rebuilds the article data and static article routes. Commit the Markdown source and generated `writing/` files together. GitHub Pages then serves the clean URLs without a runtime build.

Use any local static server from the repository root, for example `python3 -m http.server`, and browse to `/writing/`. Check narrow screens, keyboard navigation, search, category filters, copy buttons, and generated article metadata before deploying.
