import { useState, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGsap } from "@/hooks/use-gsap";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, MessageSquare, ChevronDown } from "lucide-react";

const QUESTIONS = [
  "Which habit has challenged you most so far: sleep, early rising, focus, or consistency?",
  "What distraction must you trim this week to deepen your discipline?",
  "Where is life asking you to persist instead of quit?",
  "Who in this group inspires you by how they show up daily? Tag them.",
  "What is one non-negotiable habit you’ll protect this coming week?"
];

interface InteractiveQuestionProps {
  question: string;
  value: string;
  onChange: (val: string) => void;
  index: number;
}

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function InteractiveQuestion({ question, value, onChange, index }: InteractiveQuestionProps) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const [shared, setShared] = useState(false);

  const handleIndividualShare = async () => {
    if (!value.trim()) return;
    const text = `Reflection from The 5 AM Club:\n\nQ: ${question}\nA: ${value}`;
    await navigator.clipboard.writeText(text);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const handleIndividualWhatsApp = () => {
    if (!value.trim()) return;
    const text = `*Reflection from The 5 AM Club*\n\n*Q:* ${question}\n*A:* ${value}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="question-item border-b border-border/10 pb-6 mb-6 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left group flex items-start justify-between gap-4"
      >
        <p className={`text-xl md:text-2xl font-light transition-colors leading-normal flex-1 ${isOpen ? 'text-primary' : 'hover:text-primary/70'}`}>
          <span className="text-primary/40 mr-4 font-mono text-sm inline-block w-6">0{index + 1}</span>
          {question}
        </p>
        <div className={`mt-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-muted-foreground/50'}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2 space-y-4">
              <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full max-w-full bg-card border border-border/50 rounded-xl p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all min-h-[100px] text-base md:text-lg resize-none"
              />
              <div className="flex justify-end gap-3">
                <Button
                  onClick={handleIndividualShare}
                  disabled={!value.trim()}
                  variant="outline"
                  size="sm"
                  className="gap-2 rounded-full border-primary/10 hover:bg-primary/5 active:scale-95 transition-all text-xs text-muted-foreground"
                >
                  {shared ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Send className="w-3 h-3" />}
                  {shared ? "Copied" : "Copy Text"}
                </Button>
                <Button
                  onClick={handleIndividualWhatsApp}
                  disabled={!value.trim()}
                  variant="default"
                  size="sm"
                  className="gap-2 rounded-full shadow-lg hover:shadow-primary/20 active:scale-95 transition-all text-xs font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20bd5a] text-white border-none"
                >
                  <WhatsAppIcon />
                  Share This
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function VictoryAudit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [shared, setShared] = useState(false);

  const hasAnswers = Object.values(answers).some(a => a.trim().length > 0);

  const getFormattedSummary = () => {
    let summary = `*Victory Night Reflections | The 5 AM Club*\n\n`;
    QUESTIONS.forEach((q, i) => {
      const a = answers[i];
      if (a && a.trim()) {
        summary += `*Q:* ${q}\n*A:* ${a}\n\n`;
      }
    });
    return summary.trim();
  };

  const handleCopyAll = async () => {
    const text = getFormattedSummary().replace(/\*/g, '');
    await navigator.clipboard.writeText(text);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const handleWhatsAppAll = () => {
    const text = getFormattedSummary();
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  useGsap(() => {
    if (!sectionRef.current) return;
    const q = gsap.utils.selector(sectionRef.current);
    gsap.from(q(".audit-intro, .question-item, .core-takeaways"), {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="bg-background text-foreground py-24 relative z-10">
      <Container>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <div className="audit-intro mb-12">
              <h3 className="text-primary font-bold tracking-widest text-sm uppercase mb-4">💬 Victory Audit</h3>
              <h4 className="text-4xl md:text-5xl font-serif font-bold mb-6">Reflection Yard</h4>
              <p className="text-muted-foreground text-lg max-w-xl">
                True discipline requires self-honesty. Click a question to audit your progress and share your growth with the community.
              </p>
            </div>

            <div className="space-y-4">
              {QUESTIONS.map((q, i) => (
                <InteractiveQuestion
                  key={i}
                  question={q}
                  index={i}
                  value={answers[i] || ""}
                  onChange={(val) => setAnswers(prev => ({ ...prev, [i]: val }))}
                />
              ))}
            </div>

            <div className="footer-actions mt-12 p-6 md:p-12 rounded-2xl md:rounded-3xl bg-card border-2 border-primary/10 flex flex-col items-center text-center gap-6 md:gap-8 transition-all hover:border-primary/20 shadow-2xl overflow-hidden">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
                  Audit in Progress
                </div>
                <h5 className="text-xl md:text-3xl font-serif font-bold">Share Everything At Once</h5>
                <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
                  Share all your reflections into a single powerful report for your group.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                <Button
                  onClick={handleCopyAll}
                  disabled={!hasAnswers}
                  variant="outline"
                  className="rounded-full gap-2 px-6 md:px-8 h-12 md:h-16 text-sm md:text-lg border-primary/20 transition-all active:scale-95"
                >
                  {shared ? <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" /> : <Send className="w-4 h-4 md:w-5 md:h-5" />}
                  {shared ? "Copied All" : "Copy Full Report"}
                </Button>
                <Button
                  onClick={handleWhatsAppAll}
                  disabled={!hasAnswers}
                  variant="default"
                  className="rounded-full gap-3 px-8 md:px-10 h-12 md:h-16 text-sm md:text-lg bg-[#25D366] hover:bg-[#20bd5a] border-none text-white font-bold shadow-[0_0_20px_-5px_#25D366] hover:shadow-[0_0_40px_-5px_#25D366] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  <WhatsAppIcon />
                  Share to WhatsApp
                </Button>
              </div>
              {hasAnswers && (
                <p className="text-[10px] md:text-xs text-primary/60 font-medium animate-bounce mt-2" style={{ marginBottom: 0 }}>
                  ↑ Ready to inspire your community?
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-1" />

          <div className="lg:col-span-4 space-y-12">
            <div className="core-takeaways bg-card p-6 md:p-10 rounded-2xl border border-border backdrop-blur-sm shadow-xl">
              <h3 className="font-serif text-3xl font-bold mb-8 text-primary">🔑 Core Takeaways</h3>
              <ul className="space-y-6 text-xl text-muted-foreground">
                <li className="flex gap-4"><span className="text-primary font-bold">•</span> Greatness is a daily decision.</li>
                <li className="flex gap-4"><span className="text-primary font-bold">•</span> Own your mornings.</li>
                <li className="flex gap-4"><span className="text-primary font-bold">•</span> Honor rest.</li>
                <li className="flex gap-4"><span className="text-primary font-bold">•</span> Keep your word.</li>
                <li className="flex gap-4"><span className="text-primary font-bold">•</span> Use adversity.</li>
              </ul>
            </div>

            <div className="audit-quote mt-12">
              <p className="text-3xl font-serif italic mb-2">Victory is built in private.</p>
              <p className="text-3xl font-serif italic">Accountability is forged in community.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
