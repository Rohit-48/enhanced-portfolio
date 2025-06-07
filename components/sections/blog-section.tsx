"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { getRecentPosts } from "@/data/blog-posts"
import { formatDate } from "@/lib/utils"

export function BlogSection() {
  const recentPosts = getRecentPosts(2)

  return (
    <section
      className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="writing-heading"
    >
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <motion.h2
            id="writing-heading"
            className="text-2xl font-light text-gray-900 dark:text-gray-100 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Recent Writing
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/blog"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 flex items-center group focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-sm"
            >
              View all
              <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
        <div className="space-y-6" role="list" aria-label="Recent articles">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              role="listitem"
              className="space-y-2 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}