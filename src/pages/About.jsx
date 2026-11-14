import { FiCalendar, FiMapPin, FiMail, FiPhone, FiCheckCircle } from "react-icons/fi";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { personal } from "../data/personal";
import { experience } from "../data/experience";

const info = [
  { icon: FiCalendar, label: "Birthday", value: personal.birthday, color: "text-primary" },
  { icon: FiMapPin, label: "Location", value: personal.location, color: "text-salmon" },
  { icon: FiMail, label: "Email", value: personal.email, color: "text-success" },
  { icon: FiPhone, label: "Phone", value: personal.phone, color: "text-primary" },
];

// Photos 2, 3 and 4. Edit the captions if you want.
const gallery = [
  { src: "/images/about-1.jpeg", title: "Confident & Curious", text: "Always exploring new ideas and ways to build better interfaces." },
  { src: "/images/about-2.jpeg", title: "Calm & Focused", text: "I like to stay focused, keep learning and improve step by step." },
  { src: "/images/about-3.jpeg", title: "Student Life", text: "A Computer Science student learning something new every day." },
];

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About"
        description="Learn more about Kawsar Islam, a frontend developer and Computer Science student from Dhaka, Bangladesh."
      />

      <section className="page-section">
        <SectionTitle
          eyebrow="About Me"
          title="Get to know me"
          subtitle="A student developer passionate about clean, modern and responsive interfaces."
        />

        {/* Bio + personal info */}
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="space-y-4 text-muted lg:col-span-3">
            {personal.longBio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="glow-card space-y-4 p-6">
              {info.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className={`mt-0.5 ${color}`}>
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                    <p className="break-words text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Industrial attachment */}
        <Reveal className="mt-16">
          <div className="glow-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <span className="rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                {experience.type} · {experience.duration}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">{experience.company}</h3>
              <ul className="mt-5 space-y-3">
                {experience.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-muted">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-success" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Photo gallery: natural ratio, no distortion */}
        <div className="mt-16 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.12}>
              <figure className="glow-card overflow-hidden">
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="h-auto w-full"
                />
                <figcaption className="p-5">
                  <h4 className="font-display text-lg font-semibold">{g.title}</h4>
                  <p className="mt-1 text-sm text-muted">{g.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}