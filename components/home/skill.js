"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiDart,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "Express.js", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-3xl" /> },
  { name: "Flutter", icon: <SiFlutter className="text-sky-400 text-3xl" /> },
  { name: "Dart", icon: <SiDart className="text-blue-500 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-3xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400 text-3xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-3xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-3xl" /> },
];

export default function Skill() {
  return (
    <section id="skills" className="py-16 px-4 bg-[#0f172a] text-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-4 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Technologies I work with to build modern and scalable web and mobile applications.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, idx) => (
           <button key={idx} className="relative inline-flex h-fit overflow-hidden rounded-xl p-[1px] mt-6">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl">
          <div
            className="w-full flex flex-col items-center justify-center bg-[#1e293b] py-6 rounded-xl"
          >
            {skill.icon}
            <span className="mt-2 text-sm">{skill.name}</span>
          </div></span></button>
        ))}
      </motion.div>
    </section>
  );
}
