import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Calendar,
  Code,
  Users,
  BookOpen,
  Heart,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Barnehageassistent",
      company: "Jobzone Bemanningsbyrå, Oslo",
      period: "2020 – 2025",
      type: "Pedagogisk arbeid",
      icon: Users,
      projects: [
        "Arbeidet i ulike barnehager med å tilrettelegge for barns utvikling og læring",
      ],
    },
    {
      title: "Frivillige Leksehjelp",
      company: "Tøyen Biblioteket, Oslo",
      period: "2019 – 2020",
      type: "Undervisning",
      icon: BookOpen,
      projects: ["Ga faglig støtte og leksehjelp til elever"],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Utvikling":
        return "gradient-accent text-white";
      case "Pedagogisk arbeid":
        return "bg-primary/10 text-primary border-primary/20";
      case "Undervisning":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Arbeidserfaring
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card
                key={index}
                className="shadow-medium border-0 gradient-card hover:shadow-glow transition-smooth"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-6 h-6 text-primary mr-3" />
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Oppgaver og prosjekter:
                    </h4>
                    <ul className="space-y-2">
                      {exp.projects.map((project, projIndex) => (
                        <li key={projIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-foreground/80">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
