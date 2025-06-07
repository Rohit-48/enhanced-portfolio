# Portfolio Management Documentation

Complete guide to managing and customizing your portfolio website.

## 📁 Project Structure Overview

```
enhanced-portfolio/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── projects/          # Project pages
│   ├── layout.tsx         # Global layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── navigation/        # Navigation components
│   ├── providers/         # Context providers
│   └── ui/                # UI components
├── content/               # Markdown content
│   └── blog/              # Blog posts (.md files)
├── data/                  # Static data files
│   ├── blog-posts.ts      # Legacy blog data (not used)
│   └── projects.ts        # Project information
├── config/                # Configuration files
│   └── site.ts            # Site metadata
├── lib/                   # Utility functions
│   ├── markdown.ts        # Markdown processing
│   └── utils.ts           # Helper functions
└── public/                # Static assets
    └── images/            # Images and icons
```

---

## 🚀 Adding & Managing Projects

### Where to Add Projects
Edit the file: `data/projects.ts`

### Project Structure
```typescript
{
  id: "unique-id",              // Unique identifier (increment from last)
  title: "Project Name",        // Display title
  description: "Short desc",    // Brief description for cards
  longDescription: "Detailed description for project page...",
  technologies: ["React", "Node.js", "MongoDB"], // Tech stack array
  github: "https://github.com/username/repo",    // Optional
  demo: "https://demo-url.com", // Optional
  image: "/images/project.png", // Optional project image
  featured: true,               // Show on homepage (true/false)
  slug: "project-url-name",     // URL-friendly name (no spaces)
  date: "2024-01-20",          // Project date (YYYY-MM-DD)
  status: "completed"           // "completed" | "in-progress" | "planned"
}
```

### Adding a New Project
1. Open `data/projects.ts`
2. Copy an existing project object
3. Update all fields with your project info
4. Increment the `id` to be unique
5. Create a unique `slug` (becomes `/projects/your-slug`)
6. Save the file
7. Run `npm run build` to generate the new project page

### Project Fields Explained

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✅ | Unique identifier (use numbers) |
| `title` | ✅ | Project name shown everywhere |
| `description` | ✅ | Short description for project cards |
| `longDescription` | ✅ | Detailed description for project page |
| `technologies` | ✅ | Array of technologies used |
| `github` | ❌ | GitHub repository URL |
| `demo` | ❌ | Live demo URL |
| `image` | ❌ | Project screenshot path |
| `featured` | ✅ | Show on homepage (boolean) |
| `slug` | ✅ | URL path (must be unique) |
| `date` | ✅ | Project completion date |
| `status` | ✅ | Current status |

---

## 📝 Writing & Managing Blog Posts

### Where to Add Blog Posts
Create new `.md` files in: `content/blog/`

### Blog Post Structure
Every blog post needs frontmatter (metadata) at the top:

```markdown
---
title: "Your Blog Post Title"
description: "SEO description and preview text"
date: "2024-01-20"
published: true
featured: false
category: "Web Development"
tags: ["React", "JavaScript", "Tutorial"]
author: "Your Name"
readTime: "8 min read"
---

# Your Blog Post Title

Your markdown content starts here...

## Subheading

Write your content using markdown syntax.

```javascript
// Code blocks are supported
function example() {
  console.log("Hello, world!")
}
```

### Lists work too:
- Point one
- Point two
- Point three
```

### Frontmatter Fields Explained

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Post title (shows as H1) |
| `description` | ✅ | SEO description, shows in previews |
| `date` | ✅ | Publication date (YYYY-MM-DD) |
| `published` | ✅ | `true` to publish, `false` for draft |
| `featured` | ✅ | `true` shows on homepage |
| `category` | ✅ | Post category for organization |
| `tags` | ✅ | Array of tags for filtering |
| `author` | ✅ | Author name |
| `readTime` | ✅ | Estimated reading time |

### Creating a New Blog Post
1. Create a new file: `content/blog/your-post-title.md`
2. Add frontmatter at the top (copy from existing posts)
3. Write your content in markdown below the frontmatter
4. Set `published: true` when ready to publish
5. Run `npm run build` to generate the post

### Markdown Features Supported
- **Headers** (H1-H6)
- **Bold** and *italic* text
- `Inline code`
- Code blocks with syntax highlighting
- Lists (ordered and unordered)
- Links: `[text](url)`
- Images: `![alt](path)`
- Tables
- Blockquotes: `> quote text`
- GitHub Flavored Markdown

---

## ⚙️ Site Configuration

### Main Site Settings
Edit: `config/site.ts`

```typescript
export const siteConfig = {
  name: "Your Name",
  description: "Your description",
  url: "https://yoursite.com",
  author: {
    name: "Your Name",
    email: "your.email@example.com",
    twitter: "@yourusername",
  },
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  keywords: ["keyword1", "keyword2", "keyword3"],
}
```

