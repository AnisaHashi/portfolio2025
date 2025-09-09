// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   Calendar,
//   Clock,
//   Sparkles,
// } from "lucide-react";
// import { useState } from "react";

// const ModernContact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Simulerer innsending av skjema
//     setTimeout(() => {
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   return (
//     <section className="py-20 px-4 relative overflow-hidden bg-background">
//       {/* Bakgrunnseffekter */}
//       <div className="absolute inset-0 gradient-glow opacity-20"></div>
//       <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl floating"></div>
//       <div
//         className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating"
//         style={{ animationDelay: "3s" }}
//       ></div>

//       <div className="container mx-auto max-w-6xl relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
//             La oss skape noe
//             <span className="gradient-accent bg-clip-text text-transparent">
//               {" "}
//               Fantastisk
//             </span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Klar til å gjøre ideene dine til virkelighet? Jeg er alltid motivert
//             for å jobbe med nye prosjekter og utfordringer.
//           </p>
//           <div className="w-24 h-1 gradient-accent mx-auto rounded-full mt-8"></div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Kontaktskjema */}
//           <Card className="bg-card border-border/50 shadow-glow hover:shadow-neon/50 transition-all duration-500">
//             <CardContent className="p-8">
//               <div className="flex items-center mb-6">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-glow mr-3">
//                   <Send className="w-5 h-5 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-foreground">
//                   Send meg en melding
//                 </h3>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm font-medium text-foreground mb-2 block">
//                       Navn
//                     </label>
//                     <Input
//                       placeholder="Ditt navn"
//                       className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium text-foreground mb-2 block">
//                       E-post
//                     </label>
//                     <Input
//                       type="email"
//                       placeholder="din.epost@eksempel.com"
//                       className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium text-foreground mb-2 block">
//                     Emne
//                   </label>
//                   <Input
//                     placeholder="Hva gjelder det?"
//                     className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium text-foreground mb-2 block">
//                     Melding
//                   </label>
//                   <Textarea
//                     placeholder="Fortell meg om prosjektet eller muligheten..."
//                     rows={5}
//                     className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   size="lg"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-glow hover:shadow-neon transition-all duration-300 hover-scale"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"></div>
//                       Sender...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 mr-2" />
//                       Send melding
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>

//           {/* Kontaktinformasjon */}
//           <div className="space-y-8">
//             {/* Kontaktkort */}
//             <div className="space-y-6">
//               <Card className="bg-card border-border/50 hover:border-primary/50 shadow-medium hover:shadow-glow transition-all duration-300 hover-scale group">
//                 <CardContent className="p-6">
//                   <div className="flex items-start">
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center shadow-glow mr-4 group-hover:shadow-neon transition-all duration-300">
//                       <Mail className="w-6 h-6 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-semibold text-foreground mb-1">
//                         E-post
//                       </h4>
//                       <p className="text-muted-foreground text-sm mb-2">
//                         Beste måten å nå meg på
//                       </p>
//                       <a
//                         href="mailto:anisahashi001@gmail.com"
//                         className="text-primary hover:text-accent transition-colors font-medium"
//                       >
//                         anisahashi001@gmail.com
//                       </a>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="bg-card border-border/50 hover:border-accent/50 shadow-medium hover:shadow-glow transition-all duration-300 hover-scale group">
//                 <CardContent className="p-6">
//                   <div className="flex items-start">
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-accent to-pink-400 flex items-center justify-center shadow-glow mr-4 group-hover:shadow-neon transition-all duration-300">
//                       <Phone className="w-6 h-6 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-semibold text-foreground mb-1">
//                         Telefon
//                       </h4>
//                       <p className="text-muted-foreground text-sm mb-2">
//                         Tilgjengelig for samtaler
//                       </p>
//                       <a
//                         href="tel:+4796980272"
//                         className="text-accent hover:text-primary transition-colors font-medium"
//                       >
//                         +47 969 80 272
//                       </a>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="bg-card border-border/50 hover:border-success/50 shadow-medium hover:shadow-glow transition-all duration-300 hover-scale group">
//                 <CardContent className="p-6">
//                   <div className="flex items-start">
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-success to-emerald-400 flex items-center justify-center shadow-glow mr-4 group-hover:shadow-neon transition-all duration-300">
//                       <MapPin className="w-6 h-6 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-semibold text-foreground mb-1">
//                         Sted
//                       </h4>
//                       <p className="text-muted-foreground text-sm mb-2">
//                         Basert i Norge
//                       </p>
//                       <p className="text-success font-medium">Oslo, Norge</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Tilgjengelighet */}
//             <Card className="bg-gradient-to-tr from-card to-card/50 border-border/50 shadow-glow">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="w-3 h-3 bg-success rounded-full mr-3 animate-pulse"></div>
//                   <h4 className="font-semibold text-foreground">
//                     For tiden tilgjengelig
//                   </h4>
//                 </div>
//                 <p className="text-muted-foreground text-sm mb-4">
//                   Jeg ser aktivt etter nye muligheter og spennende prosjekter.
//                   La oss diskutere hvordan vi kan jobbe sammen!
//                 </p>
//                 <div className="grid grid-cols-2 gap-4 text-sm">
//                   <div className="flex items-center">
//                     <Calendar className="w-4 h-4 text-primary mr-2" />
//                     <span className="text-muted-foreground">
//                       Tilgjengelig for prosjekter
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <Clock className="w-4 h-4 text-accent mr-2" />
//                     <span className="text-muted-foreground">Rask svartid</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Call to Action */}
//             <div className="text-center p-6 rounded-2xl bg-gradient-to-tr from-primary/10 to-accent/10 border border-primary/20">
//               <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
//               <h4 className="font-bold text-foreground mb-2">
//                 Klar til å komme i gang?
//               </h4>
//               <p className="text-muted-foreground text-sm mb-4">
//                 La oss skape noe fantastisk sammen
//               </p>
//               <Button
//                 size="sm"
//                 className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-glow hover:shadow-neon transition-all duration-300"
//                 onClick={() => window.open("mailto:anisahashi001@gmail.com")}
//               >
//                 <Mail className="w-4 h-4 mr-2" />
//                 Start en samtale
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ModernContact;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const ModernContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatusMessage("✅ Takk! Meldingen ble sendt.");
        e.currentTarget.reset();
      } else {
        setStatusMessage("❌ Noe gikk galt. Prøv igjen senere.");
      }
    } catch (error) {
      setStatusMessage("⚠️ Nettverksfeil. Kunne ikke sende.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-background">
      {/* Bakgrunnseffekter */}
      <div className="absolute inset-0 gradient-glow opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl floating"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            La oss skape noe
            <span className="gradient-accent bg-clip-text text-transparent">
              {" "}
              Fantastisk
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Klar til å gjøre ideene dine til virkelighet? Jeg er alltid motivert
            for å jobbe med nye prosjekter og utfordringer.
          </p>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontaktskjema */}
          <Card className="bg-card border-border/50 shadow-glow hover:shadow-neon/50 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-glow mr-3">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Send meg en melding
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Navn
                    </label>
                    <Input
                      name="name"
                      placeholder="Ditt navn"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      E-post
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="din.epost@eksempel.com"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Emne
                  </label>
                  <Input
                    name="subject"
                    placeholder="Hva gjelder det?"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Melding
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Fortell meg om prosjektet eller muligheten..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-glow hover:shadow-neon transition-all duration-300 hover-scale"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"></div>
                      Sender...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send melding
                    </>
                  )}
                </Button>

                {statusMessage && (
                  <p className="text-center text-sm mt-4">{statusMessage}</p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Kontaktinformasjon */}
          <div className="space-y-8">
            {/* Kontaktkort */}
            <div className="space-y-6">
              <Card className="bg-card border-border/50 hover:border-primary/50 shadow-medium hover:shadow-glow transition-all duration-300 hover-scale group">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center shadow-glow mr-4 group-hover:shadow-neon transition-all duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        E-post
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Beste måten å nå meg på
                      </p>
                      <a
                        href="mailto:anisahashi001@gmail.com"
                        className="text-primary hover:text-accent transition-colors font-medium"
                      >
                        anisahashi001@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 hover:border-accent/50 shadow-medium hover:shadow-glow transition-all duration-300 hover-scale group">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-accent to-pink-400 flex items-center justify-center shadow-glow mr-4 group-hover:shadow-neon transition-all duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        Telefon
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Tilgjengelig for samtaler
                      </p>
                      <a
                        href="tel:+4796980272"
                        className="text-accent hover:text-primary transition-colors font-medium"
                      >
                        +47 969 80 272
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 hover:border-success/50 shadow-medium hover:shadow-glow transition-all duration-300 hover-scale group">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-success to-emerald-400 flex items-center justify-center shadow-glow mr-4 group-hover:shadow-neon transition-all duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        Sted
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Basert i Norge
                      </p>
                      <p className="text-success font-medium">Oslo, Norge</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tilgjengelighet */}
            <Card className="bg-gradient-to-tr from-card to-card/50 border-border/50 shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-success rounded-full mr-3 animate-pulse"></div>
                  <h4 className="font-semibold text-foreground">
                    For tiden tilgjengelig
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Jeg ser aktivt etter nye muligheter og spennende prosjekter.
                  La oss diskutere hvordan vi kan jobbe sammen!
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-primary mr-2" />
                    <span className="text-muted-foreground">
                      Tilgjengelig for prosjekter
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-accent mr-2" />
                    <span className="text-muted-foreground">Rask svartid</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-tr from-primary/10 to-accent/10 border border-primary/20">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">
                Klar til å komme i gang?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                La oss skape noe fantastisk sammen
              </p>
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-glow hover:shadow-neon transition-all duration-300"
                onClick={() => window.open("mailto:anisahashi001@gmail.com")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Start en samtale
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;