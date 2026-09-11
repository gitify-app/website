---
title: "What authentication methods does Gitify support?"
category: "Getting Started"
order: 1
---
How you sign in depends on the forge. On GitHub.com, start with **Login with GitHub**. On other GitHub hostnames, use a personal access token (PAT) or a GitHub OAuth app. On Gitea, Forgejo, Codeberg, and GitLab, use a PAT. On Bitbucket Cloud, use an app password.

### GitHub

GitHub.com, GitHub Enterprise Cloud, and GitHub Enterprise Server:

- **Login with GitHub** — The simplest option on GitHub.com. Gitify shows a code, opens `github.com/login/device` in your browser, and finishes sign-in for you. This method is for GitHub.com only.
- **Personal access token (classic)** — A classic token from your GitHub account settings. Works on GitHub.com, GitHub Enterprise Cloud, and GitHub Enterprise Server.
- **GitHub OAuth app** — A Client ID and Client Secret from an OAuth app you create. Works on GitHub.com, GitHub Enterprise Cloud, and GitHub Enterprise Server.

If you are unsure, use **Login with GitHub** on GitHub.com. On GitHub Enterprise Cloud or GitHub Enterprise Server, use a classic personal access token or a GitHub OAuth app.

### Gitea, Forgejo, Codeberg

- **Personal access token (PAT)** — Create a token under _Settings → Applications_, then enter it in Gitify with your instance hostname (for example `codeberg.org` or your self-hosted URL).

### Bitbucket Cloud

- **App password** — Create an app password under _Personal settings → App passwords_ and enter it as your token in Gitify.

### GitLab

GitLab Cloud and Self-Managed:

- **Personal access token (PAT)** — Create a token under _User settings → Access tokens_, then enter it in Gitify with your instance hostname.

**Related:** [Which Git forges does Gitify support?](/faq/#supported-forges) · [How do I configure GitHub OAuth app authentication?](/faq/#oauth-app-setup) · [What GitHub scopes does Gitify require?](/faq/#github-scopes)
