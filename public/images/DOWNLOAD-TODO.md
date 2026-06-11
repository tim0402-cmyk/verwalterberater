# Bilder herunterladen — sobald System wieder verfügbar

SwissTransfer-Link (gültig i.d.R. 30 Tage):
https://www.swisstransfer.com/d/36cdf3a2-cbbb-4276-8b97-963644ebb78d

## Vorgehen

1. Metadata holen:
   curl -s "https://www.swisstransfer.com/api/links/36cdf3a2-cbbb-4276-8b97-963644ebb78d"
   → liefert JSON mit container.UUID, downloadHost und files[] (UUID + fileName)

2. Download je Datei:
   https://{downloadHost}/api/download/{linkUUID}/{fileUUID}

3. Dateien hier ablegen und umbenennen:
   - Foto mit Hand-Geste        → tim-speaking.jpg
   - Nahaufnahme lächelnd       → tim-portrait.jpg
   - Ganzkörper navy Blazer     → tim-fullbody.jpg (optional)
   - Logo weiß (transparent/dunkel) → logo-white.png
   - Logo teal                  → logo-teal.png
   - Logo dunkel                → logo-dark.png

4. Diese Datei danach löschen.
