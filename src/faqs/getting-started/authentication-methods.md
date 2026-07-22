---
title: "What authentication methods does Gitify support?"
category: "Getting Started"
order: 1
---
Authentication methods vary by forge:

### GitHub Cloud & GitHub Enterprise Server

- **Login with GitHub** — The easiest option. Uses the OAuth Device Flow: Gitify generates a code, opens `github.com/login/device` in your browser, and completes authentication automatically. Supports GitHub Cloud only.
- **Personal Access Token (PAT)** — Authenticate with a token generated in your GitHub account settings. Supports both GitHub Cloud and GitHub Enterprise Server.
- **OAuth App** — Authenticate using a Client ID and Client Secret from a GitHub OAuth App you create. Supports both GitHub Cloud and GitHub Enterprise Server.

If you are unsure which method to use, **Login with GitHub** is recommended for most users on GitHub Cloud. For GitHub Enterprise Server, use a PAT or OAuth App.

### Gitea, Forgejo & Codeberg

- **Personal Access Token (PAT)** — Generate a token in your Gitea/Forgejo/Codeberg account under _Settings → Applications_, then enter it in Gitify along with your instance hostname (e.g. `codeberg.org` or your self-hosted URL).

### Bitbucket Cloud

- **Personal Access Token (PAT)** — Generate an app password in your Bitbucket account under _Personal settings → App passwords_ and use it as your token in Gitify.
