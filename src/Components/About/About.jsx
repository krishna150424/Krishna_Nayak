import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="bg-[#0f172a] text-white rounded-2xl shadow-2xl mx-4 md:mx-20 p-8 md:p-12 mt-10"
    >
      {/* Centered Heading with Full-Width Underline */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold ">About Me</h2>
        <div className="mt-2 h-1 w-full bg-purple-500 rounded-full"></div>
      </div>

      {/* About Paragraphs */}
      <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
        {/* Paragraph 1 */}
        <div className="flex items-start gap-2">
          <IoArrowForward className="text-purple-400 mt-1 min-w-[20px]" size={18} />
          <p>
            Hello, I am a{" "}
            <span className="text-purple-400 font-semibold">MERN Stack Developer</span>{" "}
            passionate about building complete web applications using{" "}
            <span className="font-semibold text-white">MongoDB</span>,{" "}
            <span className="font-semibold text-white">Express.js</span>,{" "}
            <span className="font-semibold text-white">React.js</span>, and{" "}
            <span className="font-semibold text-white">Node.js</span>. I love crafting
            seamless UIs, powerful backends, and secure database integrations.
          </p>
        </div>

        {/* Paragraph 2 */}
        <div className="flex items-start gap-2">
          <IoArrowForward className="text-purple-400 mt-1 min-w-[20px]" size={18} />
          <p>
            I enjoy working on full-stack projects—from developing dynamic user
            interfaces to designing REST APIs and managing databases—delivering
            end-to-end solutions.
          </p>
        </div>

        {/* Paragraph 3 */}
        <div className="flex items-start gap-2">
          <IoArrowForward className="text-purple-400 mt-1 min-w-[20px]" size={18} />
          <p>
            Always eager to learn new technologies and improve my skills, I aim to write
            clean, scalable, and maintainable code to solve real business problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
