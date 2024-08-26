import EducationSection from "@/components/ui/HomeComponent/EducationSection/EducationSection";
import HeroSection from "@/components/ui/HomeComponent/HeroSection/HeroSection";
import Projects from "@/components/ui/HomeComponent/ProjectSection/ProjectSection";
import Services from "@/components/ui/HomeComponent/ServiceSection/ServiceSection";
import SkillSection from "@/components/ui/HomeComponent/SkillSection/SkillSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Projects/>
      <Services/>
      <EducationSection/>
      <SkillSection/>
    </div>
  );
}
