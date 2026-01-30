---

# 🎞️ Motion_Storyboard.md

## Motion Philosophy

Motion is used to **teach transformation**:

- Chaos → Clarity
- Resistance → Mastery
- Noise → Focus

Scroll is treated as **time**.
Each section represents a **psychological state**, not just content.

---

## Global Scroll Rules

- Scroll speed controls animation progress (no autoplay storytelling)
- Major transitions occur every **80–120vh**
- No section exceeds **two major animation beats**
- Stillness is a valid (and encouraged) motion choice

---

## SECTION 1: HERO — _“Before the Morning”_

**Emotional State:** Fog, chaos, distraction
**Scroll Range:** `0–100vh`

### Timeline

- Background gradient slowly shifts (deep indigo)
- Large headline fades in with slight upward motion
- Subtext appears after ~300ms delay

### Motion Notes

- Slow easing
- Minimal parallax
- Heavy typography carries emotional weight

---

## SECTION 2: PROBLEM — _“The Distracted World”_

**Emotional State:** Noise, fragmentation
**Scroll Range:** `100–200vh`

### Timeline

- Text layers briefly overlap
- Background elements drift subtly out of sync
- As scroll continues, elements realign into order

### Motion Notes

- Intentional tension
- Slight disorientation
- No aggressive motion

---

## SECTION 3: PHILOSOPHY — _“Why 5 AM Matters”_

**Emotional State:** Stillness, leverage
**Scroll Range:** `200–300vh`

### Timeline

- Motion slows dramatically
- Spacing increases between elements
- Text fades in without translation

### Motion Notes

- Reduced animation communicates calm
- White space is the hero

---

## SECTION 4: THE 20/20/20 FORMULA

**Emotional State:** Structure, momentum
**Scroll Range:** `300–450vh`

### Timeline

- **Move** block slides in from left
- **Reflect** block fades in with slight scale
- **Grow** block slides in from right

### Motion Notes

- Sequential rhythm
- Clear segmentation
- Consistent timing

---

## SECTION 5: FOUR INTERIOR EMPIRES

**Emotional State:** Balance, wholeness
**Scroll Range:** `450–600vh`

### Timeline

- Four quadrants appear in a slow orbit
- Hover reveals deeper insight
- Scroll stabilizes orbit into a static grid

### Motion Notes

- Organic but controlled
- No excessive rotation

---

## SECTION 6: HABIT INSTALLATION PROTOCOL

**Emotional State:** Resistance → Breakthrough
**Scroll Range:** `600–800vh`

### Timeline

- Initial scroll feels “heavy” (delayed response)
- Visual friction introduced
- Sudden clarity and alignment near end of section

### Motion Notes

- Heavier easing
- Longer durations
- Emotional payoff is critical

---

## SECTION 7: REAL-LIFE APPLICATION

**Emotional State:** Confidence, clarity
**Scroll Range:** `800–950vh`

### Timeline

- Minimal motion
- Calm fade-ins
- Stable layout

### Motion Notes

- Stillness implies mastery

---

## SECTION 8: CLOSING CHALLENGE

**Emotional State:** Ownership
**Scroll Range:** `950–1100vh`

### Timeline

- Large statement fades in
- Background gradient warms
- Scroll ends with no animation

### Motion Notes

- Strong typography
- Silence is intentional

---

## Final Storyboard Principle

> If motion does not **change how the viewer feels**, it does not belong.

---

---

# 🎛️ Animation_Spec.md

_(GSAP / Framer Motion)_

## Animation Stack Decision Guide

### GSAP + ScrollTrigger

Best for:

- Fine-grained scroll control
- Complex, synchronized timelines

### Framer Motion

Best for:

- Declarative React motion
- Component-level animation

This specification supports **either approach**.

---

## Global Motion Tokens

### Easing

- **Primary:** `cubic-bezier(0.4, 0.0, 0.2, 1)`
- **Heavy:** `cubic-bezier(0.3, 0.0, 0.1, 1)`

### Duration

- **Micro:** `0.2s`
- **Standard:** `0.6–0.9s`
- **Narrative:** `1.2–1.8s`

---

## GSAP Specification (ScrollTrigger)

### Example: Section Reveal

```js
ScrollTrigger.create({
  trigger: section,
  start: 'top 80%',
  end: 'top 30%',
  scrub: true,
});
```

### Animated Properties

- `opacity: 0 → 1`
- `y: 40 → 0`
- `ease: power2.out`

---

### GSAP Timeline Rules

- One timeline per section
- Avoid nested timelines unless absolutely required
- Kill animations on unmount
- Keep timelines readable and declarative

---

## Framer Motion Specification

### Scroll-Based Pattern

- Use `useScroll()`
- Map values with `useTransform()`

#### Example

```js
const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
```

---

### Hover Interactions

- `scale: 1 → 1.03`
- `duration: 0.2s`
- `ease: easeOut`

---

## Performance Rules

- Avoid animating `width` or `height`
- Prefer `transform` and `opacity`
- Lazy-load heavy visuals
- Test on mid-range devices

---

## Reduced Motion Handling

- Respect `prefers-reduced-motion`
- Replace transforms with fades
- Skip non-essential transitions

---

## Animation Review Checklist

- Does motion reinforce meaning?
- Is animation restrained?
- Does scroll feel intentional?
- Is performance smooth at 60fps?

---

## Final Principle

> **Motion is not decoration. It is narrative.**
> If motion can be removed without losing meaning — **remove it**.

---
