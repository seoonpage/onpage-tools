# Contributing

Thanks for helping make OnPage.dev better. This repository holds the public parts: the GitHub Action, the Claude Code plugin and skills, the examples and the MCP registry entry. The scanner itself runs as a hosted service at [onpage.dev](https://onpage.dev).

## Ways to help

- **Report a wrong result.** A check that flags something that is fine, or misses something that is broken, is the most useful report we get. Open a [bug report](https://github.com/seoonpage/onpage-tools/issues/new?template=bug.yml) with the URL (or the HTML) and what you expected.
- **Suggest a check or tool.** Open a [feature request](https://github.com/seoonpage/onpage-tools/issues/new?template=feature.yml) and say which problem it solves for you.
- **Improve the Action, plugin, skills or docs.** Pull requests are welcome.
- **Security issues** go through [private reporting](https://github.com/seoonpage/onpage-tools/security/advisories/new), never a public issue. See [SECURITY.md](SECURITY.md).

## Pull requests

1. Fork the repository and create a branch from `main`.
2. Keep the change focused: one fix or feature per pull request.
3. Run the tests: `node --test test/gate.test.mjs`
4. Write copy in plain English with short sentences, the way the rest of the repository reads.
5. Open the pull request and describe what changed and why.

The Action has no dependencies on purpose. Please do not add any without discussing it in an issue first.

## Code of conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By taking part you agree to it.
