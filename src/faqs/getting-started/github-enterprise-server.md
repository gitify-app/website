---
title: "Does Gitify support GitHub Enterprise Cloud and GitHub Enterprise Server?"
category: "Getting Started"
order: 3
---
Yes. Gitify supports **GitHub Enterprise Cloud**, including **GitHub Enterprise Cloud with data residency (GHDR)**, and **GitHub Enterprise Server (GHES)**, alongside **GitHub Cloud**.

> **Note:** This entry covers GitHub-specific setup. If you are using Gitea, Forgejo, Codeberg, or Bitbucket Cloud, see [Which Git forges does Gitify support?](/faq/#supported-forges) and [What authentication methods does Gitify support?](/faq/#authentication-methods).

When signing in via a **personal access token (classic)** or **GitHub OAuth app**, you will see a _Hostname_ field that defaults to `github.com`. Replace this with your instance hostname to connect:
- **GitHub Enterprise Server**: your self-hosted hostname, e.g. `github.mycompany.com`
- **GitHub Enterprise Cloud with data residency (GHDR)**: your tenant hostname, e.g. `myorg.ghe.com`

> **Note:** GitHub Enterprise Cloud organizations hosted on `github.com` use the GitHub Cloud hostname. Enterprise Managed Users (EMU) is an account model that may apply to GitHub Enterprise Cloud; it is not a separate forge. Verify that your enterprise policy permits the authentication method you plan to use.

> **Note:** The **Login with GitHub** (device authorization flow) method only supports GitHub Cloud (`github.com`) and does not expose a hostname field.

Multiple accounts across different hostnames (e.g. `github.com` and your GHES instance) can be signed in simultaneously — see [How do I add multiple accounts?](/faq/#multiple-accounts) for details.
