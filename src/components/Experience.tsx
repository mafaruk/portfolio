import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-glow uppercase">
          Experience
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          Six years across enterprise engineering
        </h2>
      </Reveal>

      <ol className="mt-12 space-y-4 border-l border-border pl-6 sm:pl-10 ">
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            <span
              className={`absolute top-8 -left-[1.9rem] size-3 rounded-full ring-4 ring-background  sm:-left-[2.9rem]  ${
                job.current ? "bg-brand-glow" : "bg-secondary"
              }`}
            />
            <Reveal delay={i * 60}>
              <article
                className={`rounded-2xl border p-6 sm:p-8 ${
                  job.current
                    ? "aurora border-brand/50 bg-surface"
                    : "border-border bg-surface/40"
                } hover:glow-ring hover:aurora`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">
                    {job.company}
                    {job.current && (
                      <span className="ml-3 rounded-full bg-primary px-2.5 py-1 align-middle text-[10px] font-semibold tracking-wide text-primary-foreground uppercase">
                        Current
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground">{job.period}</p>
                </div>
                <p className="mt-1 text-sm text-brand-glow">
                  {job.title} · {job.location}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}