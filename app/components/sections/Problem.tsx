import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { useRef } from "react";

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-20 bg-background overflow-hidden"
    >
      <Container className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div style={{ opacity }} className="order-2 md:order-1">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            The Distracted World
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We live in an age of dramatic distraction. Notifications, noise, and never-ending demands fragment our focus and dilute our genius.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            To lead your field, you must protect your mindset.
          </p>
        </motion.div>

        <div className="order-1 md:order-2 relative h-[400px] flex items-center justify-center">
          {/* Abstract chaos illustration */}
          <motion.div style={{ y: parallaxY }} className="absolute w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative z-10"
          >
            <div className="w-48 h-48 border border-muted-foreground/30 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 border border-muted-foreground/50 rounded-full" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
