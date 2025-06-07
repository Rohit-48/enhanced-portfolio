"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "./mobile-nav"

const navigationItems = [
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav
      className="border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-40"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/"
              className="text-lg font-medium text-gray-900 dark:text-gray-100 font-serif focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-sm"
            >
              Rohit
            </Link>
          </motion.div>

          <div className="flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center space-x-8"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-sm",
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-gray-900 dark:text-gray-100 font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>

            <div className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:block"
              >
                <ThemeToggle />
              </motion.div>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
