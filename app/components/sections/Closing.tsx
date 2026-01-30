import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap";

export function Closing() {
  const container = useRef<HTMLDivElement>(null);

  useGsap(() => {
    gsap.from(".closing-ele", {
      scale: 0.9,
      opacity: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "center 80%",
      }
    });

  }, [container]);

  return (
    <section ref={container} className="min-h-[60vh] flex items-center justify-center bg-background text-center py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="closing-ele text-5xl md:text-7xl font-serif font-bold mb-12 text-foreground">
            Victory is not loud.
          </h2>
          <p className="closing-ele text-2xl md:text-3xl text-muted-foreground mb-16">
            It is built quietly, daily, in the dark.<br />
            Will you keep your promise to yourself tomorrow morning?
          </p>

          <div className="closing-ele">
            <Button size="lg" className="text-lg px-12 py-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:scale-105">
              Rise.
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
