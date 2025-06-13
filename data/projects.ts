export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  featured: boolean
  slug: string
  date: string
  status: "completed" | "in-progress" | "planned"
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    longDescription: "This portfolio website showcases my projects, skills, and thoughts on technology. Built with Next.js 14, TypeScript, and Tailwind CSS, it features a clean design inspired by Anthropic's aesthetic. The site includes a blog, project showcase, and contact information.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Rohit-48/enhanced-portfolioo",
    demo: "https://rohitvinci0.netlify.app/",
    featured: true,
    slug: "portfolio-website",
    date: "2025-06-05",
    status: "completed",
  },
  {
    id: "2", 
    title: "Task Management App-RUST",
    description: "To-do-List Application in Rust[Backend] & react[Frontend].",
    longDescription: "A Simple TODO App In Rust, actix-web & React",
    technologies: ["Rust", "actix-web", "React", "Tailwind CSS"],
    github: "https://github.com/Rohit-48/Task-M",
    demo: "/",
    featured: true,
    slug: "TODO-list",
    date: "2025-05-01",
    status: "completed",
  },
]

export const getAllProjects = () => projects

export const getFeaturedProjects = () => 
  projects.filter((project) => project.featured)

export const getProjectBySlug = (slug: string) => 
  projects.find((project) => project.slug === slug)

export const getProjectsByTechnology = (technology: string) =>
  projects.filter((project) => 
    project.technologies.some((tech) => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  )

export const getRecentProjects = (limit = 3) =>
  projects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)

export const getAllTechnologies = () =>
  Array.from(new Set(projects.flatMap((project) => project.technologies)))
    .sort()
