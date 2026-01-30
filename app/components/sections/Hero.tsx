import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGsap((ctx) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const q = gsap.utils.selector(contentRef);

    tl.fromTo(q(".hero-title"),
      { y: 100, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, stagger: 0.2 }
    )
      .fromTo(q(".hero-alert"),
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(q(".hero-text"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        "-=0.5"
      )
      .fromTo(q(".scroll-hint"),
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5"
      );

  }, [container]);

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B1F3B] to-[#0E0E11] opacity-100 z-0" />

      {/* Cinematic Grain/Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <Container className="relative z-10 flex flex-col items-center text-center px-4">
        <div ref={contentRef} className="max-w-4xl mx-auto flex flex-col items-center">

          <div className="hero-alert mb-8 px-4 py-1 border border-destructive/50 bg-destructive/10 rounded-full">
            <span className="text-destructive font-bold tracking-widest uppercase text-xs md:text-sm">
              ⚠️ Attention Soldiers
            </span>
          </div>

          <h1 className="hero-title text-5xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter text-amber-50/90 mb-8 drop-shadow-2xl">
            Victory Night
            <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
              Reflection
            </span>
          </h1>

          <div className="hero-text space-y-6 text-lg md:text-2xl text-muted-foreground font-light tracking-wide leading-relaxed max-w-2xl">
            <p>
              Before you scroll—pause.
            </p>
            <p className="text-foreground font-normal">
              This is bigger than a book summary. <br />
              This is about how we choose to live.
            </p>
          </div>

          <div className="scroll-hint mt-24 flex flex-col items-center gap-4 opacity-90">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500/80 animate-pulse">
              Scroll to Initialize
            </span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-amber-500/0 via-amber-500/50 to-amber-500/0 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-amber-500 animate-[drop_1.5s_infinite]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
