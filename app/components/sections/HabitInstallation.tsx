import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function HabitInstallation() {
  return (
    <section className="py-32 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 sticky top-24">
            <h2 className="text-4xl font-serif font-bold mb-6">66 Days to Mastery</h2>
            <p className="text-muted-foreground text-lg mb-4">
              All change is hard at first, messy in the middle, and gorgeous at the end.
            </p>
          </div>

          <div className="md:w-2/3 space-y-12 pl-4 border-l border-border/50">
            {[
              { phase: "Destruction", days: "Days 1-22", desc: "Destroying old habits. High resistance. Requires grit." },
              { phase: "Installation", days: "Days 23-44", desc: "Installing new neural pathways. It gets messy and confusing." },
              { phase: "Integration", days: "Days 45-66", desc: "Automaticity. The habit becomes who you are." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-muted/20 rounded-lg"
              >
                <div className="text-primary font-mono text-sm mb-2">{item.days}</div>
                <h3 className="text-2xl font-bold mb-2">{item.phase}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
