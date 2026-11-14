import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, tech, liveUrl, githubUrl, image } = project;
  const hasLinks = liveUrl || githubUrl;

  return (
    <Reveal delay={index * 0.1} className="h-full">
      <article className="glow-card flex h-full flex-col overflow-hidden">
        {/* Image or placeholder */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/15 via-salmon/10 to-success/10">
            <FiFolder size={44} className="text-primary" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted">{description}</p>

          {tech?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-salmon/30 bg-salmon/10 px-3 py-1 text-xs font-medium text-salmon"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-4 !py-2"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !px-4 !py-2"
              >
                <FiGithub /> Code
              </a>
            )}
            {!hasLinks && (
              <span className="text-xs text-muted">Links coming soon</span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}