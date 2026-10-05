<p align="center">
  <a href="https://onpage.dev/mcp"><img src="assets/onpage-dev-banner.png" alt="OnPage.dev: free SEO and AI-visibility checks for AI assistants" width="720"></a>
</p>

<h1 align="center">OnPage.dev MCP server</h1>

<p align="center">
  <b>The SEO scanner your AI assistant uses to fix your site itself.</b><br>
  Scan, fix, check before deploy, confirm after. For Google and for AI search.
</p>

<p align="center">
  <a href="https://onpage.dev/mcp"><img alt="Hosted MCP server" src="https://img.shields.io/badge/MCP-hosted-4f46e5"></a>
  <img alt="Free, no API key" src="https://img.shields.io/badge/price-free%2C%20no%20key-0a7a43">
  <img alt="11 tools" src="https://img.shields.io/badge/tools-11-4f46e5">
  <a href="https://github.com/seoonpage/onpage-tools/actions/workflows/test.yml"><img alt="Tests" src="https://github.com/seoonpage/onpage-tools/actions/workflows/test.yml/badge.svg"></a>
  <a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/badge/license-MIT-0b0b0f"></a>
</p>

<p align="center">
  <a href="#install-in-one-minute">Install</a> ·
  <a href="#what-it-can-do">Tools</a> ·
  <a href="#why-it-is-different">Why it is different</a> ·
  <a href="#claude-code-plugin">Claude Code plugin</a> ·
  <a href="#github-action-seo-gate">GitHub Action</a> ·
  <a href="https://onpage.dev">onpage.dev</a>
</p>

---

Most SEO tools give you a report. OnPage.dev gives your assistant something to **do**: write the fix, check it before you publish, and confirm it worked. It also checks what AI search sees, not only Google: which AI crawlers may read your site, whether your content is ready to be quoted, and whether you have an `llms.txt`.

```
You:        Fix the SEO on our pricing page and keep going until it scores 90 or more.

Assistant:  scan_page            46/100  no meta description, no H1, title 14 characters
            get_fix_pack         title, description and canonical, written from the page
            generate_schema      Product JSON-LD, 2 values to fill in
            (edits pricing.html)
            scan_html            92/100  before deploying, all errors gone
            rescan_and_compare   94/100  live, +48 since the first scan

            Done. 46 to 94. Two prices in the JSON-LD still need your real values.
```

## Install in one minute

The server is hosted. There is nothing to install or run, and no key.

**Server URL:** `https://onpage.dev/mcp`

<details open>
<summary><b>Claude Code</b></summary>

```bash
claude mcp add --transport http onpage https://onpage.dev/mcp
```

