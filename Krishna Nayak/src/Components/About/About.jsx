import React from "react";
import AboutImg from "../../assets/aboutimg.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row items-center md:justify-center bg-black shadow-2xl mx-0 md:mx-20 bg-opacity-30 rounded-2xl p-8 md:p-12 gap-10 mt-10"
    >
      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          className="w-60 md:w-80 lg:w-[400px] rounded-xl border-4 border-purple-500 hover:scale-105 transition-transform duration-300"
          src={AboutImg}
          alt="About Krishna"
        />
      </div>

      {/* About Text Section */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold border-b-4 border-purple-500 inline-block pb-2">
          About Me
        </h2>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-[500px]">
          <IoArrowForward size={24} className="inline-block text-purple-400 mr-2" />
          Hello, I am a <span className="font-bold text-purple-400">MERN Stack Developer</span> passionate about building complete web applications using
          <span className="font-semibold text-white"> MongoDB, Express.js, React.js, and Node.js</span>. 
          I love crafting fully functional websites with seamless user interfaces, powerful backend services, and secure database connections. My focus is on clean code, responsive design, and delivering real-world solutions.
        </p>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-[500px]">
          <IoArrowForward size={24} className="inline-block text-purple-400 mr-2" />
          I enjoy working on full-stack projects where I can handle everything from building dynamic UIs to developing REST APIs and integrating databases, delivering end-to-end application solutions.
        </p>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-[500px]">
          <IoArrowForward size={24} className="inline-block text-purple-400 mr-2" />
          Always eager to learn new technologies and improve my skills, I am committed to writing efficient, scalable, and maintainable code to solve real business problems.
        </p>
      </div>
    </div>
  );
};

export default About;
