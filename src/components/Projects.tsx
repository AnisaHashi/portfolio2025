import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Monitor,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Lightbox-komponent
const ImageLightbox = ({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      {/* Lukk knapp */}
      <button onClick={onClose} className="absolute top-6 right-6 text-white">
        <X className="w-8 h-8" />
      </button>

      {/* Forrige knapp */}
      <button onClick={prevImage} className="absolute left-6 text-white">
        <ChevronLeft className="w-10 h-10" />
      </button>

      {/* Bildet */}
      <img
        src={images[currentIndex]}
        alt={`Bilde ${currentIndex + 1}`}
        className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
      />

      {/* Neste knapp */}
      <button onClick={nextImage} className="absolute right-6 text-white">
        <ChevronRight className="w-10 h-10" />
      </button>
    </div>
  );
};

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Ref til scroll-container
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const projects = [
    {
      title: "Personlig portefølje-nettside",
      description:
        "Moderne, responsiv portefølje bygget med React og TypeScript med jevne animasjoner og mørkt tema.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      icon: Monitor,
      category: "Webutvikling",
      gradient: "from-primary to-blue-400",
      features: [
        "Responsivt design",
        "Mørkt tema",
        "Jevne animasjoner",
        "SEO-optimalisert",
      ],
      images: ["/Images/portfolio.png"],
      gitUrl: "https://github.com/AnisaHashi/portfolio2025.git",
    },
    {
      title: "InfoTavle - Oppgavehåndtering",
      description:
        "Prosjektstyringsverktøy basert på React med dra-og-slipp og sanntidsoppdateringer.",
      tech: ["React", "JavaScript", "Node.js", "MongoDB"],
      icon: Globe,
      category: "Webutvikling",
      gradient: "from-success to-emerald-400",
      features: [
        "Dra & slipp",
        "Sanntidsoppdateringer",
        "Samarbeid i team",
        "Prosjektanalyse",
      ],
      images: [
        "/Images/infotavle1.png",
        "/Images/infotavle1_2.png",
        "/Images/infotavle1_3.png",
        "/Images/infotavle1_4.png",
      ],
      gitUrl: "https://github.com/AnisaHashi/Exam-kpmg-2024",
    },
    {
      title: "Android handleapp",
      description:
        "Native Android-applikasjon bygget i Kotlin med moderne Material Design-prinsipper.",
      tech: ["Kotlin", "Android SDK", "Room", "MVVM"],
      icon: Smartphone,
      category: "Mobilutvikling",
      gradient: "from-orange-400 to-red-400",
      features: [
        "Material Design",
        "Offline-støtte",
        "Betalingsintegrasjon",
        "Ordresporing",
      ],
      images: [
        "/Images/android1.png",
        "/Images/home-kopi.png",
        "/Images/details-kopi.png",
        "/Images/4.png",
        "/Images/andr1_2.png",
      ],
      gitUrl: "https://github.com/AnisaHashi/Android-Netthandel",
    },
    {
      title: "iOS Nyhetsapp",
      description:
        "En moderne nyhetsapplikasjon som gir raske oppdateringer, organisert innhold og en personlig leseopplevelse.",
      tech: ["Swift", "iOS SDK", "Core Data", "UIKit"],
      icon: Smartphone,
      category: "Mobilutvikling",
      gradient: "from-accent to-pink-400",
      features: [
        "Sanntidsoppdateringer",
        "Nyhetskategorier",
        "Favorittartikler",
        "Push-varsler",
      ],
      images: [
        "/Images/news1.png",
        "/Images/news1_2.png",
        "/Images/news1_3.png",
        "/Images/news1_4.png",
        "/Images/news1_5.png",
        "/Images/news1_6.png",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Utvalgte{" "}
            <span className="gradient-accent bg-clip-text text-transparent">
              Prosjekter
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En presentasjon av mine tekniske ferdigheter og kreativitet gjennom
            ekte applikasjoner
          </p>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mt-8"></div>
        </div>

        {/* Scroll knapper */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-3 shadow-md hover:bg-primary/20 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-3 shadow-md hover:bg-primary/20 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-transparent pb-6"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={index}
                className="min-w-[320px] md:min-w-[400px] lg:min-w-[450px] flex-shrink-0 snap-start group bg-card border-border/50 hover:border-primary/50 shadow-medium hover:shadow-glow transition-all duration-500 hover-scale relative overflow-hidden"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-tr ${project.gradient} flex items-center justify-center shadow-glow`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  {/* Thumbnail */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-6">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  )}

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Viktige funksjoner:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-xs text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Teknologistack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.gitUrl ? (
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary border border-primary/20 hover:border-primary transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Kode
                        </Button>
                      </a>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="flex-1 bg-muted text-muted-foreground cursor-not-allowed"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Kode
                      </Button>
                    )}

                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-accent/20 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300"
                      onClick={() => {
                        setLightboxImages(project.images);
                        setLightboxIndex(0);
                        setLightboxOpen(true);
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Lightbox render */}
      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
};

export default Projects;
