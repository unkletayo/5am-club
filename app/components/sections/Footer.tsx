import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { useGsap } from "@/hooks/use-gsap";

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!footerRef.current) return;

    const q = gsap.utils.selector(footerRef.current);

    gsap.from(q(".question-item"), {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
      }
    });
  }, [footerRef]);

  const questions = [
    "Which habit has challenged you most so far: sleep, early rising, focus, or consistency?",
    "What distraction must you trim this week to deepen your discipline?",
    "Where is life asking you to persist instead of quit?",
    "Who in this group inspires you by how they show up daily? Tag them.",
    "What is one non-negotiable habit you’ll protect this coming week?"
  ];

  return (
    <footer ref={footerRef} className="bg-[#050505] text-white py-24 border-t border-white/5 relative z-10">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24">
          <div>
            <h3 className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-8">💬 Let's Talk</h3>
            <div className="space-y-8">
              {questions.map((q, i) => (
                <div key={i} className="question-item">
                  <p className="text-xl md:text-2xl font-light hover:text-amber-100 transition-colors leading-normal cursor-default">
                    {q}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="question-item bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">🔑 Core Takeaway</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary">•</span> Greatness is a daily decision.</li>
                <li className="flex gap-3"><span className="text-primary">•</span> Own your mornings.</li>
                <li className="flex gap-3"><span className="text-primary">•</span> Honor rest.</li>
                <li className="flex gap-3"><span className="text-primary">•</span> Keep your word to yourself.</li>
                <li className="flex gap-3"><span className="text-primary">•</span> Use adversity as training.</li>
              </ul>
            </div>

            <div className="question-item text-center md:text-left">
              <p className="text-2xl font-serif italic mb-2">Victory is built in private.</p>
              <p className="text-2xl font-serif italic mb-8">Accountability is forged in community.</p>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <a
                  href="https://www.emprintereaders.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img
                    src="https://www.emprintereaders.com/_next/image?url=%2FLogo.png&w=256&q=75"
                    alt="Emprinte Readers Hub"
                    className="h-16 w-auto"
                  />
                </a>
                <div className="text-sm text-muted-foreground text-center md:text-left">
                  <p>
                    Curated by{" "}
                    <a href="https://www.linkedin.com/in/olalekan-gbolahan-owolabi" className="text-primary hover:underline transition-colors">Olalekan "Gabriel" Owolabi</a>
                    {" "}and{" "}
                    <a href="https://www.linkedin.com/in/adetayo-akinsanya/" className="text-primary hover:underline transition-colors">Adetayo Akinsanya</a>
                  </p>
                  <p className="opacity-50">© 2026 Emprinte Readers Hub</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
