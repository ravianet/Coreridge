type CapabilityHeroVisualProps = {
  domain: string;
  solutions: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
};

export default function CapabilityHeroVisual({
  domain,
  solutions,
}: CapabilityHeroVisualProps) {
  return (
    <aside
      aria-label={`${domain} technology capabilities`}
      className="relative isolate overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/55 p-5 text-brand-navy shadow-xl shadow-brand-navy/[0.08] backdrop-blur-xl sm:p-7"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 -z-10 h-64 w-64 rounded-full border border-brand-navy/[0.06] bg-white/40"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 -left-20 -z-10 h-64 w-64 rounded-full border border-brand-orange/10"
      />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
        Built around your operating reality
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-brand-navy sm:text-2xl">
        {domain} delivery priorities
      </h2>
      <div className="mt-5 space-y-3">
        {solutions.map((solution, index) => (
          <div
            key={solution.title}
            className="flex items-start gap-3 rounded-xl border border-white/90 bg-white/65 p-3.5 shadow-sm shadow-brand-navy/[0.03] backdrop-blur-sm"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-navy/[0.06] bg-white/80 text-xl">
              {solution.icon}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-brand-navy">{solution.title}</p>
              <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">
                {solution.description}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="ml-auto pt-1 text-xs font-semibold text-brand-orange"
            >
              0{index + 1}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
