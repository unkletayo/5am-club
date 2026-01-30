# The 5 AM Club Experience

> "Greatness is not discovered—it is installed."

A cinematic, scroll-driven web experience bringing the transformative philosophy of Robin Sharma's *The 5 AM Club* to life. This project uses advanced web animation techniques to guide visitors through the principles of the "Victory Hour," personal mastery, and the 20/20/20 formula.

![Project Preview](/public/preview-placeholder.png) <!-- meaningful placeholder or remove if not available -->

## 🌟 Features

- **Immersive Storytelling:** A sequential journey through key concepts like The 20/20/20 Formula, The 4 Interior Empires, and Twin Cycles of Elite Performance.
- **Advanced Animations:** heavily leverages **GSAP** (GreenSock) and **Framer Motion** for scroll-triggered reveals, parallax effects, and smooth transitions.
- **Premium Design System:** A carefully curated aesthetic using **Tailwind CSS**, featuring dark mode visuals, serif typography (Playfair Display), and responsive layouts.
- **Modern Tech Stack:** Built on the bleeding edge with **React Router 7**, offering server-side rendering and lightning-fast performance.

## 🛠️ Tech Stack

- **Framework:** [React Router 7](https://reactrouter.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:**
  - [GSAP](https://greensock.com/gsap/) (ScrollTrigger)
  - [Framer Motion](https://www.framer.com/motion/)
  - [Lenis](https://github.com/studio-freight/lenis) (Smooth Scrolling)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## 📂 Project Structure

```bash
├── app/
│   ├── components/
│   │   ├── sections/    # Main storytelling sections (Hero, Identity, Formula, etc.)
│   │   └── ui/          # Reusable UI atoms (Buttons, ScrollProgress, etc.)
│   ├── routes/          # Application routes (React Router 7 file-based routing)
│   └── root.tsx         # Root layout and global context
├── public/              # Static assets
└── docs/                # Project documentation and design specs
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/5am-club.git
    cd 5am-club
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

Your application will be available at `http://localhost:5173`.

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm start
```

## 📚 Concepts Covered

The experience takes users through the following pillars of the 5 AM Club:

1.  **The Victory Hour:** The first hour of the day (5:00 AM - 6:00 AM).
2.  **The 20/20/20 Formula:** 20 mins Move, 20 mins Reflect, 20 mins Grow.
3.  **The 4 Interior Empires:** Mindset, Heartset, Healthset, Soulset.
4.  **The Twin Cycles:** The balance between High Excellence and Deep Recovery.

## 📄 License

This project is for educational and demonstrative purposes. All conceptual rights regarding "The 5 AM Club" belong to the original author.
