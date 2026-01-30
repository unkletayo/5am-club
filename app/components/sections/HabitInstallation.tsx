import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function HabitInstallation() {
  const steps = [
    { phase: "Destruction", days: "Days 1-22", desc: "Extreme resistance. You are destroying old neural pathways. Requires raw discipline and grit." },
    { phase: "Installation", days: "Days 23-44", desc: "The messy middle. It feels chaotic, but your brain is remapping itself. Keep going." },
    { phase: "Integration", days: "Days 45-66", desc: "Automaticity. The habit becomes your new normal. You have successfully updated your identity." }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-primary font-bold tracking-widest text-sm uppercase mb-4">⚙️ The 66-Day Protocol</h3>
            <h4 className="text-4xl md:text-6xl font-serif font-bold mb-8">Habit Installation</h4>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto italic font-serif">
              "All change is hard at first, messy in the middle, and gorgeous at the end."
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-10 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-xl"
              >
                <div className="absolute top-0 right-0 p-8 text-6xl font-serif font-bold opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  0{i + 1}
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  {item.days}
                </div>

                <h3 className="text-3xl font-serif font-bold mb-4">{item.phase}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
