---
title: "Does Gitify support GitHub Enterprise Server?"
category: "Getting Started"
order: 3
---
Yes. Gitify supports **GitHub Enterprise Server (GHES)** and **GitHub Enterprise Cloud with Data Residency** alongside GitHub Cloud.

> **Note:** This entry covers GitHub-specific setup. If you are using Gitea, Forgejo, Codeberg, or Bitbucket Cloud, see [Which Git forges does Gitify support?](/faq/#supported-forges) and [What authentication methods does Gitify support?](/faq/#authentication-methods).

When signing in via **Personal Access Token** or **OAuth App**, you will see a _Hostname_ field that defaults to `github.com`. Replace this with your instance hostname to connect:
- **GitHub Enterprise Server**: your self-hosted hostname, e.g. `github.mycompany.com`
- **GitHub Enterprise Cloud (Data Residency)**: your tenant hostname, e.g. `myorg.ghe.com`

> **Note:** The **Login with GitHub** (Device Flow) method only supports GitHub Cloud (`github.com`) and does not expose a hostname field.

Multiple accounts across different hostnames (e.g. `github.com` and your GHES instance) can be signed in simultaneously — see [How do I add multiple accounts?](/faq/#multiple-accounts) for details.
