# 🚀 WebAR Astronaut Viewer

A browser-based WebXR/AR viewer built with **Google's `model-viewer`** web component. Load a 3D astronaut model, inspect it in an interactive 3D viewer, and place it in your real-world space using AR — no app install required.

Live demo: *(add your GitHub Pages link here once deployed)*

---

## Features

- **3D model viewing** — drag to orbit, pinch/scroll to zoom, auto-rotate on load
- **WebXR / AR placement** — on supported Android devices (Scene Viewer), iOS (Quick Look), and WebXR-capable browsers, tap the AR button to place the astronaut in your physical room
- **Custom loading progress bar** — reads `model-viewer`'s `progress` event to show real download progress instead of a blank screen
- **HUD-style telemetry UI** — mission-control-inspired interface with corner brackets, a signal-status indicator, and a **live rotation readout** that updates in real time as you drag the model (reads `camera-change` events and `getCameraOrbit()`)
- **Responsive layout** — HUD frame reflows for mobile, type scales fluidly with `clamp()`
- **Accessibility-aware** — visible focus states and `prefers-reduced-motion` support for the animated status indicator

---

## Tech stack

| Layer | Tool |
|---|---|
| 3D / AR rendering | [`@google/model-viewer`](https://modelviewer.dev/) (loaded via unpkg CDN) |
| Markup | HTML5 |
| Styling | Vanilla CSS3 (custom properties, `clamp()`, pseudo-elements) |
| Fonts | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |
| Interactivity | Vanilla JavaScript (no framework) |
| 3D model | `Astronaut.glb` (glTF Binary), hosted on modelviewer.dev's shared assets |

No build step, no package manager, no bundler — it's three static files.

---

## Project structure

```
.
├── index.html      # Page structure, HUD markup, model-viewer element
├── style.css       # Design system (tokens, HUD frame, responsive rules)
├── script.js       # Progress bar logic + live rotation readout
└── README.md
```

---

## Running locally

No build tools needed — just serve the folder statically.

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node
npx serve .
```

Then open `http://localhost:8000` in your browser.

> Opening `index.html` directly via `file://` mostly works too, but some browsers restrict AR/camera features on `file://` origins — use a local server for the full experience.

---

## Testing AR

- **Android (Chrome)**: uses Scene Viewer — tap the AR icon inside the viewer.
- **iOS (Safari)**: uses Quick Look — tap the AR icon to open the model in AR Quick Look.
- **Desktop**: AR placement isn't available, but full 3D orbit/zoom controls work in any modern browser.

WebXR/AR features require **HTTPS** (or `localhost`) — they won't activate on a plain HTTP deployment.

---

## Deployment (GitHub Pages)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set source to your default branch, root folder.
4. Your app will be live at `https://<username>.github.io/<repo-name>/`.

GitHub Pages serves over HTTPS by default, so AR features will work out of the box.

---

## Customizing the model

Swap the astronaut for any other `.glb`/`.gltf` model by changing the `src` attribute on `<model-viewer>` in `index.html`:

```html
<model-viewer
    id="ar-model"
    src="your-model.glb"
    alt="Description of your model"
    ...
></model-viewer>
```

---

## Roadmap / ideas for extension

- [ ] Custom-styled AR button (replace default browser button)
- [ ] Model picker to switch between multiple `.glb` files
- [ ] Drag-and-drop upload for user-supplied models
- [ ] Clickable hotspots/annotations on the model
- [ ] Screenshot/share button using `model-viewer.toDataURL()`

---

## Credits

Built with [`<model-viewer>`](https://modelviewer.dev/) by Google, and the WebXR Device API. Astronaut model from modelviewer.dev's shared assets.
