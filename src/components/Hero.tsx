import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile image placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center shadow-glow">
            <span className="text-4xl font-bold text-white">AH</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Anisa Abdullahi Hashi
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Frontend- og mobile utvikling
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Fullstack-utvikler med fokus på interaktivt design,
            informasjonssikkerhet og optimal brukeropplevelse
          </p>

          {/* Contact buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-smooth"
              onClick={() => window.open("mailto:anisahashi001@gmail.com")}
            >
              <Mail className="w-5 h-5 mr-2" />
              anisahashi001@gmail.com
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-smooth"
              onClick={() => window.open("tel:+4796980272")}
            >
              <Phone className="w-5 h-5 mr-2" />
              +47 969 80 272
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center text-white/70 mb-8">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Norbygata 21, 0187 Oslo</span>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
