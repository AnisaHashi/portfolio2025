import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Om meg
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <Card className="shadow-medium border-0 gradient-card">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Som fullstack-utvikler med fokus på{" "}
                <strong className="text-foreground">interaktivt design</strong>,
                <strong className="text-foreground">
                  {" "}
                  informasjonssikkerhet
                </strong>{" "}
                og
                <strong className="text-foreground">
                  {" "}
                  optimal brukeropplevelse
                </strong>
                , brenner jeg for å skape applikasjoner som ikke bare fungerer,
                men som gir ekte verdi til brukerne.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Med erfaring innen moderne språk og rammeverk som{" "}
                <strong className="text-primary">Java</strong>,
                <strong className="text-primary"> JavaScript</strong>,{" "}
                <strong className="text-primary">Kotlin</strong>,
                <strong className="text-primary"> Python</strong>,{" "}
                <strong className="text-primary">React</strong>,
                <strong className="text-primary"> Next.js</strong> og{" "}
                <strong className="text-primary">Tailwind</strong>, har jeg
                solid kompetanse innen både frontend og backend utvikling.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Min bakgrunn omfatter{" "}
                <strong className="text-foreground">databaser</strong>,
                <strong className="text-foreground">
                  {" "}
                  kryssplattformutvikling
                </strong>{" "}
                og
                <strong className="text-foreground"> smidige metoder</strong>.
                Jeg er lidenskapelig opptatt av å holde meg oppdatert på de
                nyeste teknologiene og beste praksisene i bransjen.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
