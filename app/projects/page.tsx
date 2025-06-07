import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projects, type Project } from "@/data/projects"
import { formatDate } from "@/lib/utils"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects I've worked on, showcasing my skills and passion for development.",
  openGraph: {
    title: "Projects | " + siteConfig.name,
    description: "A collection of projects showcasing web development, AI, and systems programming expertise.",
    url: siteConfig.url + "/projects",
  },
}

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center space-x-4 mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-light text-gray-900 dark:text-gray-100 leading-tight font-serif mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            A collection of projects I've worked on, showcasing my skills and passion for development.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project: Project) => (
            <Card key={project.id} className="border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-sm"
                      >
                        {project.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link
                          href={project.github}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          aria-label={`View ${project.title} on GitHub`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link
                          href={project.demo}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          aria-label={`View ${project.title} demo`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {project.longDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2" role="list" aria-label="Project technologies">
                    {project.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        role="listitem"
                        className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-400 dark:text-gray-500">
                    <span className={`px-2 py-1 rounded text-xs ${
                      project.status === "completed" 
                        ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                        : project.status === "in-progress"
                        ? "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                        : "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    }`}>
                      {project.status.replace("-", " ")}
                    </span>
                    <time dateTime={project.date}>{formatDate(project.date)}</time>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
