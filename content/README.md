# Content Directory

This directory contains all the markdown content for your portfolio blog.

## Blog Posts

Place your blog post markdown files in the `blog/` directory. Each file should:

1. **Use `.md` extension**
2. **Have a filename that becomes the URL slug**
3. **Include frontmatter with metadata**

### Example Blog Post Structure

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO and previews"
date: "2024-01-20"
published: true
featured: false
category: "Your Category"
tags: ["Tag1", "Tag2", "Tag3"]
author: "Your Name"
readTime: "5 min read"
---

# Your Post Title

Your markdown content goes here...
```

### Frontmatter Fields

- **title**: Post title (required)
- **description**: SEO description (required)
- **date**: Publication date in YYYY-MM-DD format (required)
- **published**: Set to `false` for drafts (default: true)
- **featured**: Set to `true` to show on homepage (default: false)
- **category**: Post category for organization
- **tags**: Array of tags for filtering
- **author**: Author name
- **readTime**: Estimated reading time

## Adding New Posts

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter at the top
3. Write your content in markdown
4. Build the site with `npm run build`

## Supported Markdown Features

- **Headers** (H1-H6)
- **Bold** and *italic* text
- `Inline code`
- Code blocks with syntax highlighting
- Lists (ordered and unordered)
- Links and images
- Tables
- Blockquotes
- GitHub Flavored Markdown (GFM)

## Examples

Check out the existing blog posts for examples:
- `building-modern-web-applications-nextjs-14.md`
- `understanding-machine-learning-fundamentals.md`
- `getting-started-with-your-portfolio.md` 