"use client";
import Container from "@/components/sheard/Contatiner/Container";
import { projects } from "@/index"; // Make sure this path is correct.
import Image from "next/image";

const Projects = () => {
  return (
    <section className="bg-[#09101A] " id="projects">
      <Container>
        <div className=" px-4 ">
        <h2 className=" font-semibold text-2xl font-serif lg:text-3xl text-white pb-8">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1A1A1A] border border-[#0ef] rounded-md cursor-pointer"
              onClick={() => window.open(project.link, "_blank")}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-t-md"
                placeholder="blur"
                blurDataURL={project.placeholder}
              />
              <div className="p-5">
                <h3 className="text-white font-bold">{project.title}</h3>
                <p className="text-gray-300 font-serif">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
