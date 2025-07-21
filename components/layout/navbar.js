"use client";
import { RiMenu4Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Dropdown } from "antd";

const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact" },
  
];

const items = [
  {
    key: "1",
    label: (
      <a
        rel="noopener noreferrer"
        href="#"
      >
        Home
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        rel="noopener noreferrer"
        href="#projects"
      >
        Project
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        rel="noopener noreferrer"
        href="#toolkit"
      >
        Toolkit
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        rel="noopener noreferrer"
        href="#blog"
      >
        Blog
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        rel="noopener noreferrer"
        href="#about"
      >
        About Me
      </a>
    ),
  },
];
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className=" relative ">
      <motion.nav
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sm:fixed w-full top-0 left-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? "sm:bg-[#0F172A]/80 shadow-xl" : "sm:bg-transparent"
          }`}
      >
        <div className="container py-4 sm:py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="Md. Nijam Hossen"
                width={900}
                height={900}
                className="rounded-full shadow-lg w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12"
              />
              <span className="text-white text-base sm:text-lg lg:text-xl font-bold tracking-wide bg-gradient-to-r from-[#12F7D6] via-[#A66CFF] to-[#F8C3FF] bg-clip-text text-transparent">
                Md. Nijam Hossen
              </span>
            </motion.div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-1 md:gap-8 text-sm font-semibold text-[#b8b9bb]">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative group hidden md:block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white hover:text-[#A66CFF] transition-colors duration-300 ">
                  {item.label}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#A66CFF] to-[#F8C3FF] group-hover:w-full transition-all duration-500"></span>
              </motion.a>
            ))}
            {/* Dropdown menu */}
            <Dropdown
              menu={{ items }}
              placement="bottom"
              className="md:hidden transition ease-out duration-300"
            >
              <RiMenu4Fill className="text-xl sm:text-2xl text-white hover:text-blue-600 transition-transform duration-300 transform hover:rotate-180" />
            </Dropdown>
            {/* Modern Neon Resume Button */}
            <motion.a
              href="https://docs.google.com/document/d/10ZA-Pxt3XH9-L6rc89oE1SSQfrhuH4o1L025loQcibk/edit?tab=t.0"
              target="blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="relative flex items-center gap-2 px-6 py-1.5 md:py-2 rounded-full text-white font-semibold bg-[#0f1115]/60 backdrop-blur-sm border border-[#265496] hover:border-0 shadow-md transition duration-300 overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-[#A66CFF] opacity-0 group-hover:opacity-70 transition-opacity duration-500"></span>
                <span className="relative z-10 text-xs sm:text-sm lg:text-base font-normal md:font-medium">
                  Resume
                </span>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#A66CFF]"></span>
              </button>
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;
