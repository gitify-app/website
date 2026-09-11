---
title: "What GitHub scopes does Gitify require?"
category: "Getting Started"
order: 6
---

> **Note:** This entry covers **GitHub Cloud, GitHub Enterprise Cloud, and GitHub Enterprise Server** only. Gitea, Forgejo, Codeberg, GitLab, and Bitbucket Cloud use standard read access tokens — see [What authentication methods does Gitify support?](/faq/#authentication-methods).

The required GitHub scopes depend on your chosen authentication method.

**Login with GitHub** (device authorization flow) and **GitHub OAuth app**:

Scopes are pre-configured by Gitify and requested automatically during sign-in. No manual scope selection is required.

**Personal access token (classic)**:

When generating a classic PAT, the following scopes are required:
- `notifications` — to read GitHub notifications
- `read:user` — to read your GitHub user details (name, profile, avatar)
- `repo` — to enrich notification details for public and private repositories

> **Note:** If you only need access to public repositories, you can use `public_repo` instead of `repo`.

Fine-grained PATs use repository and account permissions instead of these classic scopes. Confirm that your Gitify version and GitHub deployment support the permissions required by fine-grained PATs before using one.

For help generating a personal access token (classic) on GitHub Cloud, see [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens). For Enterprise Cloud or GHES, open the equivalent settings page on your GitHub hostname. If notifications still aren't appearing after setting up a PAT, see [Why aren't my notifications showing?](/faq/#notifications-not-showing).
