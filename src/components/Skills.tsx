import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Server, Smartphone, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: [
        "JavaScript",
        "React",
        "NextJS",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind",
        "Interaktivt design",
      ],
      color: "text-primary",
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Java",
        "Python",
        ".NET",
        "Kotlin",
        "MySQL",
        "Linux",
        "Algoritmer og datastrukturer",
      ],
      color: "text-accent",
    },
    {
      title: "Cross-Platform",
      icon: Smartphone,
      skills: ["Kotlin", "Swift", "JavaScript", "React Native"],
      color: "text-primary",
    },
    {
      title: "Andre",
      icon: Settings,
      skills: ["Informasjonssikkerhet", "Git", "Smidig prosjektledelse"],
      color: "text-muted-foreground",
    },
  ];

  const languages = [
    { name: "Norsk", level: "Flytende muntlig og skriftlig" },
    { name: "Engelsk", level: "God muntlig og skriftlig" },
    { name: "Somali", level: "God muntlig og skriftlig" },
  ];

  const traits = [
    "Kreativ problemløser",
    "Sterk kommunikator",
    "Tilpasningsdyktig",
    "Proaktiv",
    "Teamorientert",
    "Kvalitetsbevisst",
    "Engasjert og motivert",
    "Livslang lærende",
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ferdigheter
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="shadow-medium border-0 gradient-card hover:shadow-glow transition-smooth h-full"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <IconComponent
                      className={`w-5 h-5 mr-2 ${category.color}`}
                    />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Languages and Personal Traits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Languages */}
          <Card className="shadow-medium border-0 gradient-card">
            <CardHeader>
              <CardTitle className="text-xl">Språk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="font-medium text-foreground">
                      {lang.name}
                    </span>
                    <Badge variant="secondary">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Personal Traits */}
          <Card className="shadow-medium border-0 gradient-card">
            <CardHeader>
              <CardTitle className="text-xl">Personlige egenskaper</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {traits.map((trait, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {trait}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
