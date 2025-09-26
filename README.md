# HTZ Oprema - Website

A simple web presentation for a Serbian company that manufactures protective clothing.
The entire website is vibe-coded using Cursor.

## Pages

- **Home** (`/`) - Hero section with company overview and services
- **About** (`/about`) - Company history, team, and technology
- **Services** (`/services`) - Detailed service offerings and descriptions
- **Contact** (`/contact`) - Contact information and business hours
- **404** (`/not-found`) - Custom error page with navigation suggestions

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript (ES6+)
- **Icons**: Heroicons (SVG)
- **Fonts**: Roboto (Google Fonts)
- **Images**: Next.js Image component with optimization

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   ├── components/
│   │   │   └── FAQ.js       # FAQ component (about page specific)
│   │   └── page.js          # About page
│   ├── contact/
│   │   └── page.js          # Contact page
│   ├── services/
│   │   └── page.js          # Services page
│   ├── components/
│   │   ├── Navigation.js    # Global navigation component
│   │   └── Footer.js        # Global footer component
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   ├── not-found.js         # 404 page
│   ├── error.js             # 500 page
│   ├── robots.js            # Robots.txt generator
│   ├── sitemap.js           # Sitemap.xml generator
│   └── page.js              # Home page
└── public/
    ├── hero-bg.jpg          # Hero background image
    └── contact-hero-bg.jpg  # Contact page background
```
