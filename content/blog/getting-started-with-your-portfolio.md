---
title: "Getting Started with Your Portfolio Blog"
description: "Learn how to write and publish your first blog post using the new markdown system."
date: "2024-01-20"
published: true
featured: false
category: "Tutorial"
tags: ["Portfolio", "Blogging", "Markdown", "Getting Started"]
author: "Rohit"
readTime: "5 min read"
---

# Getting Started with Your Portfolio Blog

Welcome to your new markdown-powered blog! This guide will show you how to create, write, and publish blog posts using the new system.

## Creating a New Blog Post

To create a new blog post, simply create a new `.md` file in the `content/blog/` directory. The filename will become the URL slug, so choose wisely!

### File Naming Convention

```
content/blog/your-post-title.md
```

- Use lowercase letters
- Replace spaces with hyphens
- Keep it descriptive but concise

## Writing Your Post

Each blog post starts with **frontmatter** - metadata about your post:

```yaml
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
date: "2024-01-20"
published: true
featured: false
category: "Your Category"
tags: ["Tag1", "Tag2", "Tag3"]
author: "Your Name"
readTime: "5 min read"
---
```

### Frontmatter Fields

- **title**: The post title (displayed as H1)
- **description**: SEO description and preview text
- **date**: Publication date in YYYY-MM-DD format
- **published**: Set to `false` to save as draft
- **featured**: Set to `true` to show on homepage
- **category**: Post category for organization
- **tags**: Array of tags for filtering
- **author**: Author name
- **readTime**: Estimated reading time

## Markdown Features

The blog supports full GitHub Flavored Markdown with syntax highlighting:

### Code Blocks

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`)
}

greet("World")
```

```python
def calculate_fibonacci(n):
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

print(calculate_fibonacci(10))
```

### Lists and Typography

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- `Inline code` for technical terms
- [Links](https://example.com) to external resources

1. Numbered lists for sequences
2. Use them for step-by-step guides
3. They auto-increment

### Tables

| Feature | Status | Notes |
|---------|--------|-------|
| Markdown | ✅ | Full GFM support |
| Syntax Highlighting | ✅ | Via highlight.js |
| Math | ❌ | Could be added later |

### Blockquotes

> "The best way to get started is to quit talking and begin doing." - Walt Disney

## Publishing Your Post

1. **Create** your `.md` file in `content/blog/`
2. **Write** your content using markdown
3. **Set** `published: true` in frontmatter
4. **Save** the file
5. **Build** the site with `npm run build`

Your post will automatically appear in:
- The blog listing page (`/blog`)
- Homepage (if `featured: true`)
- RSS feed
- Sitemap

## Tips for Great Blog Posts

### Content Structure
- Start with a clear introduction
- Use headings to organize content
- Include code examples when relevant
- End with a conclusion or call-to-action

### SEO Optimization
- Write descriptive titles
- Use relevant tags and categories
- Include internal and external links
- Keep descriptions under 160 characters

### Visual Appeal
- Break up text with headings
- Use code blocks for technical content
- Include lists for easy scanning
- Keep paragraphs reasonably short

## Next Steps

Now you're ready to start blogging! Some ideas for your first posts:

- Share a project you've worked on
- Write a tutorial on something you've learned
- Discuss industry trends or technologies
- Document your learning journey

Happy writing! 🚀 