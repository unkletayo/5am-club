import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const THEME_MAP = {
  midnight: ["hero-section", "identity-section"],
  golden: ["formula-section", "oscillation-section"],
  forest: ["interior-section", "forge-section"],
  arctic: ["consistency-section", "closing-section"]
};

export function ThemeSwitcher() {
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const triggers: ScrollTrigger[] = [];

    Object.entries(THEME_MAP).forEach(([theme, sectionIds]) => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const st = ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              main.setAttribute("data-theme", theme);
            }
          },
        });
        triggers.push(st);
      });
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return null;
}
