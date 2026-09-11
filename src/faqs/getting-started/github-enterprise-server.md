---
title: "Does Gitify support GitHub Enterprise Cloud and GitHub Enterprise Server?"
category: "Getting Started"
order: 3
---
Yes. Gitify works with **GitHub.com**, **GitHub Enterprise Cloud** (including **GitHub Enterprise Cloud with data residency (GHDR)**), and **GitHub Enterprise Server (GHES)**.

When you sign in with a **personal access token (classic)** or a **GitHub OAuth app**, Gitify shows a **Hostname** field. It defaults to `github.com`. Change it to match your instance:

- **GitHub Enterprise Server (GHES):** your self-hosted hostname, for example `github.mycompany.com`
- **GitHub Enterprise Cloud with data residency (GHDR):** your tenant hostname, for example `myorg.ghe.com`
- **GitHub.com / GitHub Enterprise Cloud on github.com:** leave the hostname as `github.com`

> **Note:** Enterprise Managed Users (EMU) is an account model, not a separate forge. Your enterprise policy may limit which sign-in methods you can use.

> **Note:** **Login with GitHub** only works on GitHub.com (`github.com`) and does not show a hostname field.

**Related:** [What authentication methods does Gitify support?](/faq/#authentication-methods) · [How do I add multiple accounts?](/faq/#multiple-accounts) · [Which Git forges does Gitify support?](/faq/#supported-forges)
