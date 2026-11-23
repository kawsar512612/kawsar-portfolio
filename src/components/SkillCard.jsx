
import { motion } from "framer-motion";

import {
  FiCode,
  FiDatabase,
  FiCpu,
  FiMessageSquare,
  FiTerminal,
  FiSearch,
  FiZap,
  FiTarget,
  FiLayers,
} from "react-icons/fi";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux,
  SiWordpress,
  SiVercel,
  
} from "react-icons/si";

import Reveal from "./Reveal";

// Skill Icons
const iconMap = {
  html: SiHtml5,
  css: FiCode,
  javascript: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  dom: FiCode,

  php: SiPhp,
  mysql: SiMysql,
  sql: FiDatabase,

  git: SiGit,
  github: SiGithub,
  linux: SiLinux,
  wordpress: SiWordpress,
  vercel: SiVercel,

  claude: FiCpu,
  copilot: FiCode,
  agent: FiCpu,
  chatgpt: FiMessageSquare,
  prompt: FiMessageSquare,
  coding: FiCode,
  generation: FiTerminal,
  debugging: FiCode,
  research: FiSearch,
  optimization: FiZap,
  problem: FiTarget,
};

// Icon Colors
const iconColors = {
  html: "text-orange-500",
  css: "text-blue-500",
  javascript: "text-yellow-400",
  react: "text-cyan-400",
  tailwind: "text-cyan-500",
  dom: "text-violet-400",

  php: "text-indigo-400",
  mysql: "text-blue-400",
  sql: "text-sky-400",

  git: "text-orange-500",
  github: "text-ink",
  linux: "text-yellow-500",
  wordpress: "text-blue-500",
  vercel: "text-ink",

  claude: "text-orange-400",
  copilot: "text-violet-400",
  agent: "text-cyan-400",
  chatgpt: "text-emerald-400",
  prompt: "text-pink-400",
  coding: "text-violet-400",
  generation: "text-blue-400",
  debugging: "text-red-400",
  research: "text-sky-400",
  optimization: "text-yellow-400",
  problem: "text-emerald-400",
};

export default function SkillCard({
  name,
  level,
  desc,
  icon,
  index = 0,
}) {
  const Icon = iconMap[icon] || FiLayers;
  const iconColor = iconColors[icon] || "text-primary";

  return (
    <Reveal delay={index * 0.045}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 18,
        }}
        className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 text-center shadow-sm transition-colors duration-300 hover:border-primary/50 hover:shadow-[0_12px_35px_-15px_rgb(var(--primary)/0.4)]"
      >
        {/* Hover Glow */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Skill Icon */}
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.12,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-bg shadow-inner transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_25px_rgb(var(--primary)/0.15)]"
        >
          <Icon className={`text-4xl ${iconColor}`} />
        </motion.div>

        {/* Skill Name */}
        <h3 className="relative font-display text-base font-bold text-ink sm:text-lg">
          {name}
        </h3>

        {/* Description */}
        <p className="relative mt-2 min-h-[42px] text-xs leading-relaxed text-muted sm:text-sm">
          {desc}
        </p>

        {/* Progress Bar */}
        {typeof level === "number" && (
          <div className="relative mt-5 text-left">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-muted">
                Proficiency
              </span>

              <span className="text-xs font-bold text-success">
                {level}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-salmon shadow-[0_0_12px_rgb(var(--primary)/0.5)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2 + index * 0.04,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        )}

        {/* Bottom Hover Accent */}
        <div className="absolute inset-x-8 bottom-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-primary to-salmon transition-transform duration-300 group-hover:scale-x-100" />
      </motion.div>
    </Reveal>
  );
}
