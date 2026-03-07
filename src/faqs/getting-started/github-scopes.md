---
title: "What GitHub scopes does Gitify require?"
category: "Getting Started"
order: 3
---

The required GitHub scopes depend on your chosen authentication method.

**Login with GitHub** (Device Flow) and **OAuth App**:

Scopes are pre-configured by Gitify and requested automatically during sign-in. No manual scope selection is required.

**Personal Access Token (PAT)**:

When generating a PAT, the following scopes are required:
- `notifications` — to read GitHub notifications
- `read:user` — to read your GitHub user details (name, profile, avatar)
- `repo` — to enrich notification details for public and private repositories

> **Note:** If you only need access to public repositories, you can use `public_repo` instead of `repo`.
