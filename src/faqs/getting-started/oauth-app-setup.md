---
title: "How do I configure a custom GitHub OAuth app?"
category: "Getting Started"
order: 2
---
You can sign in with a custom GitHub OAuth app on GitHub.com, GitHub Enterprise Cloud, or GitHub Enterprise Server by registering an app, enabling its device flow, and entering its public Client ID in Gitify.

1. Open [GitHub → Settings → Developer settings → OAuth Apps](https://github.com/settings/developers), or the same page on your GitHub hostname.
2. Click **New OAuth App**.
3. Fill in **Application name** and **Homepage URL**.
4. Set **Authorization callback URL** to `https://gitify.io`. The device flow does not use it, but GitHub's form asks for one.
5. Tick **Enable Device Flow**, then click **Register application**. You can also tick this later on the app's settings page and click **Update application**.
6. Copy the app's **Client ID**. No other credential is needed.
7. In Gitify, choose **Add new account → GitHub → Custom OAuth App**, enter your hostname and the client ID, then continue.
8. Gitify copies a one-time code to your clipboard and opens your host's `/login/device` page. Enter the code and authorize the app.

> **Note:** Device flow is off for new OAuth apps until you enable it. If Gitify says device flow is not enabled, tick the toggle in step 5, update the app, and try again.

> **Note:** Create a separate OAuth app for each GitHub hostname. Enterprise Managed Users (EMU) and enterprise policies may block OAuth apps. For Gitea, Forgejo, Codeberg, GitLab, and Bitbucket Cloud, use a [personal access token or app password](/faq/#authentication-methods) instead.

**Related:** [What authentication methods does Gitify support?](/faq/#authentication-methods) · [Does Gitify support GitHub Enterprise Cloud and GitHub Enterprise Server?](/faq/#github-enterprise-server)