### Environment Variables
Edit: `env.example` (then rename to `.env.local`)

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_SITE_NAME="Your Portfolio"
NEXT_PUBLIC_SITE_DESCRIPTION="Your description"

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact (optional)
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com

# Social Media (optional)
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
```

---

## 🎨 Customizing Content Sections

### Homepage Sections
Edit: `app/page.tsx` (order of components)

The homepage includes these sections in order:
1. `HeroSection` - Main intro
2. `AboutSection` - About you
3. `ProjectsSection` - Featured projects
4. `BlogSectionServer` - Recent blog posts
5. `ContactSection` - Contact information

### Hero Section
Edit: `components/sections/hero-section.tsx`

Key areas to customize:
- Main headline
- Subtitle/description
- Call-to-action buttons
- Background styling

### About Section
Edit: `components/sections/about-section.tsx`

Customize:
- About text
- Skills/technologies
- Experience highlights
- Profile information

### Contact Section
Edit: `components/sections/contact-section.tsx`

Update:
- Contact methods
- Social links
- Contact form (if needed)
- Location/availability

---

## 🎯 Navigation & Layout

### Main Navigation
Edit: `components/navigation/main-nav.tsx`

To add/remove navigation items:
```typescript
const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" }, // Add new pages
]
```

### Footer
Edit: `components/footer.tsx`

Customize:
- Footer links
- Social media icons
- Copyright information
- Additional sections

---

## 🖼️ Managing Images & Assets

### Adding Images
1. Place images in `public/images/`
2. Reference them as `/images/filename.jpg`
3. Use in markdown: `![Alt text](/images/filename.jpg)`
4. Use in components: `<img src="/images/filename.jpg" alt="Alt text" />`

### Favicon & Site Icons
Replace files in `public/`:
- `favicon.ico`
- `apple-touch-icon.png`
- `favicon-16x16.png`
- `favicon-32x32.png`

---

## 🎨 Styling & Theming

### Colors & Theme
Edit: `tailwind.config.js`

The site uses CSS custom properties for theming:
- `--background` - Main background
- `--foreground` - Main text
- `--primary` - Primary accent color
- `--secondary` - Secondary accent
- `--muted` - Muted text/backgrounds

### Global Styles
Edit: `app/globals.css`

Add custom CSS:
- Font imports
- Custom animations
- Additional utility classes
- Component-specific styles

### Dark/Light Mode
The theme toggle is automatic. Colors are defined with CSS custom properties that change based on the theme.

---

## 🚀 Development & Deployment

### Development Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Check for errors
npm run lint:fix   # Fix linting errors
```

### Building & Testing
1. **Test locally**: `npm run dev`
2. **Build for production**: `npm run build`
3. **Check for errors**: `npm run lint`
4. **Test production build**: `npm run start`

### Deployment Options

#### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

#### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

#### Other Platforms
- Railway
- Heroku
- DigitalOcean App Platform

---

## 📊 SEO & Performance

### SEO Configuration
Each page has metadata in its header:
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
  // Additional SEO fields
}
```

### Performance Features
- ✅ Static site generation
- ✅ Image optimization
- ✅ Font optimization
- ✅ Code splitting
- ✅ Caching headers

### Analytics Setup
1. Get Google Analytics ID
2. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=your-id`
3. Analytics component is already integrated

---

## 🔧 Troubleshooting

### Common Issues

#### Build Errors
- Check for TypeScript errors: `npm run lint`
- Ensure all required fields are filled
- Check markdown frontmatter syntax

#### Missing Content
- Verify file paths are correct
- Check that `published: true` in blog frontmatter
- Ensure unique slugs for projects/posts

#### Styling Issues
- Clear `.next` cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check Tailwind classes are valid

### Getting Help
1. Check the console for error messages
2. Verify file syntax (especially frontmatter)
3. Test in development mode first
4. Review the example files for reference

---

## 📚 Quick Reference

### File Locations Cheat Sheet
| Content Type | Location | Format |
|--------------|----------|---------|
| Projects | `data/projects.ts` | TypeScript object |
| Blog Posts | `content/blog/*.md` | Markdown with frontmatter |
| Site Config | `config/site.ts` | TypeScript object |
| Navigation | `components/navigation/main-nav.tsx` | React component |
| Homepage Sections | `components/sections/` | React components |
| Styles | `app/globals.css` & `tailwind.config.js` | CSS & Config |
| Images | `public/images/` | Static files |

### Quick Commands
```bash
# Add blog post
touch content/blog/my-new-post.md

# Add project
# Edit data/projects.ts

# Test changes
npm run dev

# Deploy
npm run build
```

---

## 🎉 Next Steps

1. **Customize site config** in `config/site.ts`
2. **Add your projects** to `data/projects.ts`
3. **Write your first blog post** in `content/blog/`
4. **Update the about section** in `components/sections/about-section.tsx`
5. **Add your images** to `public/images/`
6. **Test everything** with `npm run dev`
7. **Deploy** to your preferred platform

Your portfolio is now ready to showcase your work! 🚀 