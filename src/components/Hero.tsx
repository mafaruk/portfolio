import portraitAsset from "@/assets/portrait.jpg";
import resumeAsset from "@/assets/resume.pdf";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="aurora relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
            <span className="size-1.5 animate-pulse rounded-full bg-brand-glow" />
            Currently at {profile.company}
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold sm:text-6xl ">
            {profile.name}
            <span className="block bg-gradient-to-r from-foreground to-brand-glow bg-clip-text text-transparent ">
              {profile.role}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <dl className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6 ">
            {[
              ["6+", "Years experience"],
              ["8+", "Projects delivered"],
              ["4+", "Companies worked with"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-bold text-brand-glow">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={resumeAsset}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-ring overflow-hidden rounded-[2rem] bg-surface  ">
            <img
              src={portraitAsset}
              alt={`Portrait of ${profile.name}, Full Stack Developer at ${profile.company}`}
              width={800}
              height={800}
              className="aspect-square w-full object-cover mix-blend-luminosity opacity-95 saturate-0 transition duration-500 hover:mix-blend-normal hover:saturate-100"
            />
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-brand/25 blur-3xl" />
        </div>
      </div>
    </section>
  );
}