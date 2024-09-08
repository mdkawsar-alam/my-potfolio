import AboutMe from "@/components/ui/HomeComponent/AboutMe/AboutMe";
import Blogs from "@/components/ui/blogComponents/BlogSecrion/BlogSection";
import ContactUs from "@/components/ui/HomeComponent/ContractUs/ContractUs";
import EducationSection from "@/components/ui/HomeComponent/EducationSection/EducationSection";
import HeroSection from "@/components/ui/HomeComponent/HeroSection/HeroSection";
import Projects from "@/components/ui/HomeComponent/ProjectSection/ProjectSection";
import Services from "@/components/ui/HomeComponent/ServiceSection/ServiceSection";
import SkillSection from "@/components/ui/HomeComponent/SkillSection/SkillSection";
import Testimonial from "@/components/ui/HomeComponent/TestimonialSection/TestimonialSection";
import WorkExperience from "@/components/ui/HomeComponent/WorkExperience/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <WorkExperience />
      <Projects />
      <SkillSection />
      <EducationSection />
    
      <Testimonial />
      <AboutMe />
      <ContactUs />
    </div>
  );
}
