---
title: "What GitHub scopes does Gitify require?"
category: "Getting Started"
order: 4
---
Gitify needs specific GitHub permissions so it can read your notifications and profile. The required GitHub scopes depend on how you sign in.

This article covers **GitHub.com, GitHub Enterprise Cloud, and GitHub Enterprise Server** only.

#### Login with GitHub and GitHub OAuth app

Gitify requests the scopes for you during sign-in. You do not choose them yourself.

#### Classic personal access token (PAT)

When you create a classic PAT, select:

- `notifications` — to read GitHub notifications
- `read:user` — to read your GitHub user details (name, profile, avatar)
- `repo` — to enrich notification details for public and private repositories

> **Note:** If you only need public repositories, you can use `public_repo` instead of `repo`.

Fine-grained PATs use repository and account permissions instead of these classic scopes. Confirm that your Gitify version and GitHub deployment support the permissions required by fine-grained PATs before using one.

On GitHub.com, create a classic token at [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens). On GitHub Enterprise Cloud or GitHub Enterprise Server, open the same page on your GitHub hostname.

**Related:** [What authentication methods does Gitify support?](/faq/#authentication-methods) · [Why aren't my notifications showing?](/faq/#notifications-not-showing)
