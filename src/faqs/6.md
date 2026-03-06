---
title: "How do I fix 'Chrome Sandbox' permissions on Linux?"
category: "Troubleshooting"
order: 3
---
If you experience issues opening Gitify on Linux due to `Chrome Sandbox` permissions, the Electron sandbox requires root ownership and the SUID bit to be set on the sandbox binary. Run the following commands to fix this:

```
sudo chown root:root /opt/Gitify/chrome-sandbox
sudo chmod 4755 /opt/Gitify/chrome-sandbox
```

> **Note:** The path `/opt/Gitify/chrome-sandbox` assumes a standard installation. If you installed Gitify via AppImage or to a custom directory, adjust the path accordingly.

To check for startup errors:
```
journalctl -xe | grep gitify
```