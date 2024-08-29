import AboutMe from "@/components/ui/HomeComponent/AboutMe/AboutMe";
import Blogs from "@/components/ui/HomeComponent/BlogSecrion/BlogSection";
import ContactUs from "@/components/ui/HomeComponent/ContractUs/ContractUs";
import EducationSection from "@/components/ui/HomeComponent/EducationSection/EducationSection";
import HeroSection from "@/components/ui/HomeComponent/HeroSection/HeroSection";
import Projects from "@/components/ui/HomeComponent/ProjectSection/ProjectSection";
import Services from "@/components/ui/HomeComponent/ServiceSection/ServiceSection";
import SkillSection from "@/components/ui/HomeComponent/SkillSection/SkillSection";
import Testimonial from "@/components/ui/HomeComponent/TestimonialSection/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Projects/>
      <Services/>
      <EducationSection/>
      <SkillSection/>
      <Blogs/>
      <Testimonial/>
      
      <AboutMe/>
      <ContactUs/>
    </div>
  );
}
