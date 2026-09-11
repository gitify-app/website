---
title: "How do I configure GitHub OAuth app authentication?"
category: "Getting Started"
order: 2
---
> **Note:** GitHub OAuth app authentication is available for **GitHub.com, GitHub Enterprise Cloud, and GitHub Enterprise Server**. For Gitea, Forgejo, Codeberg, GitLab, and Bitbucket Cloud, use a [Personal Access Token](/faq/#authentication-methods).

To authenticate via a **GitHub OAuth app**:
- On GitHub.com, open [GitHub → Settings → Developer settings → OAuth Apps](https://github.com/settings/developers). On Enterprise Cloud or GHES, open the equivalent settings page on your GitHub hostname.
- Click _New OAuth App_
- Set _Authorization callback URL_ to `gitify://oauth`
- Complete all remaining mandatory fields
- Click _Register application_
- Click _Generate a new client secret_
- Use this client/secret pair within Gitify to authenticate. A separate OAuth app may be required for each GitHub hostname. Enterprise Managed Users (EMU) and enterprise policies may restrict OAuth app access.