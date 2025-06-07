import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProjectBySlug } from "@/data/projects"
import { formatDate } from "@/lib/utils"
import { siteConfig } from "@/config/site"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6 mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>
        </div>

        <article className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-light text-gray-900 dark:text-gray-100 leading-tight font-serif">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
            <div className="flex items-center space-x-4">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={project.github}
                    className="inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              )}
              {project.demo && (
                <Button variant="default" size="sm" asChild>
                  <Link
                    href={project.demo}
                    className="inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                  </Link>
                </Button>
              )}
            </div>
          </header>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.longDescription}</p>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
            <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 font-serif mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex justify-between items-center">
            <time className="text-sm text-gray-400 dark:text-gray-500" dateTime={project.date}>
              {formatDate(project.date)}
            </time>
            <Link
              href="/projects"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 inline-flex items-center group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to all projects
            </Link>
          </div>
        </article>
    </div>
  )
}
