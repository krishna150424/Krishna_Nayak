import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 bg-[#171d32] text-white py-10 md:py-12 items-center"
    >
      {/* Contact Title */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact</h1>
        <h3 className="text-sm md:text-xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-4 md:mt-0">
        <a
          href="mailto:krishnanayak6311@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-800 p-3 rounded-full hover:bg-purple-600 transition duration-300"
        >
          <MdOutlineEmail size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/krishna-nayak-05237b369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-800 p-3 rounded-full hover:bg-purple-600 transition duration-300"
        >
          <CiLinkedin size={25} />
        </a>
        <a
          href="https://github.com/krishna150424"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-800 p-3 rounded-full hover:bg-purple-600 transition duration-300"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
