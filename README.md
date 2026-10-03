# gitify.io

[![Netlify Status][netlify-badge]][netlify-deploys] [![Quality Gate Status][quality-badge]][quality] [![Renovate enabled][renovate-badge]][renovate] [![Contributors][contributors-badge]][github] [![OSS License][license-badge]][license]

> The source code for [gitify.io](https://gitify.io), built with [Astro](https://astro.build).

## 🚀 Getting started

Requires [pnpm](https://pnpm.io) and Node.js >= 24.

| Command         | Action                                          |
| --------------- | ----------------------------------------------- |
| `pnpm install`  | Install dependencies                            |
| `pnpm dev`      | Start the dev server at `http://localhost:4321` |
| `pnpm build`    | Build the production site to `./dist/`          |
| `pnpm preview`  | Preview the production build                    |
| `pnpm lint`     | Run Biome lint and apply fixes                  |

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
