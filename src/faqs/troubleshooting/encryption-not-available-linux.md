---
title: "How do I fix 'Encryption is not available' errors on Linux?"
category: "Troubleshooting"
order: 4
---
Some Linux users (i.e., Arch Linux) have reported seeing **Encryption is not available** errors within the application logs.

To remediate, try launching Gitify with the `--password-store=basic` flag to disable encrypted storage:

```
gitify --password-store=basic
```

For a full list of available options, see the [Electron safeStorage documentation](https://www.electronjs.org/docs/latest/api/safe-storage#safestoragesetuseplaintextencryptionuseplaintext).