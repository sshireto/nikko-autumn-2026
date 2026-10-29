# Nikko, in autumn

A mobile-first personal trip guide for October 30–November 1, 2026. Buildless HTML, CSS and JavaScript, deployed through GitHub Pages from `main`.

## Run locally

`python3 -m http.server 8080`

Open http://localhost:8080. Localhost and HTTPS support the service worker. There are no build dependencies or analytics. Packing ticks use localStorage on each device. Offline caching is best effort; maps and other external services need a connection. Print styling includes all three itinerary days.

## Content

Trains and hotel reflect the supplied confirmed trip brief. Public bus times are scheduled estimates. Activities are proposed, hotel shuttle is unconfirmed, and weather is a dated snapshot. See the page footer for official sources.

The public page intentionally omits traveller names, seat numbers, booking codes, payment details and private confirmation links. `noindex` requests search engines not to index; the page and repository remain public.

## Assets

- `assets/autumn.webp`: くろふね, “紅葉の華厳の滝”, https://commons.wikimedia.org/wiki/File:紅葉の華厳の滝.jpg — CC BY-SA 4.0, https://creativecommons.org/licenses/by-sa/4.0/. Resized/compressed, cropped by CSS; derivative retains CC BY-SA 4.0.
- `assets/lake.webp`: Uraomote yamaneko, “Lake chuzenji and kegon waterfall”, https://commons.wikimedia.org/wiki/File:Lake_chuzenji_and_kegon_waterfall.jpg — CC BY-SA 3.0, https://creativecommons.org/licenses/by-sa/3.0/. Resized/compressed; derivative retains CC BY-SA 3.0.
- Fraunces, Undercase Type: https://github.com/google/fonts/tree/main/ofl/fraunces — SIL Open Font License, included as `assets/FONT-LICENSE.txt`.
- App icon: original geometric monogram.

For future updates, increment the service worker cache name in both `sw.js` and `app.js` when assets change.
