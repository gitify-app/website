---
title: "Does Gitify support GitHub Enterprise Server?"
category: "Getting Started"
order: 3
---
Yes. Gitify supports both GitHub Cloud and **GitHub Enterprise Server (GHES)**.

When signing in via **Personal Access Token** or **OAuth App**, you will see a _Hostname_ field that defaults to `github.com`. Replace this with your GHES hostname (e.g. `github.mycompany.com`) to connect to your Enterprise instance.

> **Note:** The **Login with GitHub** (Device Flow) method only supports GitHub Cloud and does not expose a hostname field.

Multiple accounts across different hostnames (e.g. `github.com` and your GHES instance) can be signed in simultaneously — see _"How do I add multiple GitHub accounts?"_ for details.
