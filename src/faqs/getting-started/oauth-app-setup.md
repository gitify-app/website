---
title: "How do I configure GitHub OAuth app authentication?"
category: "Getting Started"
order: 2
---
You can sign in with a GitHub OAuth app on GitHub.com, GitHub Enterprise Cloud, and GitHub Enterprise Server by registering an app and pasting its client ID and secret into Gitify.

1. On GitHub.com, open [GitHub → Settings → Developer settings → OAuth Apps](https://github.com/settings/developers). On GitHub Enterprise Cloud or GitHub Enterprise Server, open the same page on your GitHub hostname.
2. Click **New OAuth App**.
3. Set **Authorization callback URL** to `gitify://oauth`.
4. Fill in the other required fields.
5. Click **Register application**.
6. Click **Generate a new client secret**.
7. Enter the client ID and secret in Gitify.

> **Note:** Create a separate OAuth app for each GitHub hostname. Enterprise Managed Users (EMU) and enterprise policies may block OAuth apps. For Gitea, Forgejo, Codeberg, GitLab, and Bitbucket Cloud, use a [personal access token or app password](/faq/#authentication-methods) instead.

**Related:** [What authentication methods does Gitify support?](/faq/#authentication-methods) · [Does Gitify support GitHub Enterprise Cloud and GitHub Enterprise Server?](/faq/#github-enterprise-server)
