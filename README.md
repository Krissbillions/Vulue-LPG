Vulue LPG - Responsive Vite React project
Files included:
- package.json
- index.html
- src/main.jsx
- src/App.jsx
- src/Main.jsx
- src/index.css

To run locally:
1. npm install
2. npm run dev

Notes:
- Design is refactored mobile-first and responsive.
- Background images reference the S3 URLs you provided and are preserved.


## Assets included (placeholders) and manifest
The project now contains a `public/assets/` and `src/assets/` folder with **placeholder SVGs** for each remote image referenced in the code. Use the included `fetch-assets.sh` (macOS/Linux) or `fetch-assets.ps1` (Windows PowerShell) to download the real images into `public/assets/`.

**Assets referenced in the project (filename <- original URL):**
- 0bBXN5ci7p.png  <-  https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/0bBXN5ci7p.png
- 7QGTZqFFVN.png  <-  https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/7QGTZqFFVN.png
- BXoFzkQmAc.png  <-  https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/BXoFzkQmAc.png
- CcMpzMUhah.png  <-  https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/CcMpzMUhah.png
- gRRLAELOuj.png  <-  https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/gRRLAELOuj.png
- mpzxL2KBQb.png  <-  https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/mpzxL2KBQb.png
- vM1sdPkym5.png  <-  https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/vM1sdPkym5.png
- wX9V9Yv4PN.png  <-  https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/wX9V9Yv4PN.png
- yNfM829rOW.png  <-  https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/yNfM829rOW.png

A machine-readable `assets-manifest.json` is also included at the project root with this mapping.

To download real assets automatically (from a terminal):

```bash
# run this in the project root
chmod +x fetch-assets.sh
./fetch-assets.sh
```

If you prefer to download assets manually, place them into `public/assets/` using the same filenames as listed above.
