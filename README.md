# NEON DANGER ⚡
A colorful, touch-first 2D arcade runner built with HTML Canvas and packaged for Android using Capacitor.

## Gameplay
- Five horizontal escape positions, with safe outer edge routes.
- Dodge blocks, spikes, lasers and overhead gates.
- Jump, dash, shrink and slide; swipe up to jump and swipe down to slide.
- Collect coin trails and temporary powerups: shield, coin magnet, slow time, 2x score and extra heart.
- Three hearts per run, brief hit protection, near-miss bonus, combo score and persistent coin wallet.
- Neon cityscape background with rotating color themes and an illustrated glowing runner.

## Controls
- Swipe left/right: change route.
- Swipe up / tap JUMP: jump.
- Swipe down / tap SLIDE: slide under overhead gates.
- DASH: short invulnerable burst.
- SHRINK: temporarily reduce hitbox.
- Coins and powerups are collected by running through them.

## Android build
Every push to `main` or `master` runs **Build Android APK and AAB**. It creates a clean Capacitor Android project, builds a debug APK and release AAB, and uploads artifacts. Tag a commit with `v1.0.0` to attach APK/AAB to a GitHub Release. The release AAB is unsigned; configure Android signing before publishing to Google Play.

## Stack
HTML5 Canvas • Vanilla JavaScript • Capacitor 6 • GitHub Actions • Java 17
