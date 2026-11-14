import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail, FiDownload, FiMapPin } from "react-icons/fi";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SocialLinks from "../components/SocialLinks";
import useTyping from "../hooks/useTyping";
import { personal } from "../data/personal";

const highlights = [
  { value: "3 Months", label: "Industrial Attachment", color: "text-primary" },
  { value: "8th Sem", label: "Computer Science & Tech", color: "text-success" },
  { value: "React.js", label: "Currently Mastering", color: "text-salmon" },
];

export default function Home() {
  const typed = useTyping(personal.typingWords);

  return (
    <PageTransition>
      <SEO
        title="Home"
        description="Kawsar Islam, a Frontend Developer from Dhaka, Bangladesh, building modern and responsive web applications with React.js and Tailwind CSS."
      />

      <section className="container-x grid min-h-screen items-center gap-12 pb-16 pt-28 lg:grid-cols-2">
        {/* Text */}
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
            <span className="ml-0.5 inline-block w-0.5 animate-blink bg-primary">&nbsp;</span>
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
            {/* Appears automatically once you add cvUrl in personal.js */}
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
              <FiMapPin className="text-salmon" /> {personal.location}
            </span>
          </motion.div>
        </div>

        {/* Photo 1: shown at its natural ratio, no cropping */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/40 via-salmon/20 to-success/30 opacity-70 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-2 shadow-[0_0_40px_-12px_rgb(var(--primary)/0.6)]">
            <img
              src="/images/hero.png"
              alt="Kawsar Islam"
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="container-x pb-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.1}>
              <div className="glow-card p-6 text-center">
                <p className={`font-display text-3xl font-bold ${h.color}`}>{h.value}</p>
                <p className="mt-1 text-sm text-muted">{h.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}