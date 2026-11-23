
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

// ==========================================
// PROJECT DATA
// নতুন Project যুক্ত করতে নিচের array-তে
// নতুন একটি object যোগ করবে।
// ==========================================

const projects = [
  // ------------------------------------------
  // PROJECT 01: TASKFLOW
  // ------------------------------------------
  {
    id: 1,
    title: "TaskFlow",

    description:
      "A modern task management platform to organize tasks, manage priorities, track progress, and improve productivity.",

    tech: ["HTML", "CSS","JAVASCRIPT", "TAILWIND CSS", "REACT", "PHP", "MYSQL", "CLAUDE AI"],

    liveUrl: "https://kawsar-db.netlify.app",

    githubUrl: "",

    // Screenshot: public/images/taskflow.png
    image: "/images/taskflow.png",
  },

  // ==========================================
  // FUTURE PROJECTS
  // নতুন Project এখানে যুক্ত করবে।
  // নিচের structure copy করে তথ্য পরিবর্তন করবে।
  // ==========================================

  /*
  {
    id: 2,
    title: "Your Project Name",

    description:
      "Write your project description here.",

    tech: ["React", "Tailwind CSS", "MongoDB"],

    liveUrl: "https://your-project.netlify.app",

    githubUrl: "https://github.com/username/project",

    image: "/images/your-project.png",
  },
  */

];

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

          {/* Display all project cards automatically */}
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
            />
          ))}

          {/* More projects coming soon */}
          <Reveal
            delay={projects.length * 0.1}
            className="h-full"
          >
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-line p-6 text-center">

              <p className="font-display text-lg font-semibold">
                More coming soon
              </p>

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