Or install the [plugin](#claude-code-plugin) for the server plus ready commands and skills.
</details>

<details>
<summary><b>Claude (claude.ai and desktop)</b></summary>

Settings → Connectors → **Add custom connector** → paste `https://onpage.dev/mcp` → save. Turn the connector on in a chat.
</details>

<details>
<summary><b>ChatGPT</b></summary>

Add a custom connector with `https://onpage.dev/mcp` (Settings → Connectors, with developer mode on). Which plans can use custom connectors is up to OpenAI.
</details>

<details>
<summary><b>Cursor</b></summary>

`~/.cursor/mcp.json` or `.cursor/mcp.json` in your project:

```json
{
  "mcpServers": {
    "onpage": { "url": "https://onpage.dev/mcp" }
  }
}
```
</details>

<details>
<summary><b>VS Code</b></summary>

`.vscode/mcp.json`:

```json
{
  "servers": {
    "onpage": { "type": "http", "url": "https://onpage.dev/mcp" }
  }
}
```
</details>

<details>
<summary><b>Any other MCP client</b></summary>

Streamable HTTP transport at `https://onpage.dev/mcp`. JSON responses, no authentication.
</details>

## What it can do

11 tools in three jobs. Every result links to the full visual report on [onpage.dev](https://onpage.dev).

### Audit and fix

| Tool | What it does | Example result |
|---|---|---|
| `scan_page` | Score from 0 to 100, the issues to fix first with why and how, AI readiness and key facts | `46/100, 5 fixes` |
| `get_fix_pack` | Ready-to-paste HTML for every issue, written from the page's own content | `<title>`, `<meta>`, canonical, social tags |
| `generate_schema` | Article, Product, FAQ, Organization or breadcrumb JSON-LD, validated against Google's rich result rules. Values it cannot read are marked TODO, never invented | `Product: eligible` |
| `rescan_and_compare` | Scan again after a fix: score change, what got fixed, what is new | `46 → 94` |

### AI search

| Tool | What it does | Example result |
|---|---|---|
| `check_ai_visibility` | Which AI crawlers may read the page (GPTBot, ClaudeBot, PerplexityBot, Google-Extended and more), llms.txt, 11 checks for AI answers, and the page as a model reads it | `7 of 8 crawlers allowed` |
| `find_answer_passages` | Does the page answer a question well enough for AI to quote it? Returns the best passages with length and fit | `Best passage, 64 words` |
| `ai_crawler_policy` | robots.txt rules for 13 AI crawlers from a policy (allow all, AI search only, block all), merged into your existing file | `13 bots, merged` |
| `generate_llms_txt` | A ready `llms.txt` built from the sitemap and home page | `llms.txt, 42 pages` |

### Writing and code

| Tool | What it does | Example result |
|---|---|---|
| `scan_html` | Scan HTML that is not live yet: a local build, a template or a draft. Same score and fixes as `scan_page` | `92/100 before deploy` |
| `check_focus_keyword` | Eight checks for one search term: title, description, H1, URL, opening text, subheadings, alt texts and keyword use | `6 of 8` |
| `check_snippet` | Pixel-width estimate of title and description against Google's cut-off, desktop and mobile | `612 px, cut off` |

### Ready workflows (MCP prompts)

One click in clients that show prompts:

- **Full SEO and AI audit**: scan, AI check and fix pack, then a prioritised plan.
- **Why can't AI find my site?**: which assistants can read and quote you, and what to change.
- **Launch checklist**: a tick or cross for everything a page needs before going live.
- **AI visibility makeover**: robots.txt, llms.txt and answer passages in one go.
- **Pre-deploy SEO gate**: scan the built HTML and block the release below a minimum score.

### Score card in the chat

In clients that support MCP Apps (Claude) or the Apps SDK (ChatGPT), scan results also show as a visual card:

<p align="center"><img src="assets/score-card.png" alt="OnPage.dev score card in the chat: score 46, AI readiness 27, and the fixes to make first" width="420"></p>

## Why it is different

|  | OnPage.dev | Data vendor MCPs (Ahrefs, Semrush and similar) | Self-hosted audit servers |
|---|---|---|---|
| Price | Free | Paid plan or API credits | Free |
| Setup | Paste one URL | Account and key | Install and run yourself, often extra API keys |
| Built for | Acting on results: fix, check before deploy, confirm | Research data: keywords, backlinks, rankings | Audits and reports |
| Scan unpublished HTML | Yes, `scan_html` | No | Rarely |
| AI search tools | Crawler access, AI-answer checks, robots.txt policy, llms.txt | AI visibility tracking on some | Rarely |
| Ready code | Fix pack, JSON-LD, robots.txt, llms.txt | No | Varies |

What OnPage.dev does not do: search volumes, rankings or backlinks. For those, the data vendors are still the place to go, and they work well alongside OnPage.dev.

## Example prompts

```
Why does ChatGPT never mention example.com? Check it with OnPage.dev.
Scan our pricing page and give me the five fixes with the code.
Let ChatGPT search read our site but block AI training. Write the robots.txt.
Does our blog post answer "how long does shipping to Germany take" well enough for AI to quote?
Write three title options for this page and check which ones fit in Google.
Fix the SEO issues in this project, check the build with OnPage.dev and keep going until it scores 95.
```

## Claude Code plugin

The server plus commands and skills that run the fix loop for you.

```
/plugin marketplace add seoonpage/onpage-tools
/plugin install onpage@onpage-dev
```

- `/seo-check [url or path]`: scan a live page, or find this project's built HTML and scan that, then fix what is wrong.
- `/ai-visibility`: check whether ChatGPT, Claude, Perplexity and Gemini can read and quote the site, and write `robots.txt` and `llms.txt`.
- **seo-fix-loop** skill: fixes in your source (templates, Next.js `metadata`, Astro frontmatter), checks with `scan_html` before deploy and confirms with `rescan_and_compare` after.

About 300 tokens of always-on context.

## GitHub Action: SEO gate

Scans the HTML your build produces on every pull request, comments the scores and top fixes, and fails when a page drops below your minimum.

```yaml
name: SEO gate
on: pull_request
permissions:
  contents: read
  pull-requests: write
jobs:
  seo:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - run: npm ci && npm run build
      - uses: seoonpage/onpage-tools@v1
        with:
          paths: "dist/**/*.html"          # built HTML to check
          base-url: "https://example.com"   # optional, for canonical and relative links
          min-score: "80"                   # fail below this
          max-files: "10"                   # about 20 scans per minute
```

The pull request gets a comment like this, updated on every push:

> ### ❌ OnPage.dev SEO gate: lowest score 36 (minimum 80)
> | Page | Score | AI readiness | Fix first |
> |---|---:|---:|---|
> | `dist/about/index.html` | **36** | 0 | There is no meta description; There is no H1; The title is 5 characters |
> | `dist/index.html` | 90 | 22 | Thin content: 32 words; No structured data; Open Graph is incomplete |

## Security and privacy

- **Read-only.** Every tool only reads public pages or the HTML you send. Nothing is changed anywhere.
- **Public pages only.** Private, internal and local network addresses are refused (SSRF protection), and so are non-web schemes.
- **No storage of content.** HTML sent to `scan_html` is analysed in memory and dropped. For change tracking, only the score and issue names are kept, under a hashed key, for up to 30 days.
- **Prompt injection aware.** Text from scanned pages is returned as data and marked as such.
- **Fair use limits.** About 20 scans per minute per connection, plus a shared cap. No accounts, no keys, no tracking cookies.

Full details: [onpage.dev/privacy](https://onpage.dev/privacy) and [onpage.dev/terms](https://onpage.dev/terms).

## Limits

- Reads the HTML a server returns. JavaScript is not run, so content that only appears in the browser is not seen.
- Link checks, image sizes and AI crawler access need a live URL, so `scan_html` skips them.
- Pixel widths in `check_snippet` are an estimate; Google can also rewrite snippets.

## Links

- Web app: [onpage.dev](https://onpage.dev)
- MCP server and setup: [onpage.dev/mcp](https://onpage.dev/mcp)
- Questions: [hi@onpage.dev](mailto:hi@onpage.dev) or [open an issue](https://github.com/seoonpage/onpage-tools/issues)

## License

MIT
