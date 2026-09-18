# FORMWAHL

GitHub Pages: https://o-some.github.io/chelonakiwebsites/

Statische Website. Quellcode im Hauptverzeichnis; veröffentlichter Build unter `docs/`.

## Aktualisieren

Node 22+, pnpm 11.25.0. `pnpm install --frozen-lockfile`, `pnpm build`, danach `out/` nach `docs/` kopieren und `docs/.nojekyll` anlegen. Tests und Typprüfung vor dem Commit ausführen. Pages veröffentlicht `main /docs`.

Die ursprüngliche Sites-Installation bleibt separat erhalten. Keine Zugangsdaten oder internen CAF-Daten enthalten.
