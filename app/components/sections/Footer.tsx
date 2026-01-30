import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-24 border-t border-border relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-8">
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
            <div className="text-sm text-muted-foreground">
              <p>
                Curated by{" "}
                <a href="https://www.linkedin.com/in/olalekan-gbolahan-owolabi" className="text-primary hover:underline transition-colors">Olalekan "Gabriel" Owolabi</a>
                {" "}and{" "}
                <a href="https://www.linkedin.com/in/adetayo-akinsanya/" className="text-primary hover:underline transition-colors">Adetayo Akinsanya</a>
              </p>
              <p className="opacity-50 mt-1">© 2026 Emprinte Readers Hub</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-3xl font-serif italic mb-2">Victory is built in private.</p>
            <p className="text-xl font-serif text-muted-foreground opacity-50 italic">Mastery is the standard.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
