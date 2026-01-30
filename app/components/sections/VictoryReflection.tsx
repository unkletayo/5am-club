import { Container } from "@/components/ui/container";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap/dist/gsap";
import { useRef } from "react";
import { Trophy, TriangleAlert } from "lucide-react";

export function VictoryInitial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGsap((ctx) => {
    if (!sectionRef.current || !textRef.current || !headingRef.current) return;

    // Animate the Heading "Victory Night"
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Stagger reveal for paragraphs
    const paragraphs = textRef.current.querySelectorAll("p");
    gsap.fromTo(paragraphs,
      { opacity: 0.1, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 1,
        }
      }
    );

  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-background relative z-10">
      <Container className="max-w-4xl mx-auto px-6">
        <h2 ref={headingRef} className="flex flex-col md:flex-row items-center justify-center gap-4 text-center font-serif text-3xl md:text-5xl lg:text-6xl text-primary font-bold tracking-tight mb-20 md:mb-32">
          <Trophy className="w-12 h-12 md:w-16 md:h-16 text-primary" strokeWidth={1.5} />
          <span>VICTORY NIGHT REFLECTION</span>
        </h2>

        <div ref={textRef} className="space-y-12 text-lg md:text-2xl font-light leading-relaxed text-foreground/90">
          <div className="flex items-center gap-2 font-bold text-destructive/90 tracking-widest uppercase text-sm md:text-base mb-8">
            <TriangleAlert className="w-5 h-5 text-destructive" />
            <p className="block">
              Attention Soldiers
            </p>
          </div>

          <p>
            Before you scroll—pause. This is bigger than a book summary. This is about how we choose to live.
          </p>

          <p>
            Across The 5 AM Club, one truth keeps resurfacing: <strong className="text-white font-serif italic">greatness is not discovered—it is installed.</strong> It is engineered daily through discipline, focus, recovery, and courage.
          </p>

          <p>
            Early rising is not a productivity trick. It is identity training. When you own the front end of the day, you stop reacting and start leading.
            <span className="block mt-4 pl-4 border-l-2 border-primary/50 text-muted-foreground">
              The 20/20/20 Formula—movement, reflection, and learning—does more than sharpen performance; it reshapes who you are becoming.
            </span>
          </p>

          <p>
            You don’t just win mornings. You become a different person.
          </p>

          <p>
            But discipline without recovery collapses. Sleep is not laziness; it is biological maintenance. Without deep rest, focus degrades, willpower weakens, and consistency breaks.
          </p>

          <p className="text-xl md:text-3xl font-serif text-amber-200">
            Elite performers understand oscillation: <br />
            pressure + refueling = growth + endurance.
          </p>

          <p>
            Push hard. Rest deeply. That’s how greatness lasts.
          </p>

          <p>
            Habits—not hype—separate history-makers from spectators. Real change is hard at first, messy in the middle, and beautiful at the end. The discomfort is not a sign to stop; it’s proof the new identity is being installed.
          </p>

          <p>
            Consistency beats intensity. Focus beats busyness. Small, uncomfortable actions—done daily—compound into mastery.
          </p>

          <p>
            Leadership begins with self-mastery. You cannot lead others effectively if you don’t keep promises to yourself. Procrastination is self-betrayal. Discipline builds self-respect. And how you practice in private is exactly how you perform in public.
          </p>

          <p>
            Finally, Chapter 17 reminds us that heroes are forged in adversity. Like Nelson Mandela, we all have our Robben Islands—seasons of confinement, delay, and pain. Those places can either embitter us or ennoble us.
          </p>

          <p className="font-serif italic text-white">
            Heroes choose growth. They forgive. They persist. They live for causes larger than themselves and leave the world better than they found it.
          </p>

          <div className="pt-12 text-center">
            <p className="text-3xl md:text-5xl font-serif font-bold text-amber-500 mb-4">Victory is not loud.</p>
            <p className="text-xl md:text-2xl text-muted-foreground">It is built quietly, daily, in the dark.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
