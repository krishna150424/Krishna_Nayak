import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="p-8 md:p-16 mt-20 text-white bg-black bg-opacity-30 rounded-2xl shadow-2xl mx-0 md:mx-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center border-b-4 border-purple-500 pb-4">
        Experience & Skills
      </h1>

      {/* Skills Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {[
          { icon: <FaHtml5 color="#E34F26" size={50} /> },
          { icon: <FaCss3 color="#1572B6" size={50} /> },
          { icon: <FaJs color="#F7DF1E" size={50} /> },
          { icon: <SiTailwindcss color="#06B6D4" size={50} /> },
          { icon: <FaReact color="#61DAFB" size={50} /> },
          { icon: <SiMongodb color="#47A248" size={50} /> },
          { icon: <SiExpress color="#FFFFFF" size={50} /> },
          { icon: <SiNodedotjs color="#339933" size={50} /> },
          { icon: <SiFigma color="#F24E1E" size={50} /> },
          { icon: <FaGithub color="#FFFFFF" size={50} /> },
          { icon: <SiPostman color="#FF6C37" size={50} /> },
        ].map((skill, index) => (
          <div
            key={index}
            className="p-5 bg-zinc-950 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            {skill.icon}
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-950 bg-opacity-45 rounded-xl p-6 mb-12">
        <div className="p-6 bg-zinc-900 rounded-2xl flex items-center justify-center">
          <PiStudentFill color="#8b5cf6" size={80} />
        </div>

        <div className="text-white space-y-3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-400">
            MERN Stack Intern
          </h2>
          <h3 className="text-lg md:text-xl font-medium">
            Qlith Innovation Pvt Ltd, Bhubaneswar
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            May 2024 - July 2024 (2 Months Internship)
          </p>
          <ul className="text-sm md:text-base text-gray-300 space-y-1 mt-2 list-disc list-inside">
            <li>Worked on full-stack MERN projects</li>
            <li>Developed APIs using Node.js & Express</li>
            <li>Created responsive front-end with React & Tailwind CSS</li>
            <li>Handled MongoDB database integrations</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-slate-950 bg-opacity-45 rounded-xl p-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center border-b-4 border-purple-500 pb-4">
          Education
        </h2>

        {/* MCA */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="p-5 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <PiStudentFill color="#8b5cf6" size={60} />
          </div>
          <div className="text-white space-y-2 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-medium">
              Master of Computer Application(MCA)
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              GIFT Autonomous,Bhubaneswar,Odisha
            </p>
            <p className="text-sm md:text-base text-gray-400">
              2024 - Present
            </p>
          </div>
        </div>

        {/* B.Sc. */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="p-5 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <PiStudentFill color="#8b5cf6" size={60} />
          </div>
          <div className="text-white space-y-2 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-medium">
              Bachelor of Science (B.Sc.)
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              Dr. H.K Mahatab Degree College,Balasore,Odisha
            </p>
            <p className="text-sm md:text-base text-gray-400">
              2021 - 2024 | <span className="text-purple-400 font-medium">72%</span>
            </p>
          </div>
        </div>

        {/* 12th */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="p-5 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <PiStudentFill color="#8b5cf6" size={60} />
          </div>
          <div className="text-white space-y-2 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-medium">12th Standard</h3>
            <p className="text-sm md:text-base text-gray-300">
              Saheed Higher Secondary School, Bhadrak, Odisha
            </p>
            <p className="text-sm md:text-base text-gray-400">
              2019 - 2021 | <span className="text-purple-400 font-medium">63%</span>
            </p>
          </div>
        </div>

        {/* 10th */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="p-5 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <PiStudentFill color="#8b5cf6" size={60} />
          </div>
          <div className="text-white space-y-2 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-medium">10th Standard</h3>
            <p className="text-sm md:text-base text-gray-300">
              S.N High School, Soro, Balasore, Odisha
            </p>
            <p className="text-sm md:text-base text-gray-400">
              2018 - 2019 | <span className="text-purple-400 font-medium">62%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Experience;
