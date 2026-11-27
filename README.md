# NEON DANGER ⚡
A neon-colored, touch-friendly 2D arcade survival game built with HTML Canvas and packaged for Android using Capacitor.

## Play
Open `www/index.html` in a modern browser, or install the Android debug APK from the GitHub Actions artifact.

## Controls
- Tap the left or right half of the screen to dodge.
- Swipe left/right, or use keyboard arrows / A-D.
- Avoid spikes, blocks, lasers and wide hazard bars.
- Near misses earn CLOSE CALL points; chain dodges to raise the combo.

## Build APK + AAB
Every push to `main` or `master` runs **Build Android APK and AAB**. It creates a Capacitor Android project, builds a debug APK and release AAB, then uploads both as a 30-day workflow artifact. Run it manually from **Actions → Build Android APK and AAB → Run workflow**.

Tag a commit with `v1.0.0` (for example) to attach the APK and AAB to a GitHub Release. The release AAB is unsigned; configure Android signing before publishing to Google Play.

## Stack
HTML5 Canvas • Vanilla JavaScript • Capacitor 6 • GitHub Actions • Java 17
