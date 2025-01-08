import { FaInstagram, FaMedium, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const LeetCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    className="w-8 h-8 fill-current hover:text-green-400 transition duration-300"
  >
    <path d="M25 0c13.81 0 25 11.19 25 25S38.81 50 25 50 0 38.81 0 25 11.19 0 25 0zm0 2C12.42 2 2 12.42 2 25s10.42 23 23 23 23-10.42 23-23S37.58 2 25 2zm.5 9a2.5 2.5 0 012.5 2.5v5.25a2.5 2.5 0 11-5 0v-5.25A2.5 2.5 0 0125.5 11zm1 14h-3v15h3V25zm4.875-1.938l-5.375 2.719 1.031 2.031 5.375-2.719-1.031-2.031zm-9.75 0l-1.031 2.031 5.375 2.719 1.031-2.031-5.375-2.719z" />
  </svg>
);


const Hero = () => {
  return (
    <div className="relative h-screen w-full">
    {/* Background Image */}
    <img
      src="/home.jpg"
      alt="Background"
      className="absolute h-full w-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute h-full w-full bg-black bg-opacity-50"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-start justify-center h-full p-10 text-white">
      <div
        className="animate-slideIn transform transition duration-1000 ease-out space-y-4"
      >
        {/* Hi */}
        <h1 className="text-4xl font-bold">
          <span className="text-green-400">H</span>i, I&apos;m
        </h1>

        {/* Name */}
        <h2 className="text-5xl font-bold">Sourabh</h2>

        {/* Description */}
        <p className="text-lg max-w-lg leading-7">
          Expertise includes developing user-friendly interfaces and managing
          robust server-side infrastructure for seamless performance.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 pt-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/sourabh_jangid01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-400 transition duration-300"
          >
            <FaInstagram />
          </a>

          {/* Medium */}
          <a
            href="https://medium.com/sourabh_jangid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-400 transition duration-300"
          >
            <FaMedium />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/https://www.linkedin.com/in/sourabh-jangid001/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sourabh-11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-400 transition duration-300"
          >
            <FaGithub />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/sourabhjangid2002/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LeetCodeIcon />
          </a>

          {/* Email */}
          <a
            href="mailto:sourabhjangid2002@gmail.com"
            className="text-3xl hover:text-green-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero