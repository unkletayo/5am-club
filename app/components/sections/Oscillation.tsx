import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap/dist/gsap";

export function Oscillation() {
  const container = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    // Breathing Animation
    gsap.to(circleRef.current, {
      scale: 1.5,
      opacity: 0.8,
      duration: 4,
      boxShadow: "0 0 100px 20px rgba(66, 153, 225, 0.4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Text reveals on scroll
    gsap.from(".oscillation-text", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
      }
    });

  }, [container]);

  return (
    <section ref={container} className="min-h-screen flex items-center justify-center bg-[#0a0a0c] overflow-hidden relative">
      {/* Background Pulse Circle */}
      <div
        ref={circleRef}
        className="absolute w-64 h-64 md:w-96 md:h-96 bg-blue-900/20 rounded-full blur-3xl z-0"
      />

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="oscillation-text text-4xl md:text-6xl font-serif font-bold text-white">
            Discipline without recovery collapses.
          </h2>

          <p className="oscillation-text text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Sleep is not laziness; it is biological maintenance. <br />
            Without deep rest, focus degrades, willpower weakens, and consistency breaks.
          </p>

          <div className="oscillation-text py-12">
            <span className="text-xs font-mono tracking-widest text-primary uppercase mb-4 block">The Elite Equation</span>
            <p className="text-3xl md:text-5xl font-serif text-amber-200">
              Pressure + Refueling <br />
              = Growth + Endurance
            </p>
          </div>

          <p className="oscillation-text text-white font-bold text-xl uppercase tracking-widest">
            Push hard. Rest deeply.
          </p>
        </div>
      </Container>
    </section>
  );
}
