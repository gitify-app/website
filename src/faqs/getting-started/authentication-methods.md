---
title: "What authentication methods does Gitify support?"
category: "Getting Started"
order: 1
---
Gitify offers three ways to authenticate with GitHub:

- **Login with GitHub** — The easiest option. Uses the OAuth Device Flow: Gitify generates a code, opens `github.com/login/device` in your browser, and completes authentication automatically. Supports GitHub Cloud only.
- **Personal Access Token (PAT)** — Authenticate with a token generated in your GitHub account settings. Supports both GitHub Cloud and GitHub Enterprise Server.
- **OAuth App** — Authenticate using a Client ID and Client Secret from a GitHub OAuth App you create. Supports both GitHub Cloud and GitHub Enterprise Server.

If you are unsure which method to use, **Login with GitHub** is recommended for most users on GitHub Cloud. For GitHub Enterprise Server, use a PAT or OAuth App.
