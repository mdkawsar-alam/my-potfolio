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
  nexti, nodejs, redux,
 
}
export const navItems = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "About Me",
  },
  {
    id: 3,
    path: "/projects",
    name: "Projects",
  },
  {
    id: 4,
    path: "/skill",
    name: "Skill",
  },
  {
    id: 5,
    path: "/blog",
    name: "Blog",
  },
  {
    id: 6,
    path: "/contact",
    name: "Contact",
  },
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
    id: 1,
    category: "Programing",
    title: "Understanding Redux in Modern Web Apps",
    content: "Redux provides a predictable state management solution...",
    fullDescription: `
      Redux is essential for managing state in JavaScript applications, especially as they scale. By centralizing the application's state and logic, Redux ensures predictable behavior, making it easier to understand and debug. 
      
      - **Predictable State Management:** Redux maintains a single source of truth for the application's state, which makes the state predictable and consistent.
      - **Ease of Debugging:** With tools like Redux DevTools, you can track actions, state changes, and understand application flow easily, making debugging more straightforward.
      - **Time-Travel Debugging:** Redux allows you to go back in time to previous states, which is invaluable during the development and debugging process.
      - **Scalability:** As applications grow, managing state becomes increasingly complex. Redux's architecture handles complex state transitions efficiently, which is critical for large-scale applications.
    `,
    date: "2023-12-25",
    author: "Kawsar",
    image: redux,
  },
  {
    id: 2,
    category: "Programing",
    title: "Next.js: The Ultimate Framework for React Developers",
    content: "Next.js simplifies full-stack development with React...",
    fullDescription: `
      Next.js is a powerful framework built on top of React, designed to simplify the development process of modern web applications. It offers a range of features that are essential for building scalable and high-performance web applications.
      
      - **Server-Side Rendering (SSR):** Next.js supports SSR out of the box, which improves page load times and SEO, crucial for web applications that need to rank well in search engines.
      - **Static Site Generation (SSG):** With Next.js, you can generate static pages at build time, providing fast load times and reducing server load.
      - **API Routes:** Next.js enables you to create API endpoints directly within the application, which simplifies backend development and integration.
      - **Performance Optimization:** Next.js includes automatic optimizations such as code splitting, image optimization, and more, ensuring that applications are fast and responsive.
      - **Developer Experience:** Features like Hot Module Replacement (HMR) and an integrated development environment make Next.js a joy to work with for developers.
    `,
    date: "2024-01-10",
    author: "Kawsar",
    image: nexti,
  },
  {
    id: 3,
    category: "Programing",
    title: "Node.js: The Best Choice for Scalable Backends",
    content:
      "Node.js offers a powerful runtime for JavaScript on the server...",
    fullDescription: `
      Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, making it a powerful choice for building scalable, high-performance backend services. Its non-blocking, event-driven architecture allows for the efficient handling of multiple requests, which is ideal for I/O-heavy tasks.
      
      - **Event-Driven and Non-Blocking I/O:** Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. This architecture is perfect for real-time applications, such as chat applications, where multiple operations need to be handled concurrently.
      - **Scalability:** Node.js can handle a large number of simultaneous connections with high throughput, making it suitable for microservices architectures and applications that need to scale horizontally.
      - **Rich Ecosystem:** The npm (Node Package Manager) provides access to a vast library of open-source packages and modules, which accelerates development and reduces the need to reinvent the wheel.
      - **Single Language for Full Stack:** Using JavaScript on both the client and server sides reduces the impedance mismatch between the frontend and backend, leading to more efficient development processes.
      - **Community Support:** Node.js has a vibrant community and a large pool of resources, ensuring that developers can get help and support when needed.
    `,
    date: "2024-02-05",
    author: "Michael Johnson",
    image: nodejs,
  },
  {
    id: 4,
    category: "Programing",
    title: "Node.js: The Best Choice for Scalable Backends",
    content:
      "Node.js offers a powerful runtime for JavaScript on the server...",
    fullDescription: `
      Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, making it a powerful choice for building scalable, high-performance backend services. Its non-blocking, event-driven architecture allows for the efficient handling of multiple requests, which is ideal for I/O-heavy tasks.
      
      - **Event-Driven and Non-Blocking I/O:** Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. This architecture is perfect for real-time applications, such as chat applications, where multiple operations need to be handled concurrently.
      - **Scalability:** Node.js can handle a large number of simultaneous connections with high throughput, making it suitable for microservices architectures and applications that need to scale horizontally.
      - **Rich Ecosystem:** The npm (Node Package Manager) provides access to a vast library of open-source packages and modules, which accelerates development and reduces the need to reinvent the wheel.
      - **Single Language for Full Stack:** Using JavaScript on both the client and server sides reduces the impedance mismatch between the frontend and backend, leading to more efficient development processes.
      - **Community Support:** Node.js has a vibrant community and a large pool of resources, ensuring that developers can get help and support when needed.
    `,
    date: "2024-02-05",
    author: "Michael Johnson",
    image: nodejs,
  },
];
