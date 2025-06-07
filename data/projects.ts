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
    github: "https://github.com/rohit/portfolio",
    demo: "https://rohitai.in",
    featured: true,
    slug: "portfolio-website",
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "2", 
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    longDescription: "A full-featured task management application that allows teams to collaborate effectively. Features include real-time updates, drag-and-drop functionality, due dates, priority levels, and team member assignments. Built with React, Node.js, and Socket.io for real-time communication.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/rohit/task-manager",
    demo: "https://taskmanager-demo.com",
    featured: true,
    slug: "task-management-app",
    date: "2023-12-10",
    status: "completed",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather application with forecasts and location-based services.",
    longDescription: "A comprehensive weather dashboard that provides current conditions, 7-day forecasts, and weather maps. Features location-based weather detection, favorite locations, and weather alerts. Built with React and integrates with multiple weather APIs for accurate data.",
    technologies: ["React", "Weather API", "Chart.js", "CSS3", "Geolocation"],
    github: "https://github.com/rohit/weather-app",
    demo: "https://weather-dashboard-demo.com",
    featured: false,
    slug: "weather-dashboard",
    date: "2023-11-15",
    status: "completed",
  },
  {
    id: "4",
    title: "Machine Learning Classifier",
    description: "A Python-based machine learning model for image classification.",
    longDescription: "An image classification system using convolutional neural networks. The project includes data preprocessing, model training, and a web interface for testing. Built with Python, TensorFlow, and Flask, it demonstrates practical machine learning applications.",
    technologies: ["Python", "TensorFlow", "Flask", "scikit-learn", "NumPy"],
    github: "https://github.com/rohit/ml-classifier",
    featured: true,
    slug: "ml-classifier",
    date: "2023-10-20",
    status: "completed",
  },
  {
    id: "5",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment processing.",
    longDescription: "A complete e-commerce platform featuring user authentication, product catalog, shopping cart, order management, and payment processing. Built with Next.js, PostgreSQL, and Stripe for secure payments. Includes admin dashboard for inventory management.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "TypeScript"],
    github: "https://github.com/rohit/ecommerce",
    featured: false,
    slug: "ecommerce-platform",
    date: "2023-09-05",
    status: "in-progress",
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
