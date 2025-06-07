import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { rehype } from 'rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export interface BlogPostMatter {
  title: string
  description: string
  date: string
  published: boolean
  featured: boolean
  category: string
  tags: string[]
  author: string
  readTime: string
}

export interface BlogPost extends BlogPostMatter {
  id: string
  slug: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(name => ({
      slug: name.replace(/\.md$/, '')
    }))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process markdown content
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content)
    
    // Further process HTML for syntax highlighting
    const highlightedContent = await rehype()
      .data('settings', { fragment: true })
      .use(rehypeHighlight)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        behavior: 'wrap',
        properties: {
          className: ['anchor-link']
        }
      })
      .process(processedContent.toString())
    
    return {
      id: slug,
      slug,
      content: highlightedContent.toString(),
      ...(data as BlogPostMatter)
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getAllPostSlugs()
  const posts = await Promise.all(
    slugs.map(({ slug }) => getPostBySlug(slug))
  )
  
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.published)
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getPublishedPosts()
  return posts.filter(post => post.featured)
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getPublishedPosts()
  return posts.filter(post => post.category === category)
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getPublishedPosts()
  const categories = posts.map(post => post.category)
  return Array.from(new Set(categories))
}

export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getPublishedPosts()
  return posts.slice(0, limit)
}

export async function getRelatedPosts(currentSlug: string, limit = 3): Promise<BlogPost[]> {
  const currentPost = await getPostBySlug(currentSlug)
  if (!currentPost) return []
  
  const posts = await getPublishedPosts()
  
  return posts
    .filter(post => post.slug !== currentSlug)
    .filter(post => 
      post.category === currentPost.category ||
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit)
} 