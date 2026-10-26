# artursaenko.github.io

Meine persönliche Website: **https://artursaenko.github.io** (Deutsch) · **/en/** (English)

- [Astro](https://astro.build) mit einer Vue-Komponente für den animierten Hintergrund
- Deutsch und Englisch mit eigenen Adressen; alle Texte in `src/i18n/content.ts`
- Keine Cookies, kein Tracking, Schriften selbst gehostet
- Getestet mit Lighthouse, axe-core und Playwright: siehe [Testbericht](https://artursaenko.github.io/testbericht/)

## Inhalte ändern

- Texte: `src/i18n/content.ts`
- Foto: `public/img/artur.jpg` (quadratisch, mind. 300 × 300 px). Ohne Foto erscheinen die Initialen.
- Lebenslauf: `public/cv/Lebenslauf_Artur_Saienko.pdf` und `public/cv/CV_Artur_Saienko_EN.pdf`. Die Links erscheinen automatisch, sobald die Dateien vorhanden sind.

## Lokal starten und bauen

```bash
npm install
npm run dev     # Vorschau unter http://localhost:4321
npm run build   # Ausgabe in docs/ für GitHub Pages
```

GitHub Pages: Settings → Pages → Deploy from a branch → `main`, Ordner `/docs`.

Der Aufbau der Startseite ist von [dtc-website](https://github.com/diogotcorreia/dtc-website) von Diogo Correia inspiriert (MIT).
