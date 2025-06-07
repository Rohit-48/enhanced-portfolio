import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getPostBySlug, getAllPostSlugs } from "@/lib/markdown"
import { formatDate } from "@/lib/utils"
import { siteConfig } from "@/config/site"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(({ slug }) => ({
    slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to blog
        </Link>

        <article>
          <header className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 leading-tight font-serif">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-6">
              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-light prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed prose-a:text-gray-900 dark:prose-a:text-gray-100 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-gray-100 mt-8"
            dangerouslySetInnerHTML={{ __html: post.content?.replace(/\n/g, "<br />") || "" }}
          />

          <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100 dark:border-gray-800 mt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}
