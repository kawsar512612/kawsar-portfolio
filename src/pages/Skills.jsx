
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiGrid, FiCode, FiDatabase, FiCpu, FiTool } from "react-icons/fi";

import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import { skills } from "../data/skills";

const categories = [
  { name: "All Skills", icon: FiGrid },
  { name: "Frontend Development", icon: FiCode },
  { name: "Backend Development", icon: FiDatabase },
  { name: "Programming & Tools", icon: FiTool },
  { name: "AI & AI Tools", icon: FiCpu },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All Skills");
  const [search, setSearch] = useState("");

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory =
        activeCategory === "All Skills" ||
        skill.category === activeCategory;

      const matchesSearch =
        skill.name.toLowerCase().includes(search.toLowerCase()) ||
        skill.desc.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <PageTransition>
      <SEO
        title="Skills"
        description="Explore Kawsar Islam's skills in frontend, backend, programming tools and AI technologies."
      />

      <section className="page-section">
        {/* Header */}
        <Reveal>
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              My Tech Stack
            </span>

            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
              My <span className="gradient-text">Skills</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Technologies, programming tools and AI skills that I use,
              explore and continuously improve.
            </p>
          </div>
        </Reveal>

        {/* Skill statistics */}
        <Reveal delay={0.1}>
          <div className="mx-auto mb-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: skills.length, label: "Total Skills" },
              { value: "04", label: "Categories" },
              { value: "01", label: "Learning Journey" },
              { value: "∞", label: "Room to Grow" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-line bg-surface/60 p-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-primary">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Search */}
        <Reveal delay={0.15}>
          <div className="mx-auto mb-6 max-w-xl">
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/70 px-4 py-3 transition-all duration-300 focus-within:border-primary/60 focus-within:shadow-[0_0_20px_rgb(var(--primary)/0.12)]">
              <FiSearch className="shrink-0 text-lg text-primary" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search a skill..."
                aria-label="Search skills"
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="shrink-0 text-xs font-semibold text-primary hover:text-salmon"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* Category filters */}
        <Reveal delay={0.2}>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "border-primary bg-primary text-white shadow-[0_5px_20px_rgb(var(--primary)/0.25)]"
                      : "border-line bg-surface/60 text-muted hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  <Icon className="text-sm" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Result count */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-medium text-muted">
            Showing{" "}
            <span className="font-bold text-primary">
              {filteredSkills.length}
            </span>{" "}
            {filteredSkills.length === 1 ? "skill" : "skills"}
          </p>

          {activeCategory !== "All Skills" && (
            <button
              type="button"
              onClick={() => setActiveCategory("All Skills")}
              className="text-xs font-semibold text-primary hover:text-salmon"
            >
              Show all skills
            </button>
          )}
        </div>

        {/* Skill cards */}
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={`${skill.category}-${skill.name}`}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.025 }}
              >
                <SkillCard {...skill} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty search result */}
        {filteredSkills.length === 0 && (
          <div className="rounded-2xl border border-dashed border-line bg-surface/40 px-5 py-14 text-center">
            <FiSearch className="mx-auto mb-4 text-3xl text-muted" />
            <h3 className="font-display text-lg font-bold text-ink">
              No skills found
            </h3>
            <p className="mt-2 text-sm text-muted">
              Try another skill name or select a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Skills");
              }}
              className="mt-5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Footer note */}
        <Reveal className="mt-12">
          <p className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface/60 p-5 text-center text-sm leading-7 text-muted">
            I'm continuously learning and improving my skills.
            My goal is to build better, more useful and user-friendly
            web applications.
          </p>
        </Reveal>
      </section>
    </PageTransition>
  );
}
