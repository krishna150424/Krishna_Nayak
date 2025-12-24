import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [activeSection, setActiveSection] = useState("About");

  // Smooth scroll active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["About", "Experience", "Projects", "Footer"];
      const scrollPos = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section?.offsetTop <= scrollPos && section?.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll CSS
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] bg-opacity-90 backdrop-blur-md shadow-md flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      {/* Logo */}
      <span className="text-2xl font-bold tracking-wide">Krishna Nayak</span>

      {/* Menu Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-0 px-2 rounded-xl md:rounded-none bg-black bg-opacity-30 md:bg-transparent md:static md:flex gap-6 text-center md:mx-0`}
      >
        {["About", "Experience", "Projects", "Footer"].map((section) => (
          <a href={`#${section}`} key={section}>
            <li
              className={`text-md cursor-pointer transition-all duration-300 p-1 md:p-0 ${
                activeSection === section ? "text-purple-400 font-bold" : ""
              }`}
              onClick={() => {
                openMenu(false);
                setShowMenu(true);
              }}
            >
              {section}
            </li>
          </a>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
