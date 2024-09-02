import React from "react";
import { FaBriefcase } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <section className="bg-[#09101A] py-12 px-6 md:px-14">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Work Experience
        </h2>
        <div className="bg-[#1B2A40] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center">
          <FaBriefcase className="text-[#0ef] mr-3 text-2xl md:text-3xl" />
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Edulife Agency
            </h3>
            <p className="text-gray-300 font-serif">
              <span className="font-bold">Position:</span> Front-End Web
              Developer
            </p>
            <p className="text-gray-300 font-serif">
              <span className="font-bold">Duration:</span> 1 Year
            </p>
            <p className="text-gray-300 mt-4 font-serif">
              At Edulife Agency, I contributed to building and maintaining web
              applications as a Front-End Web Developer. I collaborated with a
              team of developers to deliver high-quality, user-friendly
              websites. My role involved implementing responsive designs,
              optimizing web performance, and ensuring cross-browser
              compatibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
