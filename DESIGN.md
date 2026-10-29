---
name: "Nikko, in autumn"
description: "An autumn trip guide with editorial headings and practical travel controls."
colors:
  paper: "#f7f4ed"
  ink: "#233e34"
  muted: "#59665c"
  rust: "#994222"
  leaf: "#e7eadf"
  line: "#d7d9cf"
  white: "#fffdf8"
  warm: "#eee0cd"
  primary-hover: "#36584a"
  light-hover: "#d6dfcb"
  tab-hover: "#eee9de"
  confirmed: "#386049"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(54px, 6.3vw, 84px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(30px, 3.1vw, 42px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.025em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: ".075em"
rounded:
  surface: "14px"
  button: "6px"
  count: "30px"
  circle: "50%"
spacing:
  button: "12px 19px"
  section: "76px"
  section-mobile: "53px"
  gutter: "40px"
  gutter-tablet: "28px"
  gutter-mobile: "22px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "{spacing.button}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-light:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "{spacing.button}"
  button-light-hover:
    backgroundColor: "{colors.light-hover}"
  day-tab-selected:
    backgroundColor: "{colors.warm}"
    textColor: "{colors.ink}"
    padding: "18px 20px"
  packing-row:
    textColor: "{colors.ink}"
    padding: "10px 0"
  packing-count:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.ink}"
    rounded: "{rounded.count}"
    padding: "8px 15px"
  priority-note:
    backgroundColor: "{colors.warm}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "24px 26px"
  day-aside:
    backgroundColor: "{colors.leaf}"
    rounded: "{rounded.surface}"
  stop-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.surface}"
    padding: "30px"
---

# Design System: Nikko, in autumn

## Overview

**Creative North Star: "The autumn escape"**

This phrase is taken from the implemented wordmark, rather than a separately selected aesthetic concept. Warm ivory, forest ink and rust support a relaxed travel guide. Fraunces headings, licensed destination photographs and generous section spacing provide its editorial character; transport times and controls use system sans-serif typography.

**Key Characteristics:**
- Warm paper with forest text and restrained rust emphasis.
- Real destination photography, with credits and seasonal context.
- Simple route geometry, readable times and clear uncertainty labels.
- Mobile bottom navigation, keyboard day tabs and saved packing ticks.

## Colors

Forest ink is the primary text and action color. Rust marks emphasis, proposed status, timeline points and selected navigation. Confirmed status uses its own green. Paper and warm white provide the page and light action surfaces; leaf and warm surfaces group supporting information. Muted text and line colors separate secondary content without heavy framing. Hover colors in the frontmatter are extracted states, not an extended palette.

## Typography

Fraunces is served locally with Georgia and serif fallbacks. The display, headline and title roles describe the default desktop heading rules. System sans-serif carries body text, operational headings, times and controls. Paragraphs have a maximum width of 72ch; important times use tabular numerals.

At widths up to 650px, the display is 66px and section headings are 33px; at widths up to 360px, the display becomes 56px. Day headings become 26px on mobile. Status labels are uppercase. Buttons use 14px text at weight 650.

## Layout

The centered container has a maximum width of 1184px and the gutters recorded in the frontmatter. The desktop hero uses .88fr / 1.12fr columns. Day panels use 1.6fr / 1fr columns with a 60px gap, changing to 1.4fr / 1fr with a 30px gap at 900px. At 650px, hero and day content stack; packing and places become single-column lists.

Desktop navigation sticks to the top with a 64px inner height. At 650px it becomes a fixed bottom bar with a 63px inner height, safe-area padding and 80px reserved below the content. The route changes from a horizontal sequence to a vertical schematic. The narrowest breakpoint stacks trip essentials.

Print styles expose every day, hide navigation and decorative photography, and compact spacing for a readable paper guide.

## Elevation & Depth

Surfaces are flat and distinguished by color and fine borders. The mobile navigation alone uses a soft separation shadow, recorded in the sidecar. Selected navigation uses an inset rust line, not an elevated card effect. Photography captions use a dark translucent overlay.

## Shapes

Supporting surfaces share the surface radius; buttons have smaller corners and packing counts are pill-shaped. Route nodes and status dots are circles. The hero photograph has an asymmetric upper-left curve: 120px 12px 12px 12px on desktop and 76px 10px 10px 10px on mobile. Other destination images sit inside clipped supporting surfaces. Route and timeline connectors are simple lines.

## Components

- **Buttons:** Primary forest and light leaf variants share a 48px minimum height, with background transitions. Aside actions can use warm white. The stop-name copy action uses paper. Global keyboard focus is a 3px rust outline with a 5px offset; disabled buttons use a waiting cursor and reduced opacity.
- **Day tabs:** Three equal columns, muted default text and a warm selected surface with a rust lower border. Arrow keys, Home and End change the selected day and focus. JavaScript supplies tab-panel semantics; without JavaScript all days remain visible.
- **Navigation:** Icon-and-text links use rust for the visible section and hover. Desktop uses a lower active rule; mobile stacks each icon over its label and moves the rule to the top.
- **Status labels:** Uppercase text and a small colored dot distinguish confirmed and proposed information. Meaning is carried by text as well as color.
- **Supporting cards:** Leaf day asides combine a photograph, serif caption and practical notes. The warm priority note draws attention to the early return. The forest stop card gives the Japanese stop name and copy control prominence.
- **Packing:** Native checkboxes have forest accents. Checked text becomes muted and struck through. An announced count and thin rust progress bar reflect completion. The implementation saves ticks in browser local storage and reports storage failures visibly.
- **Route:** Circular stops and hairline connectors describe the journey; the endpoint is rust. The visible caption explicitly says this is a schematic rather than a geographic map.
- **Photographs:** Local destination photos retain the source licenses and footer attribution. The summer reference is labeled as such; the images are not presented as current conditions.

## Do's and Don'ts

- **Do** retain the warm ivory, forest ink and rust direction.
- **Do** preserve visible keyboard focus and text labels for status.
- **Do** keep route geometry simple and label it as a schematic.
- **Do** retain photo credits and distinguish destination imagery from current conditions.
- **Don't** imply that proposed transport or an unconfirmed shuttle is booked.
- **Don't** communicate packing completion or itinerary status through color alone.
- **Don't** replace the mobile bottom navigation or hide all days when JavaScript is unavailable.
