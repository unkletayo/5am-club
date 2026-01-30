import { Closing } from "@/components/sections/Closing";
import { Consistency } from "@/components/sections/Consistency";
import { Footer } from "@/components/sections/Footer";
import { Formula202020 } from "@/components/sections/Formula202020";
import { Hero } from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import { InteriorEmpires } from "@/components/sections/InteriorEmpires";
import { Oscillation } from "@/components/sections/Oscillation";
import { TheForge } from "@/components/sections/TheForge";
import { Preloader } from "@/components/ui/preloader";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { useEffect, useState } from "react";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Victory Night Reflection | The 5 AM Club" },
    { name: "description", content: "Greatness is not discovered—it is installed." },
  ];
}

import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset scroll on mount/refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
    // Force reset again for some browsers
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  return (
    <main className="relative bg-background text-foreground transition-colors duration-700 overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      <ThemeSwitcher />
      <ScrollProgress />

      {/* 1. Attention Soldiers */}
      <div id="hero-section">
        <Hero />
      </div>

      {/* 2. Greatness is Installed */}
      <div id="identity-section">
        <Identity />
      </div>

      {/* 3. The Formula (Identity Shaping) */}
      <div id="formula-section">
        <Formula202020 />
      </div>

      {/* 4. Recovery (Oscillation) */}
      <div id="oscillation-section">
        <Oscillation />
      </div>

      {/* 5. Interior Empires (Existing model) */}
      <div id="interior-section">
        <InteriorEmpires />
      </div>

      {/* 6. Adversity (The Forge) */}
      <div id="forge-section">
        <TheForge />
      </div>

      {/* 7. 30-Day Journey (Consistency) */}
      <div id="consistency-section">
        <Consistency />
      </div>

      {/* 8. Victory is not loud */}
      <div id="closing-section">
        <Closing />
      </div>

      {/* 9. Engagement & Credits */}
      <Footer />
    </main>
  );
}
