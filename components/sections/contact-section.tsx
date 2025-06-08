"use client"

import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

const contactLinks = [
  { icon: Mail, label: siteConfig.author.email, href: `mailto:${siteConfig.author.email}` },
  { icon: Github, label: "GitHub", href: siteConfig.links.github },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.links.linkedin },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="contact-heading"
    >
      <div className="space-y-8">
        <motion.h2
          id="contact-heading"
          className="text-2xl font-light text-gray-900 dark:text-gray-100 font-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborating on projects, or simply having a
              conversation about technology and its impact on our world.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you're looking for a developer, want to discuss a project, or just want to connect, feel free to
              reach out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
