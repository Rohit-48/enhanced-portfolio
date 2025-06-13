export interface BlogPost {
  id: string
  title: string
  description: string
  content?: string
  date: string
  readTime: string
  published: boolean
  featured: boolean
  slug: string
  category: string
  tags: string[]
  author: {
    name: string
    image?: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js 14",
    description: "Exploring the latest features in Next.js 14 and how they improve developer experience and application performance.",
    date: "2024-01-15",
    readTime: "8 min read",
    published: true,
    featured: true,
    slug: "building-modern-web-applications-nextjs-14",
    category: "Web Development",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    author: {
      name: "Rohit",
    },
  },
  {
    id: "2", 
    title: "Understanding Machine Learning Fundamentals",
    description: "A comprehensive guide to machine learning concepts, algorithms, and practical applications for developers.",
    date: "2024-01-10",
    readTime: "12 min read",
    published: true,
    featured: true,
    slug: "understanding-machine-learning-fundamentals",
    category: "Machine Learning",
    tags: ["Machine Learning", "AI", "Python", "Data Science"],
    author: {
      name: "Rohit",
    },
  },
  {
    id: "3",
    title: "The Evolution of TypeScript in Modern Development",
    description: "How TypeScript has transformed JavaScript development and why it's become essential for large-scale applications.",
    date: "2024-01-05",
    readTime: "6 min read", 
    published: true,
    featured: false,
    slug: "evolution-typescript-modern-development",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Programming", "Development"],
    author: {
      name: "Rohit",
    },
  },
  {
    id: "4",
    title: "Functional Programming Concepts in JavaScript",
    description: "Exploring functional programming paradigms and how to apply them effectively in JavaScript applications.",
    date: "2023-12-28",
    readTime: "10 min read",
    published: true,
    featured: false,
    slug: "functional-programming-concepts-javascript", 
    category: "Programming",
    tags: ["Functional Programming", "JavaScript", "Programming Paradigms"],
    author: {
      name: "Rohit",
    },
  },
  {
    id: "5",
    title: "NixOS: A Purely Functional Linux Distribution",
    description: "A quick story about how I discovered this absolute banger of a distro.",
    date: "2025-06-13",
    readTime: "5 min read",
    published: true,
    featured: false,
    slug: "nixos-a-purely-functional-linux-distribution",
    category: "Linux",
    tags: ["Linux", "NixOS", "Declarative", "Functional"],
    author: {
      name: "Rohit",
    },
  },
]

export const getPublishedPosts = () => blogPosts.filter((post) => post.published)

export const getPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug)

export const getPostsByCategory = (category: string) =>
  blogPosts.filter((post) => post.published && post.category === category)

export const getAllCategories = () => 
  Array.from(new Set(getPublishedPosts().map((post) => post.category)))

export const getRecentPosts = (limit = 3) =>
  getPublishedPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)

export const getFeaturedPosts = () =>
  getPublishedPosts()
    .filter((post) => post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const getRelatedPosts = (currentSlug: string, limit = 3) => {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  return getPublishedPosts()
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => 
      post.category === currentPost.category ||
      post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}
