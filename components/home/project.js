"use client";
import React from "react";
import { FaReact, FaNodeJs, FaServer } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";

// Icon Mapping
const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  Next: <SiNextdotjs className="text-white" />,
  Express: <SiExpress className="text-gray-400" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Node: <FaNodeJs className="text-green-500" />,
  Tailwind: <SiTailwindcss className="text-blue-400" />,
  Flutter: <SiFlutter className="text-sky-400" />,
  Dart: <SiDart className="text-blue-500" />,
  API: <FaServer className="text-purple-400" />,
  MySQL: <SiMysql className="text-yellow-400" />,
};

// Project List
const projects = [
  {
    title: "TaskStick",
    description:
      "Complete task filing management system for handling tasks, documents, and client communication.",
    tech: ["React", "Next", "Express", "MongoDB", "Node", "Tailwind"],
  },
  {
    title: "PathXFinder",
    description:
      "E-learning platform with workshop scheduling, registration, and course management.",
    tech: ["React", "Express", "MongoDB", "Node", "Tailwind"],
  },
  {
    title: "EduTrack",
    description:
      "Mobile-first app for students and parents to track academic progress, attendance, and homework. Available on Android and iOS.",
    tech: ["Flutter", "Dart", "Node", "MongoDB"],
  },
  {
    title: "ShopTap",
    description:
      "E-commerce mobile app with product browsing, payment gateway, and push notifications. Built with Flutter for both Android and iOS.",
    tech: ["Flutter", "Dart", "API", "MySQL", "Express"],
  },
];

// Card Component
function ProjectCard({ title, description, tech }) {
  return (
    <div
      className="w-full rounded-2xl border-2 border-transparent animate-border"
      style={{
        background:
          "linear-gradient(45deg,#172033,rgba(30,41,59,1) 50%,#172033) padding-box, conic-gradient(from var(--border-angle), rgba(71,85,105,0.48) 80%, #6366f1 86%, #a5b4fc 90%, #6366f1 94%, rgba(71,85,105,0.48)) border-box",
      }}
    >
      <motion.div
        className="bg-[#1a1a2e] h-full rounded-2xl p-5 shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="col-span-1">
            <Image
              src="/rifat.png"
              width={1000}
              height={1000}
              className="h-full w-full rounded-md object-cover"
              alt={title}
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-pink-500 mb-2">{title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-3">
              {tech.map((t) => (
                <motion.div
                  key={t}
                  className="flex items-center gap-1 bg-[#222] text-sm text-white px-2 py-1 rounded-full shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 12 }}
                >
                  {techIcons[t] || <span className="text-gray-400">⚙️</span>}
                  <span>{t}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-4">
              <p className="text-sm text-gray-400">Create Date: 10-12-2024</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-base bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:opacity-90 transition whitespace-pre shadow-md"
              >
                Preview Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div></div>
  );
}

// Main Projects Component
export default function Projects() {
  return (
    <div id='projects' className="min-h-screen px-4 py-28 text-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-4 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Check out some of the projects I’ve worked on — blending modern tech stacks with smooth UX and eye-catching design.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 container"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
              ease: "easeInOut",
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </div>
  );
}
