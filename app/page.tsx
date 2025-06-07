import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { BlogSectionServer } from "@/components/sections/blog-section-server"
import { ContactSection } from "@/components/sections/contact-section"
import { PageTransition } from "@/components/page-transition"
import { siteConfig } from "@/config/site"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: "Computer Science Student & Developer",
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.twitter],
    knowsAbout: [
      "Web Development",
      "Artificial Intelligence",
      "Functional Programming",
      "Linux Systems",
      "Computer Science",
    ],
  }

  return (
    <PageTransition>
      <div className="transition-colors duration-300">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSectionServer />
        <ContactSection />
      </div>
    </PageTransition>
  )
}
