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
  const underlineRef = useRef<SVGPathElement>(null);

  useGsap(() => {
    if (!container.current) return;
    const q = gsap.utils.selector(container.current);

    // Header reveal
    gsap.from(q(".consistency-header > *"), {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    // Animated underline
    if (underlineRef.current) {
      const length = underlineRef.current.getTotalLength();
      gsap.set(underlineRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(underlineRef.current, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: underlineRef.current,
          start: "top 85%",
        }
      });
    }

    // Card entrance
    gsap.from(q(".consistency-card"), {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: q(".cards-grid"),
        start: "top 80%",
      }
    });

  }, [container]);

  return (
    <section ref={container} className="py-32 bg-background relative overflow-hidden">
      <Container>
        <div className="text-center mb-24 consistency-header">
          <span className="text-primary font-mono bg-primary/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            The 30-Day Group Journey
          </span>
          <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8">
            Identity Updated.
          </h2>
          <div className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed relative">
            <p className="mb-4">What we have gained in the past 30 days is not just knowledge.</p>
            <div className="relative inline-block mt-4">
              <span className="text-foreground font-bold relative z-10">consistency beats intensity.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-8 -z-0 pointer-events-none"
                viewBox="0 0 400 30"
                preserveAspectRatio="none"
              >
                <path
                  ref={underlineRef}
                  d="M5 25 Q 100 5, 200 25 T 395 25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-primary/60"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 cards-grid">
          {cards.map((c, i) => (
            <div key={i} className="consistency-card group bg-card p-10 rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-primary/5">
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
