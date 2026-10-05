# OnPage.dev tools

Free SEO and AI-visibility checks where you build: in Claude Code and in your CI. Powered by the hosted [OnPage.dev MCP server](https://onpage.dev/mcp). No account, no API key.

## Claude Code plugin

```
/plugin marketplace add seoonpage/onpage-tools
/plugin install onpage@onpage-dev
```

You get:

- The OnPage.dev MCP server with 11 tools: scan pages and unpublished HTML, ready-to-paste fixes, structured data, robots.txt rules for AI crawlers, llms.txt and more.
- `/seo-check [url or path]`: scan a live page or this project's built HTML and fix what is wrong.
- `/ai-visibility`: check whether ChatGPT, Claude, Perplexity and Gemini can read and quote the site, and write the files to fix it.
- Skills that run the loop on their own: fix in the source, check with `scan_html` before deploying, confirm with `rescan_and_compare` after.

Only want the server? `claude mcp add --transport http onpage https://onpage.dev/mcp`

## GitHub Action: SEO gate

Scans the HTML your build produces on every pull request, comments the scores and top fixes, and fails when a page drops below your minimum.

```yaml
- uses: seoonpage/onpage-tools@v1
  with:
    paths: "dist/**/*.html"     # built HTML to check
    base-url: "https://example.com"  # optional, for canonical and relative links
    min-score: "80"             # fail below this
    max-files: "10"             # scans are rate limited to about 20 per minute
```

Give the workflow `pull-requests: write` permission to get the comment. A full example is in [examples/seo-gate.yml](examples/seo-gate.yml).

Link checks, image sizes and AI crawler access need a live URL, so the gate covers what can be judged from HTML: titles, descriptions, headings, canonical, social tags, structured data, images and AI readiness of the content.

## Privacy

Only the HTML you send is analysed, in memory, and it is not stored. See [onpage.dev/privacy](https://onpage.dev/privacy).

## License

MIT
