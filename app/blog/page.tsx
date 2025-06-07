import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPublishedPosts, getAllCategories, type BlogPost } from "@/lib/markdown"

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on web development, technology, and computer science.",
}

export default async function BlogPage() {
  const publishedPosts = await getPublishedPosts()
  const categories = await getAllCategories()

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
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Thoughts on web development, technology, and computer science.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="grid gap-6">
          {publishedPosts.map((post: BlogPost) => (
            <Card key={post.id} className="border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-sm"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {post.description}
                    </CardDescription>
                  </div>
                  {post.featured && (
                    <Badge className="ml-4 shrink-0">Featured</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {publishedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No blog posts published yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
