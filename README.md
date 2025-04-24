# Social User Probe

Browser extension for launching username or profile queries across social platforms.

## 🔍 Features

- Launches grouped search URLs from `urls.yml`
- Uses YAML for editable query sets
- Chrome Extension (Manifest V3) compatible
- Remembers last search query (`chrome.storage.local`)

## 📦 Installation (Development)

1. Clone the repo
2. Go to `chrome://extensions/`
3. Enable Developer Mode
4. Click "Load Unpacked" → select this repo root

## 🗂 Folder Structure

```
contrib/ → local dependencies (js-yaml) 
src/ → extension popup source (html, css, js, yaml) 
manifest.json → extension manifest
```

## ✍️ Customize

Edit `src/urls.yml` to add or reorder your OSINT platforms.

## 🛠 Dependencies

- [js-yaml](https://github.com/nodeca/js-yaml) (UMD build)
