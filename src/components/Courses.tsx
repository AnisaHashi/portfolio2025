import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Award } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "React - The Complete Guide (Next.js, Redux)",
      provider: "Online Kurs",
      year: "2023",
      topics: [
        "Bygging av moderne og skalerbare React-applikasjoner med NextJS, React og Redux",
        "Tilstandshåndtering med hooks, ytelsesoptimalisering og produksjonssetting",
      ],
    },
    {
      title: "Android Jetpack",
      provider: "Online Kurs",
      year: "2023",
      topics: [
        "LiveData, ViewModel, Room, WorkManager, Navigation",
        "Fokus på vedlikeholdbare apper og effektiv bakgrunnsoppgavehåndtering",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kurs
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="shadow-medium border-0 gradient-card hover:shadow-glow transition-smooth h-full"
            >
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <Award className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                      {course.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <p className="text-muted-foreground mb-2 sm:mb-0">
                        {course.provider}
                      </p>
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        {course.year}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Hovedtemaer:
                  </h4>
                  <ul className="space-y-3">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-foreground/80 text-sm leading-relaxed">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;