---
title: "Why aren't my notifications showing?"
category: "Troubleshooting"
order: 1
---

### GitHub Cloud & GitHub Enterprise Server

**Personal Access Token (PAT):**
- Open [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
- Confirm that your PAT has the following recommended permissions: `notifications`, `read:user` and `repo`

> **Note:** If you only want Gitify to access public repositories, you can use `notifications`, `read:user` and `public_repo` instead. See [What GitHub scopes does Gitify require?](/faq/#github-scopes) for full details.

> **Note:** If your organization enforces SAML SSO, your PAT must also be explicitly authorized for that organization. See [How do I authorize my PAT for a GitHub SSO organization?](/faq/#github-sso-pat-authorization).

**Login with GitHub (Device Flow):**
- Some organizations require GitHub Apps to request access prior to allowing access to organization data (including notifications)
- To check if Gitify is approved by your organization:
  - Open [GitHub → Settings → Applications → Authorized GitHub Apps](https://github.com/settings/applications)
  - Click on the _Gitify_ application
  - Under _Organization access_, you will see one of three states for each organization:

| State | Meaning |
|---|---|
| ✅ Green check | Access granted — notifications from this org will appear |
| **Request** button | Access not yet granted — click to ask your org admins to approve |
| _Disallowed by org owner_ | The organization has blocked third-party GitHub App access entirely — contact your org admin |

> **Note:** If an organization shows **Request** or **Disallowed by org owner**, you will not receive notifications from that organization until access is approved.

### Gitea, Forgejo & Codeberg

- Verify your PAT is valid and has not expired — regenerate it in your account under _Settings → Applications_ if needed
- Confirm the hostname saved in your Gitify account settings exactly matches your instance URL (e.g. `codeberg.org` or your self-hosted domain)
- Ensure your PAT has sufficient read permissions for notifications and repositories on your instance

### Bitbucket Cloud

- Verify your app password is valid and has not been revoked — regenerate it in _Personal settings → App passwords_ if needed
- Ensure your app password grants **Read** access to: Account, Repositories, and Pull requests