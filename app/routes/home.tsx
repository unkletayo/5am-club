import { useState } from "react";
import type { Route } from "./+types/home";
import { Hero } from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import { Formula202020 } from "@/components/sections/Formula202020";
import { Oscillation } from "@/components/sections/Oscillation";
import { InteriorEmpires } from "@/components/sections/InteriorEmpires";
import { TheForge } from "@/components/sections/TheForge";
import { Consistency } from "@/components/sections/Consistency";
import { Closing } from "@/components/sections/Closing";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Preloader } from "@/components/ui/preloader";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Victory Night Reflection | The 5 AM Club" },
    { name: "description", content: "Greatness is not discovered—it is installed." },
  ];
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <ScrollProgress />

      {/* 1. Attention Soldiers */}
      <Hero />

      {/* 2. Greatness is Installed */}
      <Identity />

      {/* 3. The Formula (Identity Shaping) */}
      <Formula202020 />

      {/* 4. Recovery (Oscillation) */}
      <Oscillation />

      {/* 5. Interior Empires (Existing model) */}
      <InteriorEmpires />

      {/* 6. Adversity (The Forge) */}
      <TheForge />

      {/* 7. 30-Day Journey (Consistency) */}
      <Consistency />

      {/* 8. Victory is not loud */}
      <Closing />

      {/* 9. Engagement & Credits */}
      <Footer />
    </main>
  );
}
