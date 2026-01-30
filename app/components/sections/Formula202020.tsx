import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap";
import { Dumbbell, NotebookPen, BookOpen } from "lucide-react";

const steps = [
  {
    time: "5:00 - 5:20 AM",
    title: "Move",
    desc: "Sweat. Hydrate. Breathe. Jumpstart your metabolic engine.",
    color: "from-blue-500 to-cyan-400",
    icon: Dumbbell,
  },
  {
    time: "5:20 - 5:40 AM",
    title: "Reflect",
    desc: "Journal. Meditate. Pray. Plan. Deepen your wisdom.",
    color: "from-indigo-500 to-purple-400",
    icon: NotebookPen,
  },
  {
    time: "5:40 - 6:00 AM",
    title: "Grow",
    desc: "Read. Listen. Study. Learn. Escalate your mastery.",
    color: "from-amber-500 to-orange-400",
    icon: BookOpen,
  },
];

export function Formula202020() {
  const container = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGsap((ctx) => {
    // Intro Text Animation
    gsap.fromTo(introRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      }
    );

    // Horizontal scroll pinning
    const panels = gsap.utils.toArray(".panel");
    const totalWidth = 300; // 300% width

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1,
        end: "+=2000", // Reduced spacing (was 3000)
      }
    });

    tl.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
    });

    // Animate the track/progress line
    tl.to(trackRef.current, {
      scaleX: 1,
      ease: "none"
    }, 0);

  }, [container]);

  return (
    <section ref={container} className="h-screen bg-background overflow-hidden flex flex-col justify-center relative">
      {/* Background Visuals - Large Faded Numbers */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <span className="text-[40vw] font-bold font-serif leading-none">20</span>
      </div>

      <div ref={introRef} className="absolute top-16 md:top-20 left-0 w-full text-center z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">The 20/20/20 Formula</h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Movement, reflection, and learning does more than sharpen performance;
          <span className="text-primary block mt-2 font-semibold">it reshapes who you are becoming.</span>
        </p>
      </div>

      {/* Visual Track Line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 z-0 -translate-y-1/2">
        <div ref={trackRef} className="h-full bg-primary origin-left scale-x-0 w-full" />
      </div>

      <div ref={panelsRef} className="flex flex-nowrap w-[300%] h-[60vh] md:h-[70vh] items-center mt-64 md:mt-32 md:mt-0 relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="panel w-screen flex-shrink-0 flex items-center justify-center px-4 md:px-0"
          >
            <div className="relative group p-8 md:p-16 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors max-w-2xl w-full mx-auto shadow-2xl backdrop-blur-md">
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color} rounded-t-3xl opacity-80`} />

              {/* Icon Container */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 flex items-center justify-center rounded-full bg-background border-4 border-primary z-20 shadow-xl">
                <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>

              <div className="text-lg font-mono text-muted-foreground mb-6 text-center mt-8">{step.time}</div>
              <h3 className="text-5xl md:text-7xl font-bold mb-6 text-center">{step.title}</h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
