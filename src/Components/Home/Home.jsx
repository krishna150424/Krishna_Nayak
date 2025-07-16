import React from "react";
import avatarImg from "../../assets/krishna.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12 text-white bg-black bg-opacity-30 rounded-xl shadow-lg mt-16 mx-4 md:mx-20 max-w-6xl mx-auto">
      
      {/* Left Section */}
      <div className="md:w-1/2 space-y-5 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
          <TextChange />
        </h1>
        <p className="text-sm md:text-lg leading-relaxed">
          I am a MERN stack developer specializing in modern web applications.
        </p>

        <div className="flex justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1vZxeuvJGH8hlvPeowVYBf_iyDoW6b6hV/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 transition duration-300 font-semibold px-5 py-2 rounded-3xl text-sm md:text-base"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0">
        <img
          src={avatarImg}
          alt="Profile"
          className="w-40 md:w-64 rounded-full border-4 border-purple-500 shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Home;
