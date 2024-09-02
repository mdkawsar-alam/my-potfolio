import Container from "@/components/sheard/Contatiner/Container";
import { images } from "@/index";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="bg-[#09101a] py-10">
      <Container>
        <div className="flex flex-col items-center px-4 md:p-10">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white text-center">
            About Me
          </h2>
          <p className="p-4 text-center text-gray-300">
            "I am a passionate Front End Developer specializing in the MERN
            stack. Currently, I'm pursuing a Diploma in Computer Science to
            enhance my technical expertise. Over the past year, I have immersed
            myself in web development, building robust and user-friendly
            applications. My objective is to achieve a senior role in Frontend
            Development within the next two years, continuously learning and
            adapting to new technologies to stay ahead in the ever-evolving
            field of web development."
          </p>

          <div className="flex flex-col lg:flex-row items-center text-gray-100 mt-6">
            <Image
              src={images.me2}
              alt="Md Kawsar Alam"
              width={250}
              height={250}
              className=" my-6"
            />
            <div className="lg:ml-5 text-center lg:text-left">
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-white mb-4">
                Frontend Web Developer (MERN Stack)
              </h3>
              <p>
                I have a strong foundation in React, Express JS, Node.js, and
                MongoDB. My skill set also includes JavaScript, HTML, CSS,
                Tailwind CSS, Bootstrap, Git, and other essential tools for
                modern web development. I am committed to creating efficient,
                responsive, and visually appealing applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 text-gray-300">
                <p>
                  <strong>Email</strong>:{" "}
                  <a
                    href="mailto:mdkawsaralam537@gmail.com"
                    className="text-blue-400"
                  >
                    mdkawsaralam537@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Phone</strong>:{" "}
                  <a href="tel:+8801557132665" className="text-blue-400">
                    +8801557132665
                  </a>
                </p>
                <p>
                  <strong>GitHub</strong>:{" "}
                  <a
                    href="https://www.github.com/mdkawsar-alam"
                    className="text-blue-400"
                  >
                    github.com/mdkawsar-alam
                  </a>
                </p>
                <p>
                  <strong>LinkedIn</strong>:{" "}
                  <a
                    href="https://www.linkedin.com/in/md-kawsar-alam997"
                    className="text-blue-400"
                  >
                    linkedin.com/in/md-kawsar-alam997
                  </a>
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-300 mt-5">
            "Adaptable and driven, I thrive in environments that challenge me to
            grow. My goal is to leverage my skills to contribute to innovative
            projects and continuously evolve as a developer."
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
