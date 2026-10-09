# gitify.io

[![Netlify Status][netlify-badge]][netlify-deploys] [![Quality Gate Status][quality-badge]][quality] [![Renovate enabled][renovate-badge]][renovate] [![Contributors][contributors-badge]][github] [![OSS License][license-badge]][license]

> The source code for [gitify.io](https://gitify.io), built with [Astro](https://astro.build).

## 🚀 Getting started

Requires [pnpm](https://pnpm.io) and Node.js >= 24.

| Command              | Action                                        |
| -------------------- | --------------------------------------------- |
| `pnpm install`       | Install dependencies                          |
| `pnpm dev`           | Start the dev server at `http://localhost:4321` |
| `pnpm build`         | Build the production site to `./dist/`         |
| `pnpm check`         | Check Astro and TypeScript types               |
| `pnpm preview`       | Preview the production build                  |
| `pnpm lint`          | Run Biome lint and apply fixes                 |
| `pnpm test`          | Run unit tests with Node.js                    |
| `pnpm test:coverage` | Run tests and write `coverage/lcov.info`       |

Run `pnpm check` to validate Astro templates and TypeScript files, including
tests. Type checking runs in its own CI job on pull requests and pushes to
`main`; type errors fail the job, while warnings and hints remain nonblocking.
It is separate from Biome linting, unit tests, and `pnpm build`, which compiles
the production site without type checking.

### GitHub API access

Repository stats and download links use GitHub's API. To increase the request
quota, optionally set `GITHUB_TOKEN` in a local `.env` file or your build
environment. A token with access to public repository metadata is sufficient;
do not expose it through a `PUBLIC_` environment variable or commit it.

Requests are shared and cached for five minutes per server/build process,
including failures. API requests time out after five seconds and are not
automatically retried. If GitHub is unavailable or rate-limited, the site uses
cached data when available, otherwise links to GitHub Releases without stats.

Run the API caching and fallback tests with `pnpm test`. Tests also run in CI
on pull requests and pushes to `main`.

Coverage uses c8 with settings in `.c8rc.json`. The SonarQube workflow runs
`pnpm test:coverage` before scanning and imports the LCOV report. Test files
are classified as tests, not production sources.

## 📝 Content

FAQs are plain Markdown files in `src/faqs/<category>/<slug>.md`, rendered on the [FAQ page](https://gitify.io/faq). 

Each file needs the following frontmatter:

```yaml
---
title: "Question"
category: "Getting Started" # one of the four categories below
order: 0                   # sorts within the category
---
```

Categories: `Getting Started` · `Using Gitify` · `Troubleshooting` · `Contributing`

## 🤝 Contributing

See [How to contribute](https://gitify.io/faq/#how-to-contribute) or read the [Code of Conduct](.github/CODE-OF-CONDUCT.md).

## 📄 License

Distributed under the [MIT License](LICENSE).

<!-- LINK LABELS -->
[github]: https://github.com/gitify-app/website
[contributors-badge]: https://img.shields.io/github/contributors/gitify-app/website?logo=github
[netlify-badge]: https://img.shields.io/netlify/a060080d-e0bd-46bf-a2b5-0290a18ead9d?logo=netlify&logoColor=white
[netlify-deploys]: https://app.netlify.com/projects/gitify/deploys
[license]: LICENSE
[license-badge]: https://img.shields.io/github/license/gitify-app/website?logo=github
[renovate]: https://github.com/gitify-app/website/issues/15
[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovate&logoColor=white
[quality]: https://sonarcloud.io/summary/new_code?id=gitify-app_website
[quality-badge]: https://img.shields.io/sonar/quality_gate/gitify-app_website?server=https%3A%2F%2Fsonarcloud.io&logo=sonarqubecloud
