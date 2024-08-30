import banner from '@/assets/heroSection/banner.jpg'
import me from '@/assets/heroSection/me.png';
import me2 from "@/assets/aboutme/me2.JPG";
import nexti from "@/assets/blog/nextjs1.webp";
import nodejs from "@/assets/blog/nodejs.webp";
import redux from "@/assets/blog/redux.webp";
import p1 from "@/assets/testmonial/p1.jpg";

export const images={
  me,
  me2,
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
      title: "FULL-STACK WEB DEVELOPMENT",
      description:
        "As a MERN stack web developer, I offer full-stack development services, building robust and scalable web applications. My expertise includes using MongoDB, Express.js, React, and Node.js to create high-performance and dynamic web solutions that meet your business needs.",
    },
    {
      title: "CUSTOM WEB APPLICATIONS",
      description:
        "I specialize in creating custom web applications tailored to your specific requirements. From front-end interfaces to back-end APIs, I ensure seamless integration and a smooth user experience. My focus is on delivering secure, efficient, and maintainable applications.",
    },
    {
      title: "RESPONSIVE WEB DESIGN",
      description:
        "My responsive web design service ensures that your website looks great and functions well on all devices, from desktops to smartphones. I prioritize user-friendly design and intuitive navigation to enhance user engagement and satisfaction.",
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
      image: p1,
      name: 'John Doe',
      title: 'Software Engineer',
      quote: 'This product has been a game-changer for my team.',
    },
    {
      image: p1,
      name: 'John Doe',
      title: 'Software Engineer',
      quote: 'This product has been a game-changer for my team.',
    },
    {
      image: p1,
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