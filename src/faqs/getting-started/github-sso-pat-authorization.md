---
title: "How do I authorize my classic PAT for a GitHub SSO organization?"
category: "Getting Started"
order: 7
---
If your GitHub organization enforces **SAML single sign-on (SSO)**, you must explicitly authorize a **personal access token (classic)** to access that organization's data — including notifications. Without this step, Gitify will not show notifications from repositories in that organization even if your token has the correct scopes. Fine-grained PATs use different SSO and repository-permission controls.

To authorize a classic PAT for SSO:
- On GitHub.com, open [GitHub → Settings → Personal access tokens](https://github.com/settings/tokens). On Enterprise Cloud or GHES, open the equivalent settings page on your GitHub hostname.
- Find the token you use with Gitify
- Click **Configure SSO** next to the token
- Click **Authorize** next to each SSO-enabled organization you want to grant access
- Complete the SSO authentication flow for each organization

Once authorized, Gitify will be able to fetch notifications from repositories in those organizations. Re-authorization may be required if your SSO session expires or your organization's SSO configuration changes.

For more details, see the [GitHub documentation on authorizing a PAT for use with SSO](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on).
