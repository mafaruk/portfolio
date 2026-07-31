import resumeAsset from "@/assets/resume.pdf";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "@mafarukbagwan4", href: profile.linkedin },
  { label: "GitHub", value: "@mafaruk", href: profile.github },
  { label: "Instagram", value: "@dev_vanguard_", href: profile.instagram },
  { label: "Instagram (Personal)", value: "@mafaruk_bagwan_", href: profile.instagramPersonal },
  { label: "Twitter", value: "@Mafaruk_Bagwan", href: profile.twitter },
  { label: "Blogger", value: "Developer Vanguard", href: profile.blogger },
];

export function Contact() {
  return (
    <footer id="contact" className="aurora">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-glow uppercase">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
            Let&rsquo;s build something worth shipping.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-brand/60 hover:-translate-y-0.5"
              >
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {l.label}
                </p>
                <p className="mt-2 text-sm font-medium break-words group-hover:text-brand-glow">
                  {l.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={resumeAsset}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Download resume (PDF)
            </a>
          </div>

          <p className="mt-16 border-t border-border pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name} · {profile.currentTitle} at{" "}
            {profile.company}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}