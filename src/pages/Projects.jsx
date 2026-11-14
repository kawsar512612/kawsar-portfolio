import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <PageTransition>
      <SEO
        title="Projects"
        description="Projects built by Kawsar Islam while learning frontend development."
      />

      <section className="page-section">
        <SectionTitle
          eyebrow="Projects"
          title="Things I've built"
          subtitle="More projects will be added here as I keep learning and building."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}

          <Reveal delay={projects.length * 0.1} className="h-full">
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-line p-6 text-center">
              <p className="font-display text-lg font-semibold">More coming soon</p>
              <p className="mt-2 text-sm text-muted">
                New projects will appear here.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}