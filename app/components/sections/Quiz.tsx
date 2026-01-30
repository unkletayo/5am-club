import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGsap } from "@/hooks/use-gsap";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Trophy, ArrowRight, RefreshCcw } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which is the first 20-minute block of the 20/20/20 Formula?",
    options: ["Reflect", "Move", "Grow", "Plan"],
    correct: 1,
    explanation: "The first 20 minutes (5:00 - 5:20) are dedicated to intense movement to jumpstart your biology."
  },
  {
    id: 2,
    text: "What are the 4 Interior Empires?",
    options: [
      "Mindset, Career, Health, Money",
      "Mindset, Heartset, Healthset, Soulset",
      "Focus, Strength, Wisdom, Peace",
      "Intelligence, Love, Fitness, Spirit"
    ],
    correct: 1,
    explanation: "True power comes from balancing Mindset, Heartset, Healthset, and Soulset."
  },
  {
    id: 3,
    text: "According to the 90/90/1 rule, for 90 days you spend the first 90 minutes on:",
    options: ["Emails", "Exercise", "Your #1 Opportunity", "Meditation"],
    correct: 2,
    explanation: "Dedicate your best hours to your most significant work for elite results."
  },
  {
    id: 4,
    text: "How many days does it take to permanently install a new habit?",
    options: ["21 Days", "30 Days", "66 Days", "90 Days"],
    correct: 2,
    explanation: "The 66-day protocol: 22 days of destruction, 22 of installation, and 22 of integration."
  },
  {
    id: 5,
    text: "The 'Twin Cycles of Elite Performance' are High Excellence and:",
    options: ["Deep Recovery", "Total Focus", "Constant Learning", "Massive Action"],
    correct: 0,
    explanation: "You cannot remain at the peak without honoring the cycle of recovery."
  }
];

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function Quiz() {
  const [gameState, setGameState] = useState<"landing" | "playing" | "finished">("landing");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isShowingFeedback, setIsShowingFeedback] = useState(false);
  const quizRef = useRef<HTMLDivElement>(null);

  const startQuiz = () => {
    setGameState("playing");
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
  };

  const handleOptionSelect = (index: number) => {
    if (isShowingFeedback) return;
    setSelectedOption(index);
    setIsShowingFeedback(true);

    if (index === QUIZ_QUESTIONS[currentQuestion].correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(q => q + 1);
        setSelectedOption(null);
        setIsShowingFeedback(false);
      } else {
        setGameState("finished");
        setIsShowingFeedback(false);
      }
    }, 2000);
  };

  const handleShareResult = () => {
    const status = score === QUIZ_QUESTIONS.length ? "LEGENDARY 💎" : score >= 3 ? "A RISING TITAN 🔥" : "ON THE JOURNEY 🌅";
    const text = `*5 AM Club Audit Result*\n\nI just scored *${score}/${QUIZ_QUESTIONS.length}* in the Mastery Quiz!\n\n*Status:* ${status}\n\nJoin the club and elevate your life here: ${window.location.origin}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  useGsap(() => {
    if (!quizRef.current) return;
    gsap.from(quizRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      scrollTrigger: {
        trigger: quizRef.current,
        start: "top 80%",
      }
    });
  }, []);

  return (
    <section ref={quizRef} className="py-24 relative overflow-hidden bg-background">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-primary font-bold tracking-widest text-sm uppercase mb-4">🧠 Installation Check</h3>
            <h4 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Mastery Quiz</h4>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="bg-card/50 backdrop-blur-xl border border-primary/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {gameState === "landing" && (
                <motion.div
                  key="landing"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center space-y-8"
                >
                  <p className="text-2xl text-muted-foreground font-light leading-relaxed">
                    "Average people love entertainment. Extraordinary people adore education."
                  </p>
                  <p className="text-lg text-muted-foreground/70">
                    Prove your knowledge of the 5 AM Club philosophy. Are you a visitor or a future titan?
                  </p>
                  <Button
                    onClick={startQuiz}
                    size="lg"
                    className="rounded-full px-12 py-8 text-xl group gap-4 transition-all hover:scale-105"
                  >
                    Start Mastery Audit
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </motion.div>
              )}

              {gameState === "playing" && (
                <motion.div
                  key="playing"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/40">
                      Step 0{currentQuestion + 1} / 0{QUIZ_QUESTIONS.length}
                    </span>
                    <div className="h-1 flex-1 mx-8 bg-primary/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h5 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
                    {QUIZ_QUESTIONS[currentQuestion].text}
                  </h5>

                  <div className="grid gap-4">
                    {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = idx === QUIZ_QUESTIONS[currentQuestion].correct;
                      const showFeedback = isShowingFeedback;

                      return (
                        <button
                          key={idx}
                          disabled={showFeedback}
                          onClick={() => handleOptionSelect(idx)}
                          className={`
                            w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group
                            ${!showFeedback && 'hover:bg-primary/5 hover:border-primary/30 border-border/50 text-foreground'}
                            ${showFeedback && isCorrect && 'bg-emerald-500/10 border-emerald-500 text-emerald-500 font-bold'}
                            ${showFeedback && isSelected && !isCorrect && 'bg-red-500/10 border-red-500 text-red-500 font-bold'}
                            ${showFeedback && !isSelected && !isCorrect && 'opacity-40 border-border/20'}
                          `}
                        >
                          <span className="text-lg">{option}</span>
                          {showFeedback && isCorrect && <Check className="w-6 h-6" />}
                          {showFeedback && isSelected && !isCorrect && <X className="w-6 h-6" />}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {isShowingFeedback && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-muted-foreground italic"
                      >
                        {QUIZ_QUESTIONS[currentQuestion].explanation}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {gameState === "finished" && (
                <motion.div
                  key="finished"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-12"
                >
                  <div className="inline-flex p-8 rounded-full bg-primary/10 mb-4">
                    <Trophy className="w-20 h-20 text-primary animate-bounce" />
                  </div>
                  <div>
                    <h5 className="text-5xl font-serif font-bold mb-4">
                      {score === QUIZ_QUESTIONS.length ? "Legendary Status" : score >= 3 ? "Titan Rising" : "Still Learning"}
                    </h5>
                    <p className="text-6xl font-mono text-primary font-bold">
                      {score}/{QUIZ_QUESTIONS.length}
                    </p>
                  </div>

                  <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
                    {score === QUIZ_QUESTIONS.length
                      ? "You have fully installed the 5 AM Philosophy. You are ready to lead your empire."
                      : "The installation is in progress. Every morning is a new chance to reach mastery."}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <Button
                      onClick={handleShareResult}
                      size="lg"
                      className="rounded-full px-12 py-8 text-xl gap-4 transition-all bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold border-none shadow-[0_0_20px_-5px_#25D366]"
                    >
                      <WhatsAppIcon />
                      Share This Victory
                    </Button>
                    <Button
                      onClick={startQuiz}
                      variant="outline"
                      size="lg"
                      className="rounded-full px-12 py-8 text-xl gap-4 border-primary/20 hover:bg-primary/5"
                    >
                      <RefreshCcw className="w-5 h-5" />
                      Try Again
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
