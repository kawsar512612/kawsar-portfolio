import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <PageTransition>
      <SEO
        title="Skills"
        description="Frontend skills of Kawsar Islam: HTML, CSS, JavaScript, React.js, Tailwind CSS, and Git & GitHub."
      />

      <section className="page-section">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="My current skill levels. I'm improving them every day."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <SkillCard key={s.name} {...s} index={i} />
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface/60 p-5 text-center text-sm text-muted">
            I'm also learning the fundamentals of <span className="font-semibold text-salmon">backend development</span> to
            better understand how full web applications work.
          </p>
        </Reveal>
      </section>
    </PageTransition>
  );
}