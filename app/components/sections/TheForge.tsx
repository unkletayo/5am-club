import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap";

export function TheForge() {
  const container = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center center",
        scrub: 1
      }
    });

    gsap.from(".forge-content", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });

  }, [container]);

  return (
    <section ref={container} className="py-32 bg-background relative">
      {/* Dark Overlay that lifts off */}
      <div ref={overlayRef} className="absolute inset-0 bg-secondary z-10 pointer-events-none" />

      <Container className="relative z-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <h2 className="forge-content text-4xl md:text-6xl font-serif font-bold text-foreground">
              The Forge of Adversity
            </h2>
            <div className="w-20 h-1 bg-primary forge-content" />
            <p className="forge-content text-xl text-muted-foreground leading-relaxed">
              Chapter 17 reminds us that heroes are forged in fire. Like Nelson Mandela, we all have our Robben Islands—seasons of confinement, delay, and pain.
            </p>
            <p className="forge-content text-xl text-muted-foreground leading-relaxed">
              Those places can either embitter us or ennoble us.
            </p>
          </div>

          <div className="bg-card p-12 rounded-lg border-l-4 border-primary forge-content">
            <p className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed mb-6">
              "Heroes choose growth. They forgive. They persist. They live for causes larger than themselves."
            </p>
            <p className="text-muted-foreground uppercase tracking-widest text-sm">
              The Choice is Yours
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
