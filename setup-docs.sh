#!/usr/bin/env bash

set -e

# Create docs directory
mkdir -p docs

# Create markdown files with initial content
cat > docs/README.md <<'EOF'
# The 5 AM Club – Animated Web Presentation

This folder contains all documentation required to design, animate, and implement
a scroll-driven, award-quality web presentation based on *The 5 AM Club* by Robin Sharma.

These documents are meant to be consumed **together** by a developer or LLM.
EOF

cat > docs/PRD.md <<'EOF'
# Product Requirements Document (PRD)

## Objective
Define the goals, scope, constraints, and success criteria for the animated web experience.

## Target Outcome
A premium, scroll-driven, responsive storytelling website that demonstrates
deep understanding and real-world application of *The 5 AM Club*.

## Success Metrics
- Visual quality comparable to Awwwards-level sites
- Clear narrative flow
- Meaningful, intentional animation
EOF

cat > docs/Developer_Execution_Prompt.md <<'EOF'
# Developer Execution Prompt

## Role
You are a senior frontend engineer and creative technologist.

## Instructions
- Read ALL documents in this folder before starting
- Plan before coding
- Follow the Design System strictly
- Implement motion based on the Motion Storyboard and Animation Spec
- Do not invent new animations without justification

## Deliverables
- Clean, modular, production-ready code
- Responsive layouts
- Accessible and performant animations
EOF

cat > docs/Design_System.md <<'EOF'
# Design System

## Color Palette
Define primary, secondary, accent, background, and gradient tokens.

## Typography
Define font families, scale, hierarchy, and usage rules.

## Spacing & Layout
Define spacing scale, grid rules, and layout principles.

## Motion Tokens
Define durations, easing curves, delays, and motion intensity levels.
EOF

cat > docs/Motion_Storyboard.md <<'EOF'
# Motion Storyboard

## Concept
Scroll = Time

Each section represents an emotional and cognitive state tied to the narrative
of *The 5 AM Club*.

## Sections
1. Hero / Emotional Hook
2. The Problem (Distraction & Mediocrity)
3. Philosophy of the Morning
4. 20/20/20 Formula
5. Four Interior Empires
6. Habit Installation Journey
7. Practical Application
8. Closing Challenge

Each section defines:
- Entry animation
- Scroll behavior
- Exit transition
EOF

cat > docs/Animation_Spec.md <<'EOF'
# Animation Specification (GSAP / Framer Motion)

## Principles
- Motion must serve meaning
- Subtle > flashy
- Performance first

## Global Rules
- Respect prefers-reduced-motion
- Use transform + opacity only where possible
- Avoid layout thrashing

## Timing & Easing
Define standard durations and easing curves for:
- Section entry
- Text reveal
- Parallax
- Interactive feedback
EOF

echo "✅ docs/ folder and Markdown files created successfully."
