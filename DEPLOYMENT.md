# Deployment: verwalterberater.de via GitHub Pages (kostenlos)

**Setup:** Domain liegt bei Hostinger (nur DNS), Hosting läuft kostenlos über GitHub Pages.
Kein Hostinger-Hosting-Paket nötig, kein FTP.

Repository: https://github.com/tim0402-cmyk/verwalterberater

## Schritt 1: Code pushen

```bash
cd /opt/claude-workspace/verwalterberater
git add .
git commit -m "Verwalterberater Landingpage"
git remote add origin https://github.com/tim0402-cmyk/verwalterberater.git
git push -u origin main
```

## Schritt 2: GitHub Pages aktivieren

Im Repo: **Settings → Pages**
- Source: **GitHub Actions** auswählen (nicht "Deploy from a branch")

Danach läuft bei jedem Push auf `main` automatisch:
Build (`npm run build` → statischer Export in `/out`) → Deploy zu GitHub Pages.

## Schritt 3: Custom Domain bei GitHub eintragen

Im Repo: **Settings → Pages → Custom domain**
- `verwalterberater.de` eintragen → Save
- Häkchen bei **Enforce HTTPS** setzen (sobald verfügbar, dauert nach DNS-Umstellung etwas)

## Schritt 4: DNS bei Hostinger umstellen

Hostinger hPanel → **Domains → verwalterberater.de → DNS / Nameserver → DNS-Einträge**

Folgende Einträge anlegen (bestehende A-Records für @ vorher löschen):

| Typ | Name | Wert | TTL |
|-----|------|------|-----|
| A | @ | 185.199.108.153 | 14400 |
| A | @ | 185.199.109.153 | 14400 |
| A | @ | 185.199.110.153 | 14400 |
| A | @ | 185.199.111.153 | 14400 |
| CNAME | www | tim0402-cmyk.github.io | 14400 |

(Das sind die offiziellen GitHub-Pages-IPs.)

DNS-Umstellung dauert üblicherweise 15 Minuten bis einige Stunden.

## Schritt 5: Prüfen

- GitHub Repo → Tab **Actions**: Workflow "Deploy to GitHub Pages" muss grün sein
- https://verwalterberater.de aufrufen

## Wichtig: E-Mail-DNS nicht anfassen

Falls E-Mail (info@verwalterberater.de) über Hostinger oder einen anderen Anbieter läuft:
**MX-Records und TXT-Records (SPF/DKIM) NICHT löschen oder ändern** — nur die A-Records für die Website.

## Bilder

Fotos/Logos nach `/public/images/` legen (siehe `public/images/DOWNLOAD-TODO.md`):
- `tim-speaking.jpg` — Hero-Foto (Geste)
- `tim-portrait.jpg` — Profilkarte (Nahaufnahme)
- `logo-white.png` — weißes Logo

## Lokaler Test

```bash
npm run dev      # localhost:3000
npm run build    # Produktionsbuild
```
