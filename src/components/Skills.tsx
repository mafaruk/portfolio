import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-glow uppercase">
            Skills
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            The stack I build with every day
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 60}>
              <article className="h-full rounded-2xl border border-border bg-background/60 p-6 transition-colors hover:aurora">
                <h3 className="font-display text-sm font-semibold tracking-wide text-brand-glow uppercase">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-secondary px-2.5 py-1.5 text-xs font-medium text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}