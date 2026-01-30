import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Check } from "lucide-react";

const routine = [
  "Wake up at 5:00 AM sharp",
  "Hydrate with water and lemon",
  "20 mins of intense exercise",
  "20 mins of meditation & journaling",
  "20 mins of reading & learning",
  "Plan the day before 8:00 AM",
];

export function RealLifeApplication() {
  return (
    <section className="py-24 bg-muted/10">
      <Container className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12">The Daily Protocol</h2>
        <ul className="space-y-4 text-left inline-block">
          {routine.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 text-lg md:text-xl p-4 bg-background border border-border rounded-lg shadow-sm"
            >
              <span className="p-2 rounded-full bg-primary/10 text-primary">
                <Check className="h-5 w-5" />
              </span>
              {item}
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
