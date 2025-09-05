import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Server,
  Smartphone,
  Database,
  Shield,
  GitBranch,
  Zap,
  Code2,
  Palette,
} from "lucide-react";

const TechStack = () => {
  const skillCategories = [
    {
      title: "Frontend Utvikling",
      icon: Monitor,
      skills: [
        {
          name: "JavaScript",
          level: 100,
          color: "from-yellow-400 to-yellow-600",
        },
        { name: "React", level: 100, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "TypeScript", level: 100, color: "from-blue-500 to-blue-700" },
        { name: "HTML/CSS", level: 100, color: "from-orange-400 to-red-500" },
        {
          name: "Tailwind CSS",
          level: 100,
          color: "from-cyan-400 to-blue-500",
        },
      ],
      gradient: "from-primary to-blue-400",
    },
    {
      title: "Backend Utvikling",
      icon: Server,
      skills: [
        { name: "Java", level: 85, color: "from-red-500 to-red-700" },
        { name: "Python", level: 80, color: "from-green-400 to-blue-500" },
        { name: ".NET", level: 70, color: "from-purple-400 to-purple-600" },
        { name: "Node.js", level: 75, color: "from-green-500 to-green-700" },
        {
          name: "REST APIs",
          level: 85,
          color: "from-indigo-400 to-indigo-600",
        },
      ],
      gradient: "from-success to-emerald-400",
    },
    {
      title: "Mobile Utvikling",
      icon: Smartphone,
      skills: [
        { name: "Kotlin", level: 80, color: "from-purple-500 to-purple-700" },
        { name: "Swift", level: 70, color: "from-orange-400 to-orange-600" },
        { name: "React Native", level: 75, color: "from-blue-400 to-cyan-500" },
        {
          name: "Android SDK",
          level: 85,
          color: "from-green-400 to-green-600",
        },
      ],
      gradient: "from-accent to-pink-400",
    },
    {
      title: "Database og Verktøy",
      icon: Database,
      skills: [
        { name: "MySQL", level: 80, color: "from-blue-500 to-blue-700" },
        { name: "Git", level: 99, color: "from-orange-500 to-red-500" },
        { name: "Linux", level: 75, color: "from-yellow-400 to-orange-500" },
      ],
      gradient: "from-orange-400 to-red-400",
    },
  ];

  const softSkills = [
  { name: "Problemløsning", icon: Zap },
  { name: "Samarbeid i team", icon: GitBranch },
  { name: "Smidig utvikling", icon: Code2 },
  { name: "UI/UX-design", icon: Palette },
  { name: "Sikkerhetsbevissthet", icon: Shield },
];

return (
  <section className="py-20 px-4 bg-card/30">
    <div className="container mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Teknisk{" "}
          <span className="gradient-accent bg-clip-text text-transparent">
            Kompetanse
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          En oversikt over mine tekniske ferdigheter og kompetansenivå
        </p>
        <div className="w-24 h-1 gradient-accent mx-auto rounded-full mt-8"></div>
      </div>

      {/* Tekniske ferdigheter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card
              key={index}
              className="bg-card border-border/50 hover:border-primary/50 shadow-medium hover:shadow-glow transition-all duration-500 hover-scale group"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-tr ${category.gradient} flex items-center justify-center mr-3 shadow-glow`}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-sm`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Myke ferdigheter */}
      <Card className="bg-card border-border/50 shadow-medium">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Profesjonelle{" "}
            <span className="gradient-accent bg-clip-text text-transparent">
              Ferdigheter
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="text-center group hover-scale">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-glow group-hover:shadow-neon transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Språk */}
      <Card className="mt-8 bg-card border-border/50 shadow-medium">
        <CardHeader>
          <CardTitle className="text-xl">Språk</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-bold text-lg text-foreground mb-2">
                Norsk
              </h4>
              <p className="text-muted-foreground">Flytende</p>
              <div className="w-full bg-secondary rounded-full h-2 mt-2">
                <div className="w-full h-full bg-gradient-to-r from-success to-emerald-400 rounded-full"></div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg text-foreground mb-2">
                Engelsk
              </h4>
              <p className="text-muted-foreground">Godt nivå</p>
              <div className="w-full bg-secondary rounded-full h-2 mt-2">
                <div className="w-4/5 h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"></div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg text-foreground mb-2">
                Somali
              </h4>
              <p className="text-muted-foreground">Morsmål</p>
              <div className="w-full bg-secondary rounded-full h-2 mt-2">
                <div className="w-full h-full bg-gradient-to-r from-accent to-pink-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);
};

export default TechStack;
