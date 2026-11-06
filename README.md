# ECLIPSE 2026 — V33 HIGH-QUALITY MASCOT

Based on V32. This revision replaces the previous low-data mascot delivery logic.

- Uses the newly supplied `Animasi burung saja(4).mp4` as the source animation.
- Green-screen is keyed out and green spill is reduced while preserving the mascot at full opacity.
- Uses a high-quality transparent animated WebP at the original 1440×1080 / 30 fps source timing.
- No Data Saver / slow-network fallback that replaces the animation with a poster.
- No mascot glow/effect layer and no opacity reduction.
- The animation is still loaded when the competition area approaches the viewport rather than being permanently downloaded on first paint.
