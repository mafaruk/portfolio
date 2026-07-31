import { Reveal } from "@/components/Reveal";
import { deloitte } from "@/data/portfolio";

export function DeloitteBand() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-glow uppercase">
                Current role
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                {deloitte.company}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {deloitte.title} · {deloitte.location}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {deloitte.period}
              </p>
            </div>

            <ul className="space-y-4">
              {deloitte.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-glow" />
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}