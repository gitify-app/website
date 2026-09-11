---
title: "Why aren't my notifications showing?"
category: "Troubleshooting"
order: 1
---
Gitify is signed in but your inbox is empty? Check the steps for your forge below.

### GitHub

GitHub.com, GitHub Enterprise Cloud, and GitHub Enterprise Server:

#### Classic personal access token (PAT)

1. On GitHub.com, open [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens). On GitHub Enterprise Cloud or GitHub Enterprise Server, open the same page on your GitHub hostname.
2. Confirm the token Gitify uses is a **classic PAT** with the scopes listed in [What GitHub scopes does Gitify require?](/faq/#github-scopes).

> **Note:** If your organization uses SAML single sign-on (SSO), authorize the PAT for that organization. See [How do I authorize my classic PAT for a GitHub SSO organization?](/faq/#github-sso-pat-authorization).

#### Login with GitHub

Gitify signs in with its GitHub OAuth app. Some organizations must approve that app before Gitify can see their notifications.

1. Open [GitHub → Settings → Applications → Authorized OAuth Apps](https://github.com/settings/applications).
2. Click the **Gitify** application.
3. Under **Organization access**, check the state for each organization:

| State | Meaning |
|---|---|
| ✅ Green check | Access granted — notifications from this org will appear |
| **Request** button | Access not yet granted — click to ask your org admins to approve |
| _Disallowed by org owner_ | The organization has blocked third-party OAuth apps — contact your org admin |

> **Note:** If an organization shows **Request** or **Disallowed by org owner**, you will not get notifications from that organization until access is approved.

### Gitea, Forgejo, Codeberg

- Check your personal access token (PAT) is valid and has not expired — create a new one under _Settings → Applications_ if needed
- Confirm the hostname in Gitify matches your instance URL exactly (for example `codeberg.org` or your self-hosted domain)
- Confirm the PAT can read notifications and repositories on that instance

### Bitbucket Cloud

- Check your **app password** is valid and has not been revoked — create a new one under _Personal settings → App passwords_ if needed
- Confirm the app password grants **Read** access to Account, Repositories, and Pull requests

### GitLab

GitLab Cloud and Self-Managed:

- Check your personal access token (PAT) is valid and has not expired — create a new one under _User settings → Access tokens_ if needed
- Confirm the hostname in Gitify matches your instance URL exactly (for example `gitlab.com` or your self-hosted domain)
- Confirm the PAT can read notifications and repositories on that instance

**Related:** [What authentication methods does Gitify support?](/faq/#authentication-methods) · [What GitHub scopes does Gitify require?](/faq/#github-scopes)
