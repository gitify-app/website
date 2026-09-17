---
title: "How do I keep Gitify beside the panel on KDE Plasma?"
category: "Troubleshooting"
order: 4
---
On Wayland, the desktop controls window placement, so Gitify may open in the center of the screen. The optional [Gitify KWin script on KDE Store](https://store.kde.org/p/2371508/) places its popup beside your panel when you open it from the tray.

The script requires **KDE Plasma 6 on Wayland** and **Gitify 7.8 or newer**. Install Gitify separately and leave its **Use X11 backend** setting off.

1. Download `gitify.kwinscript` from the KDE Store listing.
2. Open **System Settings → Window Management → KWin Scripts**.
3. Choose **Install from File** and select the downloaded script.
4. Enable **Gitify** and click **Apply**.
5. Open Gitify from its tray icon.

The script remembers the last tray-click position for keyboard opens. Before the first tray click, it places Gitify near the end of the panel. It supports top, bottom, left, and right panels, including floating and auto-hide panels.

For source code, positioning details, and issue reports, see [Gitify for KDE on GitHub](https://github.com/gitify-app/kde).
