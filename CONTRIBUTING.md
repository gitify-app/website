# Gitify Website Contributing Guide

Hi! We're really excited that you're interested in contributing to the Gitify website!

Before submitting your contribution, please read through the following guide.

This repository is the source code for [gitify.io][website], built with [Astro][astro].

### 🚀 Getting Started

Requires [pnpm][pnpm] and Node.js >= 24.

Clone the repository and install dependencies:

```shell
pnpm install
```

Start the dev server (hot reload at `http://localhost:4321`):

```shell
pnpm dev
```

| Command              | Action                                          |
| -------------------- | ----------------------------------------------- |
| `pnpm dev`           | Start the dev server at `http://localhost:4321` |
| `pnpm build`         | Build the production site to `./dist/`          |
| `pnpm preview`       | Preview the production build                    |
| `pnpm check`         | Check Astro and TypeScript types                |
| `pnpm lint`          | Run Biome lint and apply fixes                  |
| `pnpm test`          | Run unit tests with Node.js                     |
| `pnpm test:coverage` | Run tests and write `coverage/lcov.info`        |

#### 🔑 GitHub API access

Repository stats and download links use GitHub's API. To increase the request quota, optionally set `GITHUB_TOKEN` in a local `.env` file or your build environment. A token with access to public repository metadata is sufficient; do not expose it through a `PUBLIC_` environment variable or commit it.

Requests are shared and cached for five minutes per server/build process, including failures. API requests time out after five seconds and are not automatically retried. If GitHub is unavailable or rate-limited, the site uses cached data when available, otherwise links to GitHub Releases without stats.

Run the API caching and fallback tests with `pnpm test`. Tests also run in CI on pull requests and pushes to `main`.

### 📝 Content

FAQs are plain Markdown files in `src/faqs/<category>/<slug>.md`, rendered on the [FAQ page][faq].

Each file needs the following frontmatter:

```yaml
---
title: "Question"
category: "Getting Started" # one of the four categories below
order: 0                   # sorts within the category
---
```

Categories: `Getting Started` · `Using Gitify` · `Troubleshooting` · `Contributing`

### 📐 OpenSpec

Planning artifacts (specs and changes) live in the shared [gitify-specs][gitify-specs] store, not in this repo. `openspec/config.yaml` declares `store: gitify-specs`, so `openspec` commands run here act on the store.

Clone and register the store once per machine:

```shell
git clone https://github.com/gitify-app/gitify-specs.git ~/openspec/gitify-specs
openspec store register ~/openspec/gitify-specs --id gitify-specs
```

Commit and push planning changes in the store repo like any other Git repo. Run `openspec doctor` to check that the store resolves.

### 🛠️ Tests

Run `pnpm test` to execute the unit tests. Coverage uses [c8][c8] with settings in `.c8rc.json`; `pnpm test:coverage` writes `coverage/lcov.info`, which the SonarQube workflow imports before scanning. Test files are classified as tests, not production sources.

Run `pnpm check` to validate Astro templates and TypeScript files, including tests. Type checking runs in its own CI job on pull requests and pushes to `main`; type errors fail the job, while warnings and hints remain nonblocking. It is separate from Biome linting, unit tests, and `pnpm build`, which compiles the production site without type checking.

### 🎨 Code Style & Conventions

- Linting, formatting, and import ordering are configured in `biome.json`. Run `pnpm lint` to check and apply fixes (`pnpm lint:check` to check only) before submitting a PR.
- Follow existing file and folder naming conventions.
- Keep commit messages clear and descriptive.

### 🐛 How to Report Bugs or Request Features

If you encounter a bug or have a feature request, please [open an issue][github-issues] with clear steps to reproduce or a detailed description of your idea. Check for existing issues before creating a new one.

### 🚢 Deployment

The site is built and deployed with [Netlify][netlify]. `netlify.toml` runs `pnpm build` and publishes `dist/`. Pushes to `main` deploy to production, and pull requests get deploy previews.

<!-- LINK LABELS -->

[website]: https://gitify.io
[faq]: https://gitify.io/faq
[astro]: https://astro.build
[pnpm]: https://pnpm.io
[c8]: https://github.com/bcoe/c8
[netlify]: https://www.netlify.com
[github-issues]: https://github.com/gitify-app/website/issues
[gitify-specs]: https://github.com/gitify-app/gitify-specs
