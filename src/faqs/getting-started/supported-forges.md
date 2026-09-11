---
title: "Which Git forges does Gitify support?"
category: "Getting Started"
order: 0
---
Gitify supports notifications from the following Git forges:

- **GitHub Cloud** — the standard `github.com` service, including GitHub Enterprise Cloud organizations hosted on `github.com`
- **GitHub Enterprise Server (GHES)** — self-hosted GitHub instances
- **GitHub Enterprise Cloud with data residency (GHDR)** — a GitHub Enterprise Cloud deployment hosted on `[tenant].ghe.com`
- **Gitea** — including self-hosted instances
- **Forgejo** — compatible with the Gitea authentication flow
- **Codeberg** — powered by Forgejo, fully supported
- **Bitbucket Cloud** — `bitbucket.org`
- **GitLab Cloud and Self-Managed** — cloud and self-hosted GitLab instances

> **Note:** Enterprise Managed Users (EMU) is an account model for GitHub Enterprise Cloud, not a separate forge. GitHub Enterprise Cloud with data residency (GHDR) uses managed user accounts on a dedicated `[tenant].ghe.com` subdomain.

Multiple accounts across different forges can be signed in simultaneously. See [How do I add multiple accounts?](/faq/#multiple-accounts) for details.

For authentication setup, see [What authentication methods does Gitify support?](/faq/#authentication-methods).
