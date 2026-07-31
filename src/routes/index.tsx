import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { DeloitteBand } from "@/components/Band";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Skills } from "@/components/Skills";
import { profile } from "@/data/portfolio";
import { getRequestOrigin } from "@/lib/origin.functions";

const title = "Mafaruk Bagwan — Full Stack Developer at Deloitte";
const description =
  "Mafaruk Bagwan, Full Stack Developer and Consultant at Deloitte USI. 6 years building cloud-native microservices with Java, Spring Boot, Python, React and AWS.";

export const Route = createFileRoute("/")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const imageMeta = origin
      ? [
          { property: "og:image", content: '/og-share.jpg' },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
          {
            property: "og:image:alt",
            content: "Mafaruk Bagwan — Full Stack Developer at Deloitte USI",
          },
          { name: "twitter:image", content: `/og-share.jpg` },
        ]
      : [];

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: "/" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        ...imageMeta,
      ],
      links: [{ rel: "canonical", href: "/" }],
    };
  },
  component: Index,
});


const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.currentTitle,
  worksFor: { "@type": "Organization", name: profile.company },
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Python",
    "ReactJS",
    "AWS",
    "Microservices",
    "REST APIs",
  ],
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <DeloitteBand />
        <About />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </div>
  );
}
