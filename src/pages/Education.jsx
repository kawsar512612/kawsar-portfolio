import { FiBookOpen, FiCalendar, FiAward } from "react-icons/fi";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { education } from "../data/education";

export default function Education() {
  return (
    <PageTransition>
      <SEO
        title="Education"
        description="Education of Kawsar Islam at Tangail Polytechnic Institute, Computer Science and Technology."
      />

      <section className="page-section">
        <SectionTitle
          eyebrow="Education"
          title="My academic journey"
          subtitle="Where I'm building my technical foundation."
        />

        <div className="relative mx-auto max-w-3xl border-l-2 border-line pl-8">
          {education.map((e, i) => (
            <Reveal key={e.institute} delay={i * 0.1}>
              <div className="relative">
                {/* Timeline dot */}
                <span className="absolute -left-[41px] top-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-bg shadow-[0_0_12px_rgb(var(--primary)/0.7)]">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>

                <div className="glow-card p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FiBookOpen size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold">{e.institute}</h3>
                      <p className="mt-1 text-salmon">{e.program}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 text-sm">
                    <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-muted">
                      <FiCalendar className="text-primary" /> Session {e.session}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 font-medium text-success">
                      <FiAward /> {e.status}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}