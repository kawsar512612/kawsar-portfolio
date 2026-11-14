import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personal } from "../data/personal";

const icons = {
  Facebook: FaFacebookF,
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
};

export default function SocialLinks({ className = "" }) {
  const active = personal.socials.filter((s) => s.url);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {active.map((s) => {
        const Icon = icons[s.name];
        if (!Icon) return null;
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface/70 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_18px_-4px_rgb(var(--primary)/0.6)]"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}