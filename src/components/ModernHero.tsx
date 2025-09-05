import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const ModernHero = () => {
  const [nåværendeRolle, setNåværendeRolle] = useState(0);
  const roller = [
    "Frontend-utvikler",
    "Mobilutvikler",
    "Webutvikler",
    "React-spesialist",
    "UI/UX-entusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNåværendeRolle((forrige) => (forrige + 1) % roller.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 👇 Funksjon for å scrolle ned til prosjekter
  const scrollTilProsjekter = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: scroll én skjerm ned
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden bg-background">
      {/* Animerte bakgrunnselementer */}
      <div className="absolute inset-0 gradient-glow opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profil-avatar med glødeeffekt */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary to-accent p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img
                  src="/Images/profil.png"
                  alt="Profilbilde"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-neon">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Navn med gradient-tekst */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight fade-in-up">
            <span className="gradient-accent bg-clip-text text-transparent">
              Anisa Abdullahi Hashi
            </span>
          </h1>

          {/* Animerte roller */}
          <div
            className="h-16 mb-8 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-xl md:text-3xl text-muted-foreground mb-2">
              Lidenskapelig
            </p>
            <p className="text-2xl md:text-4xl font-bold text-primary transition-all duration-500">
              {roller[nåværendeRolle]}
            </p>
          </div>

          {/* Beskrivelse */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Bygger <span className="text-primary font-semibold">moderne</span>,{" "}
            <span className="text-accent font-semibold">interaktive</span>{" "}
            applikasjoner med fokus på
            <span className="text-success font-semibold">
              {" "}
              sikkerhet
            </span> og{" "}
            <span className="text-primary font-semibold">brukeropplevelse</span>
          </p>

          {/* Handlingsknapper */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 mb-16 fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-neon transition-all duration-300 hover-scale group"
              onClick={scrollTilProsjekter}
            >
              <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Se mitt arbeid
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300 hover-scale group"
              onClick={() => window.open("mailto:anisahashi001@gmail.com")}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ta kontakt
            </Button>
          </div>

          {/* Kontaktinfo */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-12 fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 flex items-center text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <Mail className="w-4 h-4 mr-2 text-primary" />
              anisahashi001@gmail.com
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 flex items-center text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <Phone className="w-4 h-4 mr-2 text-primary" />
              +47 969 80 272
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 flex items-center text-sm text-muted-foreground hover:border-primary/50 transition-colors">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              Oslo, Norge
            </div>
          </div>

          {/* Sosiale lenker */}
          <div
            className="flex items-center justify-center gap-4 mb-16 fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() =>
                window.open("https://github.com/AnisaHashi", "_blank")
              }
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/anisa-hashi-34abaa29a/",
                  "_blank"
                )
              }
            >
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>

          {/* Scroll-indikator */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Scroll til prosjekter"
            onClick={scrollTilProsjekter}
            onKeyDown={(e) => e.key === "Enter" && scrollTilProsjekter()}
            className="cursor-pointer select-none animate-bounce animate-fade-in-up [animation-delay:1.2s]"
          >
            <div className="w-6 h-10 border-2 border-primary/100 rounded-full flex justify-center mx-auto">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Scroll for å utforske
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
