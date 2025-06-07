"use client"

import { motion } from "framer-motion"

const technologies = ["JavaScript", "TypeScript", "React", "Next.js", "Python", "Node.js", "Linux", "Git"]

export function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="about-heading"
    >
      <div className="space-y-8">
        <motion.h2
          id="about-heading"
          className="text-2xl font-light text-gray-900 dark:text-gray-100 font-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
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
              I'm currently pursuing my degree in Computer Science, with a focus on modern web technologies and
              artificial intelligence. My approach to learning is holistic—I believe in understanding not just the how,
              but the why behind technology.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
              diving deep into the philosophical aspects of technology and its impact on society.
            </p>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Current Focus</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Full-stack web development</li>
                <li>• Machine learning & AI</li>
                <li>• Functional programming</li>
                <li>• Linux systems & DevOps</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    role="listitem"
                    className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
