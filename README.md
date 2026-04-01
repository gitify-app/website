# gitify.io 

[![Netlify Status][netlify-badge]][netlify-deploys] [![Renovate enabled][renovate-badge]][renovate] [![Contributors][contributors-badge]][github] [![OSS License][license-badge]][license] 

> The source code for our gitify.io website

> Made with Astro.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Logo.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `pnpm install`      | Installs dependencies                              |
| `pnpm run dev`      | Starts local dev server at `http://localhost:4321` |
| `pnpm run build`    | Build your production site to `./dist/`            |
| `pnpm run preview`  | Preview your build locally, before deploying       |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check`   |
| `pnpm astro --help` | Get help using the Astro CLI                       |

<!-- LINK LABELS -->
[github]: https://github.com/gitify-app/website
[contributors-badge]: https://img.shields.io/github/contributors/gitify-app/website?logo=github
[netlify-badge]: https://img.shields.io/netlify/a060080d-e0bd-46bf-a2b5-0290a18ead9d?logo=netlify&logoColor=white
[netlify-deploys]: https://app.netlify.com/projects/gitify/deploys
[license]: LICENSE
[license-badge]: https://img.shields.io/github/license/gitify-app/gitify?logo=github
[renovate]: https://github.com/gitify-app/website/issues/15
[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovate&logoColor=white
