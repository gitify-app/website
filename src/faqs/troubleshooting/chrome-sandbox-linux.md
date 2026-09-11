---
title: "How do I fix Chrome Sandbox permissions on Linux?"
category: "Troubleshooting"
order: 3
---
If Gitify will not open on Linux because of `Chrome Sandbox` permissions, the Electron sandbox binary must be owned by root and have the set-user-ID (SUID) bit set.

1. Run:

```
sudo chown root:root /opt/Gitify/chrome-sandbox
sudo chmod 4755 /opt/Gitify/chrome-sandbox
```

2. If Gitify still fails to start, check logs with:

```
journalctl -xe | grep gitify
```

> **Note:** `/opt/Gitify/chrome-sandbox` is the path for a standard install. If you installed Gitify as an AppImage or in a custom directory, change the path to match.
