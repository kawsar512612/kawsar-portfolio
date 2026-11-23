
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMail,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";

import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SocialLinks from "../components/SocialLinks";
import useTyping from "../hooks/useTyping";
import { personal } from "../data/personal";

// =====================================
// HIGHLIGHTS
// =====================================

const highlights = [
  { value: "3 Months", label: "Industrial Attachment", color: "text-primary" },
  { value: "8th Sem", label: "Computer Science & Tech", color: "text-success" },
  { value: "React.js", label: "Currently Mastering", color: "text-salmon" },
];

// =====================================
// MY SKILLS
// নতুন Skill যোগ করতে নিচের array-তে নাম যোগ করবে
// =====================================

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "DOM",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "PHP",
      "MYSQL",
      "SQL",
    ],
  },
  {
    title: "Programming & Tools",
    skills: [
      "JavaScript",
      "Git",
      "GitHub",
      "Linux",
      "WordPress",
      "Vercel",
    ],
  },

{
  // =====================================
  // AI & AI TOOLS
  // =====================================
  title: "AI & AI Tools",
  skills: [
    "CLAUDE",
    "COPILOT",
    "AI AGENT",
    "ChatGPT",
    "Prompt Engineering",
    "AI-Assisted Coding",
    "AI Code Generation",
    "AI Debugging",
    "AI Research",    
    "Code Optimization",
    "AI Problem Solving",
  ],
},

];

export default function Home() {
  const typed = useTyping(personal.typingWords);

  return (
    <PageTransition>
      <SEO
        title="Home"
        description="Kawsar Islam, a Frontend Developer from Dhaka, Bangladesh, building modern and responsive web applications with React.js and Tailwind CSS."
      />

      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section className="container-x grid min-h-screen items-center gap-12 pb-16 pt-28 lg:grid-cols-2">

        {/* INTRODUCTION */}

        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-xs font-semibold text-success"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            Open to junior frontend opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 h-9 font-display text-xl font-medium text-salmon sm:text-2xl"
          >
            {typed}
            <span className="ml-0.5 inline-block w-0.5 animate-blink bg-primary">
              &nbsp;
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-xl text-muted"
          >
            {personal.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link to="/projects" className="btn-primary">
              View Projects <FiArrowRight />
            </Link>

            <Link to="/contact" className="btn-outline">
              <FiMail /> Contact Me
            </Link>

            {personal.cvUrl && (
              <a href={personal.cvUrl} download className="btn-outline">
                <FiDownload /> Download CV
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <SocialLinks />

            <span className="flex items-center gap-2 text-sm text-muted">
              <FiMapPin className="text-salmon" />
              {personal.location}
            </span>
          </motion.div>
        </div>

        {/* =====================================
            PROFILE PICTURE
            Circular and smaller image
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-primary/40 via-salmon/20 to-success/30 opacity-70 blur-3xl sm:h-80 sm:w-80" />

          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/30 bg-surface p-2 shadow-[0_0_40px_-12px_rgb(var(--primary)/0.6)] sm:h-80 sm:w-80">
            <img
              src="/images/hero.png"
              alt="Kawsar Islam"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>

      </section>

      {/* =====================================
          MY SKILLS SECTION
          Skills arranged by category
      ====================================== */}

      <section className="container-x pb-20">

        <Reveal>
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              What I Know
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              My <span className="gradient-text">Skills</span>
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              Technologies, tools and skills I use to build modern web applications.
            </p>
          </div>
        </Reveal>

        {/* Skill Categories */}

        <div className="grid gap-6 lg:grid-cols-2">

          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.12}>
              <div className="glow-card h-full rounded-2xl p-6">

                <h3 className="mb-5 flex items-center gap-3 font-display text-lg font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgb(var(--primary)/0.8)]" />
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-primary/20 bg-primary/5 px-3.5 py-2 text-xs font-medium text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/15 hover:shadow-md sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </section>

      {/* =====================================
          HIGHLIGHTS SECTION
      ====================================== */}

      <section className="container-x pb-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.1}>
              <div className="glow-card p-6 text-center">
                <p className={`font-display text-3xl font-bold ${h.color}`}>
                  {h.value}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {h.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </PageTransition>
  );
}
