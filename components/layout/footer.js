"use client";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-gray-300 px-4">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* About / Branding */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Md. Nijam Hossen</h2>
          <p className="text-sm">
            Passionate full-stack developer crafting modern web & mobile experiences with performance and aesthetics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#projects" className="hover:text-green-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-green-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-green-400 transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Connect With Me</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-xl hover:text-white"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-xl hover:text-white"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-xl hover:text-white"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-xl hover:text-white"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Nijam Hossen. All rights reserved.
      </div>
    </footer>
  );
}
