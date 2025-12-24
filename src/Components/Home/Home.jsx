import React from "react";
import avatarImg from "../../assets/krishna.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div
      id="Home"
      className="bg-[#0f172a] text-white rounded-2xl shadow-2xl mx-4 md:mx-20 p-8 md:p-12 mt-10"
    >
      {/* Left-Aligned Heading */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          <TextChange />
        </h1>
        {/* Underline removed */}
      </div>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-5 text-left">
          <p className="text-sm md:text-lg leading-relaxed text-gray-300">
            I am a <span className="text-purple-400 font-semibold">MERN stack developer</span> specializing in modern web applications. I enjoy building responsive frontends, efficient backends, and seamless user experiences.
          </p>

          <div className="flex justify-start">
            <a
              href="https://drive.google.com/file/d/19JX2O3XEJ44amayW-kZk3sSfD2Cx9pNx/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 transition duration-300 font-semibold px-5 py-2 rounded-3xl text-sm md:text-base"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end md:w-1/3">
          <img
            src={avatarImg}
            alt="Profile"
            className="w-40 md:w-64 rounded-full border-4 border-purple-500 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
