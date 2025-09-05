import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor i Frontend- og Mobilutvikling",
      school: "Høyskolen Kristiania, Oslo",
      period: "Aug 2022 – Juni 2025",
      status: "Fullført",
      subjects: [
        "Python",
        "JavaScript",
        "Java",
        "Databaser",
        "Algoritmer og datastrukturer",
        "Android-programmering",
        "Smidig prosjekt",
        "Interaksjonsdesign",
        "Informasjonssikkerhet",
        "Visual Analytics",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Utdanning
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="shadow-medium border-0 gradient-card hover:shadow-glow transition-smooth"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-2">
                      {edu.school}
                    </p>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <Badge
                    variant={
                      edu.status === "Fullført" ? "default" : "secondary"
                    }
                    className={
                      edu.status === "Fullført"
                        ? "gradient-accent text-white"
                        : ""
                    }
                  >
                    {edu.status}
                  </Badge>
                </div>

                {edu.subjects.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Sentrale emner:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, subIndex) => (
                        <Badge
                          key={subIndex}
                          variant="outline"
                          className="text-sm"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
