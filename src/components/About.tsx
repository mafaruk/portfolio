import workingAsset from "@/assets/working.jpg";
import { Reveal } from "@/components/Reveal";
import { competencies, profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <img
                src={workingAsset}
                alt={`${profile.name} working on a software project at his desk`}
                width={900}
                height={900}
                loading="lazy"
                className="aspect-square w-full object-cover opacity-80 saturate-50"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-glow uppercase">
              About
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Engineering enterprise systems that scale
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {competencies.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}