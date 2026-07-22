---
title: "What GitHub scopes does Gitify require?"
category: "Getting Started"
order: 6
---

> **Note:** This entry covers **GitHub Cloud and GitHub Enterprise Server** only. Gitea, Forgejo, Codeberg, and Bitbucket Cloud use standard read access tokens — see [What authentication methods does Gitify support?](/faq/#authentication-methods).

The required GitHub scopes depend on your chosen authentication method.

**Login with GitHub** (Device Flow) and **OAuth App**:

Scopes are pre-configured by Gitify and requested automatically during sign-in. No manual scope selection is required.

**Personal Access Token (PAT)**:

When generating a PAT, the following scopes are required:
- `notifications` — to read GitHub notifications
- `read:user` — to read your GitHub user details (name, profile, avatar)
- `repo` — to enrich notification details for public and private repositories

> **Note:** If you only need access to public repositories, you can use `public_repo` instead of `repo`.

For help generating a PAT, see [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens). If notifications still aren't appearing after setting up a PAT, see [Why aren't my notifications showing?](/faq/#notifications-not-showing).
