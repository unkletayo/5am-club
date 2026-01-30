---

# 🎨 Design_System.md

## Design Philosophy

**Calm confidence. Purposeful motion. Emotional clarity.**

The design system must feel:

* Premium
* Timeless
* Intentional

Avoid trend-chasing.

---

## Color System

### Primary Gradient — _Morning Transition_

Represents darkness → clarity

```
#1B1F3B  (Deep Indigo)
#F2A65A  (Warm Amber)
```

---

### Secondary Gradient — _Focus & Growth_

```
#1F7A8C  (Muted Teal)
#BFDBF7  (Soft Cyan)
```

---

### Neutral Palette

- Background: Near-black
- Text: Soft off-white

```
#0E0E11
#F5F5F5
```

---

## Typography

### Primary Typeface

Modern sans-serif with high readability and strong weights.

**Recommended options:**

- Inter
- SF Pro
- General Sans

---

### Type Scale

- **Hero:** 56–72px
- **Section Headings:** 36–48px
- **Body:** 16–18px
- **Captions:** 13–14px

Line-height should favor breathing room.

---

## Spacing System

- Base unit: **8px**
- Section padding: **80–120px**
- Generous whitespace is **mandatory**

---

## Motion System (Motion Tokens)

### Easing

- **Primary:** `cubic-bezier(0.4, 0.0, 0.2, 1)`
- **Exit:** `cubic-bezier(0.4, 0.0, 1, 1)`

---

### Duration

- Micro-interactions: **150–250ms**
- Section transitions: **600–900ms**
- Narrative transitions: **1200–1800ms**

---

### Motion Principles

- No linear easing
- No bounce unless intentional
- Motion should feel **weighted**

---

## Responsive Motion Rules

- Reduce motion on mobile
- Replace transforms with fades if necessary
- Honor `prefers-reduced-motion`

---

## Component Guidelines

- **Buttons:** Minimal, no heavy shadows
- **Cards:** Soft radius (16–24px)
- **Hover states:** Subtle translate or opacity change

---

## Final Quality Bar

If the site feels impressive:

- Without sound
- Without explanation
- Without context

Then the design system has succeeded.

This system should support **clarity, discipline, and mastery** — the same values taught by _The 5 AM Club_.

---
