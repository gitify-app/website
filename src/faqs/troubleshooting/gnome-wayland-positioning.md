---
title: "How do I keep Gitify beside the tray icon on GNOME?"
category: "Troubleshooting"
order: 5
---
On Wayland, the desktop controls window placement, so Gitify may open in the center of the screen. The optional [Gitify GNOME extension](https://extensions.gnome.org/extension/10968/gitify/) places its popup below its tray icon.

### Requirements

- **GNOME Shell 50 or 51** on a Wayland session.
- **Gitify 7.8 or newer**, installed separately, with **Use X11 backend** off.
- A tray provided by [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/), or a distribution that includes it, such as Ubuntu. GNOME Shell has no built-in tray.

The extension is not needed on an X11 session or when Gitify's **Use X11 backend** setting is enabled.

### Installation

#### From GNOME Extensions

1. Install and enable [AppIndicator support](https://extensions.gnome.org/extension/615/appindicator-support/) if your desktop does not already provide it.
2. Install and enable [Gitify on GNOME Extensions](https://extensions.gnome.org/extension/10968/gitify/).
3. Open the extension's settings in **GNOME Extensions** or **Extension Manager** and use **Set up Gitify** to check the app and tray setup.
4. Open Gitify from its tray icon. Portable AppImages may need to be launched from your files first.

The GNOME Extensions listing currently provides version **0.1.0 for GNOME Shell 50**. For GNOME Shell 51, use a release bundle whose metadata includes Shell 51 until a compatible version is published on the listing.

#### From a release bundle

Download `gitify@gitify.io.shell-extension.zip` from the [latest extension release](https://github.com/gitify-app/gnome/releases/latest), then run:

```shell
gnome-extensions install --force gitify@gitify.io.shell-extension.zip
```

GNOME Shell discovers new extensions at login on Wayland, so **log out and back in**, then enable the extension:

```shell
gnome-extensions enable gitify@gitify.io
```

If you use **Gitify 7.8.0** with the default dark GNOME panel, enable **Use white tray icon** in Gitify's Tray settings.

### Window placement

The extension places Gitify below its tray icon. If it cannot find the icon, it places the window in the top-right corner of the primary monitor instead.

For current compatibility, source code, and issue reports, see [Gitify for GNOME on GitHub](https://github.com/gitify-app/gnome#install).

Related: [KDE Plasma window positioning](#kde-wayland-positioning).
