import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    title: "Blinkit Website",
    description:
      "This is a Blinkit clone website created using HTML, CSS, JavaScript, and Tailwind CSS. Fully responsive frontend design with clean UI and modern layout without external libraries.",
    image:
      "https://dianapps.com/blog/wp-content/uploads/2023/08/Blinkit.png",
    github: "https://github.com/Pradeep8118/Qlith--Blikint-Clone",
    live: "https://qlith-blikint-clone.vercel.app/",
  },
  {
    title: "Music Player",
    description:
      "A simple music player using HTML, CSS, and JavaScript with play, pause, next, previous controls. Fully responsive UI focusing on smooth interaction.",
    image:
      "https://store-images.s-microsoft.com/image/apps.24713.13872582921283205.5b5a11a2-a32a-4bf1-b945-349d7e6e3c1b.35930040-480e-4384-be6f-415dc62ab2bc",
    github: "https://github.com/your-username/music-player",
    live: "https://your-music-player-live-link.com",
  },
  {
    title: "Age Calculator",
    description:
      "This is an Age Calculator developed in C. It calculates accurate age in years, months, and days with clean console interaction and structured code.",
    image:
      "https://calculator-online.net/img/og-img/age-calculator.png",
    github: "https://github.com/your-username/age-calculator",
    live: "#", // No live preview for C console app, can use GitHub readme/demo gif
  },
];

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-8 md:p-16 text-white bg-black bg-opacity-30 rounded-2xl shadow-2xl mx-0 md:mx-20 mt-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center border-b-4 border-purple-500 pb-4">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-[#171d32] rounded-2xl p-6 w-full md:w-[340px] hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-48 object-contain mb-4 bg-white p-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex items-center gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition"
                title="GitHub"
              >
                <FaGithub size={24} />
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition"
                  title="Live Preview"
                >
                  <FaExternalLinkAlt size={22} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
