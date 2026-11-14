import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-12 text-center">
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-muted">{subtitle}</p>
      )}
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-primary via-salmon to-success" />
    </Reveal>
  );
}