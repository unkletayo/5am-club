import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Philosophy() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-[#0a0a0c]">
      <Container className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-serif italic text-muted-foreground/80 mb-8">
            "Solitude. Silence. Serenity."
          </h2>
          <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed">
            At 5 AM, the world is asleep. This is the Victory Hour.
            <br />
            It is the time of least distraction and highest purity.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
