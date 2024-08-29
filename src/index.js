import banner from '@/assets/heroSection/banner.jpg'
import me from '@/assets/heroSection/me.png'
import nexti from "@/assets/blog/nextjs1.webp";
import nodejs from "@/assets/blog/nodejs.webp";
import redux from "@/assets/blog/redux.webp";
export const images={
  me ,
  banner,
  nexti, nodejs,redux
}

export const navItems = [
    { href: "#", label: "HOME" },
    { href: "#about", label: "ABOUT ME" },
    { href: "#", label: "PROJECTS" },
    { href: "#skill", label: "SKILL" },
    { href: "#education", label: "EDUCATION" },
    { href: "#services", label: "SERVICES" },
    { href: "#", label: "BLOG" },
    { href: "#contract", label: "CONTACT" },
  ];

  export const services = [
    {
      title: 'WEB DESIGN',
      description: 'My web design service encompasses crafting visually appealing and user-friendly interfaces. My focus is on creating designs that reflect your brand identity and enhance user engagement.',
    },
    {
      title: 'WEB DEVELOPMENT',
      description: 'With my web development service, we bring your vision to life by building robust and scalable web applications. Using the latest technologies and best practices, I ensure high performance and functionality.',
    },
  ];

  export const projects = [
    {
      id: 1,
      image: '/path/to/image1.jpg',
      placeholder: '/path/to/placeholder1.jpg', 
      title: 'Project One',
      description: 'This is a brief description of Project One.',
      link: 'https://example.com/project-one',
    },
    {
      id: 2,
      image: '/path/to/image2.jpg',
      placeholder: '/path/to/placeholder2.jpg',
      title: 'Project Two',
      description: 'This is a brief description of Project Two.',
      link: 'https://example.com/project-two',
    },
    {
      id: 3,
      image: '/path/to/image3.jpg',
      placeholder: '/path/to/placeholder3.jpg',
      title: 'Project Three',
      description: 'This is a brief description of Project Three.',
      link: 'https://example.com/project-three',
    },
   
  ];
  
  export const skills = [
    { name: 'HTML', percent: 93 },
    { name: 'CSS', percent: 90 },
    { name: 'SCSS', percent: 85 },
    { name: 'JS', percent: 75 },
    { name: 'Tailwind CSS', percent: 90 },
    { name: 'Bootstrap', percent: 85 },
    { name: 'React JS', percent: 80 },
    { name: 'Node JS', percent: 40 },
    { name: 'Express JS', percent: 60 },
    { name: 'MongoDB', percent: 60 },
    { name: 'GitHub', percent: 80 },
    { name: 'Figma', percent: 70 },
    { name: 'Next.js', percent: 85 },
    { name: 'TypeScript', percent: 70 },
  ];

  export const testimonials = [
    {
      image: '/testimonial1.jpg',
      name: 'John Doe',
      title: 'Software Engineer',
      quote: 'This product has been a game-changer for my team.',
    },
    {
      image: '/testimonial1.jpg',
      name: 'John Doe',
      title: 'Software Engineer',
      quote: 'This product has been a game-changer for my team.',
    },
    {
      image: '/testimonial1.jpg',
      name: 'John Doe',
      title: 'Software Engineer',
      quote: 'This product has been a game-changer for my team.',
    },
  ];
 export const blogPosts = [
   {
     title: "The Importance of Redux in Web Development",
     content:
       "Redux is a predictable state container for JavaScript applications...",
     date: "2023-12-25",
     author: "Kawsar",
     image: redux,
   },
   {
     title: "Why Choose Next.js for Your Next Project",
     content:
       "Next.js is a full-stack React framework that simplifies the development...",
     date: "2024-01-10",
     author: " kawsar",
     image: nexti,
   },
   {
     title: "Why Node.js is the Right Choice for Your Backend",
     content:
       "Node.js is a JavaScript runtime environment that allows you to run JavaScript code...",
     date: "2024-02-05",
     author: "Michael Johnson",
     image: nodejs,
   },
   {
     title: "Why Node.js is the Right Choice for Your Backend",
     content:
       "Node.js is a JavaScript runtime environment that allows you to run JavaScript code...",
     date: "2024-02-05",
     author: "Michael Johnson",
     image: nodejs,
   },
 ];