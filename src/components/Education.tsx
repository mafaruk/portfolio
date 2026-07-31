import { Reveal } from "@/components/Reveal";
import { education, professionalSkills } from "@/data/portfolio";

export function Education() {
  return (
    <section
      id="education"
      className="border-y border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 ">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-background/60 p-8 hover:border-brand/60">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-glow uppercase">
              Education
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold">
              {education.degree}
            </h2>
            <p className="mt-3 text-muted-foreground">{education.school}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.period} · {education.location}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="h-full rounded-2xl border border-border bg-background/60 p-8 hover:border-brand/60">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-glow uppercase">
              Professional skills
            </p>
            <ul className="mt-5 space-y-3">
              {professionalSkills.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-glow" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}