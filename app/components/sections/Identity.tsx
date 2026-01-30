import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap";

export function Identity() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll(".word");

    gsap.fromTo(words,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        }
      }
    );
  }, [container]);

  const content = "Across The 5 AM Club, one truth keeps resurfacing: greatness is not discovered—it is installed. It is engineered daily through discipline, focus, recovery, and courage. Early rising is not a productivity trick. It is identity training. When you own the front end of the day, you stop reacting and start leading.";

  const words = content.split(" ");

  return (
    <section ref={container} className="min-h-[80vh] flex items-center justify-center bg-background py-24">
      <Container className="max-w-5xl">
        <div ref={textRef} className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-4 text-center">
          {words.map((word, i) => (
            <span key={i} className="word text-2xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight transition-colors">
              {word}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
