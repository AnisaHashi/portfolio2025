import ModernHero from "@/components/ModernHero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Courses from "@/components/Courses";
import ModernContact from "@/components/ModernContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ModernHero />
      <About />
      <Projects />
      <TechStack />
      <Education />
      <Experience />
      <Courses />
      <ModernContact />
    </div>
  );
};

export default Index;
