"use client";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin, CiFacebook, CiSaveDown1 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const socialMedia = [
  { _id: 1, href: "https://github.com/", icon: <IoLogoGithub /> },
  { _id: 2, href: "https://www.linkedin.com/", icon: <CiLinkedin /> },
  { _id: 3, href: "#", icon: <FaWhatsapp /> },
  { _id: 4, href: "https://x.com/", icon: <LuTwitter /> },
  { _id: 5, href: "https://www.facebook.com/", icon: <CiFacebook /> },
];

const skill = [
  { _id: 1, year: 4, title1: "Programming", title2: "Language" },
  { _id: 2, year: 6, title1: "Development", title2: "Tools" },
  { _id: 3, year: 1, title1: "Years of", title2: "Experience" },
];

const iconVariants = {
  hover: { scale: 1.2, color: "#12F7D6", transition: { duration: 0.3 } },
};
const Me = [
        'Front-end Developer',
        'Mobile App Developer',
    ]
const Hero = () => {
  return (
    <section className="relative z-10 container flex flex-row justify-between items-center gap-8 md:gap-12 lg:gap-16 pb-16 md:pb-20 lg:pb-28 pt-16 sm:pt-32 md:pt-40 lg:pt-44">
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center gap-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-row lg:flex-col gap-6 border border-white/20 p-3 lg:p-4 rounded-3xl backdrop-blur-md shadow-inner shadow-white/5">
          {socialMedia.map((item) => (
            <motion.div
              key={item._id}
              variants={iconVariants}
              whileHover="hover"
              className="text-white text-xl md:text-2xl w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 flex justify-center items-center hover:text-[#12F7D6] transition-colors duration-300 cursor-pointer"
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex justify-center items-center"
              >
                {item.icon}
              </Link>
            </motion.div>
          ))}
        </div>
        <div>
          <motion.h3
            className="text-xl lg:text-2xl font-medium text-[#28a745] font-mono mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, my name is
          </motion.h3>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#ccd6f6] font-poppins mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Md. Nijam Hossen
          </motion.h1>
          <motion.p
            className="text-xl xl:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#28A745] via-[#12F7D6] to-[#28A745] bg-clip-text text-transparent mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Typewriter words={Me} loop={true} cursor={true} />
          </motion.p>
          <motion.p
            className="text-sm xl:text-base font-medium text-[#9fa6b9] mt-6 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            The passion for coding, commitment to the deadline, life for humanity...
          </motion.p>

          <motion.a
            href="/"
            download
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px #28A745",
            }}
            className="flex items-center gap-2 mt-6 px-4 lg:px-6 py-2 md:py-3 w-fit border border-[#28A745] text-[#28A745] font-medium !rounded-xl hover:bg-[#28A745]/10 transition-all duration-300"
          >
            <span>Download Resume</span>
            <CiSaveDown1 className="text-lg" />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="bg-[#1A1E23]/80 hidden sm:block backdrop-blur-md rounded-[60px] p-10 shadow-inner border border-white/10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col gap-10">
          {skill.map((item) => (
            <motion.div
              key={item._id}
              className="flex items-center gap-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span className="text-5xl text-[#12F7D6] font-semibold select-text">
                {item.year}
              </span>
              <span className="text-white text-base font-light leading-snug select-text">
                {item.title1}
                <br />
                {item.title2}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
