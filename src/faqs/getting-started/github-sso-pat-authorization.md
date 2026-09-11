---
title: "How do I authorize my classic PAT for a GitHub SSO organization?"
category: "Getting Started"
order: 5
---
If your GitHub organization uses SAML single sign-on (SSO), you must authorize your classic personal access token (PAT) for that organization. Until you do, Gitify will not show notifications from that organization's repositories, even if the token has the right scopes.

1. On GitHub.com, open [GitHub → Settings → Personal access tokens](https://github.com/settings/tokens). On GitHub Enterprise Cloud or GitHub Enterprise Server, open the same page on your GitHub hostname.
2. Find the token you use with Gitify.
3. Click **Configure SSO** next to the token.
4. Click **Authorize** next to each SSO-enabled organization you want to allow.
5. Complete the SSO sign-in for each organization.

After that, Gitify can fetch notifications from those organizations. You may need to authorize again if your SSO session expires or your organization's SSO setup changes.

Fine-grained PATs use different SSO and repository-permission controls.

For more detail, see [GitHub's documentation on authorizing a PAT for SSO](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on).

**Related:** [What GitHub scopes does Gitify require?](/faq/#github-scopes) · [Why aren't my notifications showing?](/faq/#notifications-not-showing)
