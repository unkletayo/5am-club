import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap";

const cards = [
  { title: "Consistency", text: "Beats intensity every time." },
  { title: "Focus", text: "Beats busyness. Deep work wins." },
  { title: "Small Actions", text: "Compound into mastery." },
  { title: "Private Practice", text: "Determines public performance." }
];

export function Consistency() {
  const container = useRef<HTMLDivElement>(null);

  useGsap(() => {
    gsap.from(".consistency-card", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });

  }, [container]);

  return (
    <section ref={container} className="py-32 bg-background">
      <Container>
        <div className="text-center mb-24">
          <span className="text-primary font-mono bg-primary/10 px-4 py-2 rounded-full text-sm mb-6 inline-block">
            The 30-Day Group Journey
          </span>
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8">
            Identity Updated.
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            What we have gained in the past 30 days is not just knowledge.<br />
            We have proven that <span className="text-foreground font-bold">consistency beats intensity.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="consistency-card bg-muted/20 p-8 rounded-2xl border border-transparent hover:border-primary/30 transition-colors">
              <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
              <p className="text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
