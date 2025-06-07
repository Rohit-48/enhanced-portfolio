"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16" aria-labelledby="hero-heading">
      <div className="space-y-6">
        <motion.h1
          id="hero-heading"
          className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 leading-tight font-serif"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Computer Science Student & Developer
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I'm a computer science student passionate about web development and AI. I believe in being a
          multidimensional person—a polymath who loves learning and building meaningful technology.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="outline" size="sm" asChild className="group">
            <Link href="#projects">
              View Projects
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
