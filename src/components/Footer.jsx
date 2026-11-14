import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import SocialLinks from "./SocialLinks";
import { personal } from "../data/personal";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-surface/50 backdrop-blur">
      <div className="container-x grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="font-display text-xl font-bold">
            <span className="gradient-text">K</span>awsar
            <span className="text-primary">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {personal.role} building modern, responsive web experiences.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
            Quick Links
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <FiMail className="text-primary" />
              <a href={`mailto:${personal.email}`} className="hover:text-primary">
                {personal.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-success" />
              <a href={`tel:+${personal.phoneInternational}`} className="hover:text-primary">
                {personal.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-salmon" />
              {personal.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </div>
    </footer>
  );
}