import { useRef, useState, useEffect } from "react";
import { useGsap } from "@/hooks/use-gsap";
import gsap from "gsap/dist/gsap";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const container = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useGsap(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
        // Remove preloader from DOM visually (optional, depending on if unmounted)
        gsap.set(container.current, { display: "none" });
      }
    });

    // Animate counter
    tl.to(counterRef.current, {
      innerText: 100,
      duration: 2,
      snap: { innerText: 1 },
      ease: "power2.inOut",
      onUpdate: function () {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(this.targets()[0].innerText) + "%";
        }
      }
    });

    // Animate "Curtain" reveal
    tl.to(container.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 1,
      ease: "power4.inOut",
    });

  }, [container]);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="text-center">
        <h1 ref={counterRef} className="text-9xl font-serif font-bold text-amber-500 tabular-nums">
          0%
        </h1>
        <p className="text-muted-foreground uppercase tracking-[0.5em] mt-4 animate-pulse">
          Installing Greatness...
        </p>
      </div>
    </div>
  );
}
