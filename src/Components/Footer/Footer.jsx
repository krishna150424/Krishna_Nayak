import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (already required on inputs)
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // For demo: alert the message
    alert(
      `Thank you, ${formData.name}! Your message has been received:\n\n${formData.message}`
    );

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      id="Contact"
      className="w-full bg-[#0f172a] text-white px-6 md:px-20 py-16 min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 border-b-4 border-purple-500 pb-4">
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto">
        {/* Left side: info + social */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold text-purple-400">
            Let’s Connect!
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I’m currently open to opportunities and collaborations. If you have
            any questions or just want to say hi, feel free to drop a message!
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="mailto:krishnanayak6311@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 p-3 rounded-full hover:bg-purple-600 transition duration-300"
              aria-label="Email"
            >
              <MdOutlineEmail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-nayak-05237b369"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 p-3 rounded-full hover:bg-purple-600 transition duration-300"
              aria-label="LinkedIn"
            >
              <CiLinkedin size={24} />
            </a>
            <a
              href="https://github.com/krishna150424"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 p-3 rounded-full hover:bg-purple-600 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Right side: form */}
        <form
          className="flex-1 space-y-4"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-900 rounded-lg text-white placeholder-gray-400 focus:outline-purple-500 focus:ring-2 focus:ring-purple-600 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-900 rounded-lg text-white placeholder-gray-400 focus:outline-purple-500 focus:ring-2 focus:ring-purple-600 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-zinc-900 rounded-lg text-white placeholder-gray-400 focus:outline-purple-500 focus:ring-2 focus:ring-purple-600 transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
