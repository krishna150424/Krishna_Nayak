import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-8 md:p-16 text-white bg-black bg-opacity-30 rounded-2xl shadow-2xl mx-0 md:mx-20 mt-20">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center border-b-4 border-purple-500 pb-4">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {/* Blinkit Project */}
        <div className="bg-[#171d32] rounded-2xl p-6 w-full md:w-[340px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <img
            src="https://inc42.com/buzz/blinkit-to-start-uc-modelled-handyman-service-biz-in-few-weeks/"
            alt="Blinkit Clone"
            className="rounded-xl w-full h-48 object-contain mb-4 bg-white p-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Blinkit Website</h2>
          <p className="text-sm text-gray-300 mb-4">
            This is a Blinkit clone website created using HTML, CSS,
            JavaScript, and Tailwind CSS. Fully responsive frontend design with
            clean UI and modern layout without external libraries.
          </p>
        </div>

        {/* Music Player */}
        <div className="bg-[#171d32] rounded-2xl p-6 w-full md:w-[340px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <img
            src="https://store-images.s-microsoft.com/image/apps.24713.13872582921283205.5b5a11a2-a32a-4bf1-b945-349d7e6e3c1b.35930040-480e-4384-be6f-415dc62ab2bc"
            alt="Music Player"
            className="rounded-xl w-full h-48 object-contain mb-4 bg-white p-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Music Player</h2>
          <p className="text-sm text-gray-300 mb-4">
            A simple music player using HTML, CSS, and JavaScript with play,
            pause, next, previous controls. Fully responsive UI focusing on
            smooth interaction.
          </p>
        </div>

        {/* Age Calculator */}
        <div className="bg-[#171d32]  rounded-2xl p-6 w-full md:w-[340px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <img
            src="https://pixabay.com/photos/calculator-hand-calculate-to-count-428294/"
            alt="Age Calculator"
            className="rounded-xl w-full h-48 object-contain mb-4 bg-white p-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Age Calculator</h2>
          <p className="text-sm text-gray-300 mb-4">
            This is an Age Calculator developed in C. It calculates accurate
            age in years, months, and days with clean console interaction and
            structured code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
