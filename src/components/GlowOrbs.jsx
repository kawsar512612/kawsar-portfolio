export default function GlowOrbs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -left-24 top-10 h-72 w-72 animate-float rounded-full bg-primary/20 blur-3xl dark:bg-primary/25 sm:h-96 sm:w-96" />
      <div className="absolute -right-24 top-1/3 h-72 w-72 animate-float-slow rounded-full bg-salmon/15 blur-3xl dark:bg-salmon/20 sm:h-96 sm:w-96" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-float rounded-full bg-success/10 blur-3xl dark:bg-success/15 sm:h-80 sm:w-80" />
    </div>
  );
}