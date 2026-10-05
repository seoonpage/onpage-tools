---
description: Check SEO and AI visibility of a page or of this project's built HTML, then fix what is wrong
argument-hint: "[url or path to built HTML]"
---

Run an OnPage.dev SEO check on: $ARGUMENTS

1. If the argument is a URL, call the onpage `scan_page` tool. If it is a file path, or empty, find the built HTML for the main page of this project (for example `dist/index.html`, `build/index.html`, `out/index.html` or `public/index.html`), read it and call `scan_html` with that HTML and, if you know it, the URL it will be published at.
2. Show the score and the fixes in order, short and plain.
3. Ask whether to apply the fixes. If yes, use the `seo-fix-loop` skill.
