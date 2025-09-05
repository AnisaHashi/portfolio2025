import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 gradient-hero relative overflow-hidden">
      {/* Bakgrunnsdekorasjon */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            La oss jobbe sammen
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Interessert i å samarbeide? Ta kontakt!
          </p>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-glow">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Kontaktinformasjon */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Kontaktinformasjon
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center text-white/90">
                    <Mail className="w-5 h-5 mr-4 text-white" />
                    <div>
                      <p className="font-medium">E-post</p>
                      <a
                        href="mailto:anisahashi001@gmail.com"
                        className="text-white/80 hover:text-white transition-smooth"
                      >
                        anisahashi001@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center text-white/90">
                    <Phone className="w-5 h-5 mr-4 text-white" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <a
                        href="tel:+4796980272"
                        className="text-white/80 hover:text-white transition-smooth"
                      >
                        +47 969 80 272
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center text-white/90">
                    <MapPin className="w-5 h-5 mr-4 text-white" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-white/80">Norbygata 21, 0187 Oslo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Kom i gang
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Jeg er alltid åpen for nye muligheter og spennende prosjekter.
                  La oss diskutere hvordan vi kan skape noe flott sammen!
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-smooth"
                    onClick={() =>
                      window.open("mailto:anisahashi001@gmail.com")
                    }
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send en e-post
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full bg-transparent border-white/30 text-white hover:bg-white/10 transition-smooth"
                    onClick={() => window.open("tel:+4796980272")}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring meg
                  </Button>
                </div>
              </div>
            </div>

            {/* Sosiale lenker */}
            <div className="border-t border-white/20 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-white/60 text-sm">
                  Født 05.05.2001 • Oslo, Norge
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
