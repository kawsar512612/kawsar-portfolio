import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import SocialLinks from "../components/SocialLinks";
import { personal } from "../data/personal";

const methods = [
  {
    icon: FiMail,
    title: "Email",
    value: personal.email,
    action: "Send Email",
    href: `mailto:${personal.email}`,
    color: "text-primary",
    bg: "bg-primary/10",
    btn: "btn-primary",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: personal.phone,
    action: "Call Now",
    href: `tel:+${personal.phoneInternational}`,
    color: "text-salmon",
    bg: "bg-salmon/10",
    btn: "btn-outline",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: personal.phone,
    action: "Chat on WhatsApp",
    href: `https://wa.me/${personal.phoneInternational}`,
    color: "text-success",
    bg: "bg-success/10",
    btn: "btn-outline",
    external: true,
  },
];

export default function Contact() {
  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Contact Kawsar Islam by email, phone or WhatsApp."
      />

      <section className="page-section">
        <SectionTitle
          eyebrow="Contact"
          title="Let's talk"
          subtitle="I'm looking for junior frontend opportunities. Feel free to reach out."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {methods.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <div className="glow-card flex h-full flex-col items-center p-8 text-center">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${m.bg} ${m.color}`}>
                  <m.icon size={26} />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{m.title}</h3>
                <p className="mt-1 mb-6 flex-1 break-all text-sm text-muted">{m.value}</p>
                <a
                  href={m.href}
                  className={`${m.btn} w-full`}
                  {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {m.action}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-col items-center gap-5">
          <p className="flex items-center gap-2 text-sm text-muted">
            <FiMapPin className="text-salmon" /> Based in {personal.location}
          </p>
          <SocialLinks />
        </Reveal>
      </section>
    </PageTransition>
  );
}