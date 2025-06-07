"use client"

import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { getFeaturedProjects } from "@/data/projects"
import { formatDate } from "@/lib/utils"

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="projects-heading"
    >
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <motion.h2
            id="projects-heading"
            className="text-2xl font-light text-gray-900 dark:text-gray-100 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/projects"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 flex items-center group focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-sm"
            >
              View all
              <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
        <div className="grid gap-6" role="list" aria-label="Featured projects">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
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
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          role="listitem"
                          className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <time className="text-xs text-gray-400 dark:text-gray-500" dateTime={project.date}>
                      {formatDate(project.date)}
                    </time>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
