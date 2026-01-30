import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-24 border-t border-border relative z-10">
      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-left">
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <a
              href="https://www.emprintereaders.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity block"
            >
              <img
                src="https://www.emprintereaders.com/_next/image?url=%2FLogo.png&w=256&q=75"
                alt="Emprinte Readers Hub"
                className="h-16 w-auto"
              />
            </a>
            <div className="text-sm text-muted-foreground flex flex-col items-center md:items-start gap-4">
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="https://www.linkedin.com/in/olalekan-gbolahan-owolabi"
                  className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/5 hover:border-primary/50 text-primary transition-all font-medium"
                >
                  Gabriel Owolabi <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adetayo-akinsanya/"
                  className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/5 hover:border-primary/50 text-primary transition-all font-medium"
                >
                  Adetayo Akinsanya <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <p className="opacity-50">© 2026 Emprinte Readers Hub • Curated with Excellence</p>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-3xl md:text-4xl font-serif italic mb-2 text-foreground">Victory is built in private.</p>
            <p className="text-xl font-serif text-muted-foreground opacity-50 italic">Mastery is the standard.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
