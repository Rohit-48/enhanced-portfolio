import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getRecentPosts } from "@/lib/markdown"
import { formatDate } from "@/lib/utils"

export async function BlogSectionServer() {
  const recentPosts = await getRecentPosts(2)

  return (
    <section
      className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="writing-heading"
    >
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2
            id="writing-heading"
            className="text-2xl font-light text-gray-900 dark:text-gray-100 font-serif"
          >
            Recent Writing
          </h2>
          <div>
            <Link
              href="/blog"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 flex items-center group focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-sm"
            >
              View all
              <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="space-y-6" role="list" aria-label="Recent articles">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              role="listitem"
              className="space-y-2 group cursor-pointer hover:translate-x-1 transition-transform"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-sm"
                  >
                    {post.title}
                  </Link>
                </h3>
                <div className="flex items-center space-x-2 text-xs text-gray-400 dark:text-gray-500">
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 