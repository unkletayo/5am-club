import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap";

export function TheForge() {
  const container = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!container.current) return;
    const q = gsap.utils.selector(container.current);

    gsap.to(overlayRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center center",
        scrub: 1
      }
    });

    gsap.from(q(".forge-content"), {
      x: -50,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    gsap.from(quoteRef.current, {
      x: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: quoteRef.current,
        start: "top 85%",
      }
    });

    // Subtle parallax for the quote card
    gsap.to(quoteRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, [container]);

  return (
    <section ref={container} className="py-32 bg-background relative overflow-hidden">
      {/* Dark Overlay that lifts off */}
      <div ref={overlayRef} className="absolute inset-0 bg-secondary z-10 pointer-events-none" />

      <Container className="relative z-20">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="space-y-8">
            <h2 className="forge-content text-4xl md:text-6xl font-serif font-bold text-foreground leading-[1.1]">
              The Forge of Adversity
            </h2>
            <div className="w-20 h-1 bg-primary forge-content" />
            <div className="space-y-6">
              <p className="forge-content text-xl text-muted-foreground leading-relaxed">
                Chapter 17 reminds us that heroes are forged in fire. Like Nelson Mandela, we all have our Robben Islands—seasons of confinement, delay, and pain.
              </p>
              <p className="forge-content text-xl text-muted-foreground leading-relaxed">
                Those places can either embitter us or ennoble us.
              </p>
            </div>
          </div>

          <div
            ref={quoteRef}
            className="bg-card p-10 md:p-16 rounded-3xl border border-primary/20 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <p className="text-2xl md:text-4xl font-serif italic text-foreground leading-relaxed mb-8 relative z-10">
              "Heroes choose growth. They forgive. They persist. They live for causes larger than themselves."
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-[1px] bg-primary/50" />
              <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold">
                The Choice is Yours
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
