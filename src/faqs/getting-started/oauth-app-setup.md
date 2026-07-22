---
title: "How do I configure OAuth App authentication?"
category: "Getting Started"
order: 2
---
> **Note:** OAuth App authentication is available for **GitHub Cloud and GitHub Enterprise Server only**. For Gitea, Forgejo, Codeberg, and Bitbucket Cloud, use a [Personal Access Token](/faq/#authentication-methods).

To authenticate via an **OAuth App** with GitHub:
- Open [GitHub → Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
- Click _New OAuth App_
- Set _Authorization callback URL_ to `gitify://oauth`
- Complete all remaining mandatory fields
- Click _Register application_
- Click _Generate a new client secret_
- Use this client/secret pair within Gitify to authenticate.