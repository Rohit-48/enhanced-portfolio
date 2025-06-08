import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          {/* Social links removed as per request */}
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Rohit Mandavkar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 