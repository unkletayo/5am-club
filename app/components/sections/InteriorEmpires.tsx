import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap";

const empires = [
  { name: "Mindset", desc: "Psychology", pct: "25%", color: "text-blue-400" },
  { name: "Heartset", desc: "Emotionality", pct: "25%", color: "text-rose-400" },
  { name: "Healthset", desc: "Physicality", pct: "25%", color: "text-emerald-400" },
  { name: "Soulset", desc: "Spirituality", pct: "25%", color: "text-amber-400" },
];

export function InteriorEmpires() {
  const container = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGsap((ctx) => {
    // 3D Tilt Setup
    const cards = gsap.utils.toArray<HTMLElement>(".empire-card");
    const containerEl = container.current;

    // Initial "Exploded" State
    gsap.set(cards, {
      z: (i) => i * 100,
      rotationY: (i) => i % 2 === 0 ? -15 : 15,
      opacity: 0,
      scale: 0.5,
      y: 100
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        start: "top top",
        end: "+=1500",
        scrub: 1,
      }
    });

    // 1. Reveal Title
    tl.fromTo(titleRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5 });

    // 2. Converge Cards into Grid
    tl.to(cards, {
      opacity: 1,
      y: 0,
      x: 0,
      z: 0,
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      stagger: 0.1,
      duration: 2,
      ease: "power2.inOut"
    });

    // 3. "Lock In" visual cue (flash / pulse)
    tl.to(".grid-border", { borderColor: "rgba(255,255,255,0.2)", duration: 0.5 });


    // Mouse Move Parallax / Tilt Effect (Post-animation interaction)
    // We bind this to the container but it only really "feels" good after they lock in.
    // However, GSAP is performant enough to run it anytime.

    if (cardsRef.current) {
      const xTo = gsap.quickTo(cards, "rotationY", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(cards, "rotationX", { duration: 0.4, ease: "power3" });

      const handleMouseMove = (e: MouseEvent) => {
        // Calculate normalized mouse position (-1 to 1)
        const { clientX, clientY, innerWidth, innerHeight } = {
          clientX: e.clientX, clientY: e.clientY,
          innerWidth: window.innerWidth, innerHeight: window.innerHeight
        };

        const xPos = (clientX / innerWidth) - 0.5;
        const yPos = (clientY / innerHeight) - 0.5;

        xTo(xPos * 20); // Tilt amount
        yTo(-yPos * 20);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }

  }, [container]);

  return (
    <section ref={container} className="h-screen bg-background flex items-center justify-center relative overflow-hidden perspective-[1000px]">

      {/* Background Animated Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center h-full justify-center">

        <div ref={titleRef} className="text-center mb-12 relative z-20">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            The 4 Interior Empires
          </h2>
          <p className="text-xl text-muted-foreground uppercase tracking-[0.3em]">Unlock your potential</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl aspect-square md:aspect-video perspective-[1000px]">
          {empires.map((empire, i) => (
            <div
              key={i}
              className="empire-card grid-border group relative flex flex-col items-center justify-center bg-card border border-border rounded-3xl backdrop-blur-md hover:border-primary/50 transition-colors duration-500"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <h3 className={`text-3xl md:text-5xl font-bold mb-2 ${empire.color} drop-shadow-sm translate-z-10`}>
                {empire.name}
              </h3>
              <p className="text-sm md:text-lg text-zinc-400 uppercase tracking-widest translate-z-5">
                {empire.desc}
              </p>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-z-10">
                <span className="font-mono text-xs text-white/50">{empire.pct}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
