# Aniket Anvekar's Portfolio

A modern, responsive portfolio website for Aniket Anvekar, Data Scientist & GenAI Engineer.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with Radix UI
- **Icons**: Lucide React
- **Notifications**: Sonner

## 📋 Project Structure

```
app/
├── layout.tsx          # Root layout with theme provider
├── page.tsx            # Home page with all sections
└── globals.css         # Global styles

components/
├── header.tsx          # Navigation header
├── footer.tsx          # Footer
├── theme-provider.tsx  # Theme context provider
├── theme-toggle.tsx    # Theme switcher
├── loader.tsx          # Page loader
├── cursor-wrapper.tsx  # Custom cursor
├── theme-fade.tsx      # Theme transition effect
├── ui/                 # Reusable UI components
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── sheet.tsx
│   ├── input.tsx
│   └── sonner.tsx
└── sections/           # Page sections
    ├── hero-section.tsx
    ├── about-section.tsx
    ├── experience-section.tsx
    ├── skills-section.tsx
    ├── projects-section.tsx
    └── contact-section.tsx

lib/
└── utils.ts            # Utility functions (cn)
```

## 🎨 Sections

- **Hero**: Introduction with CTA buttons
- **About**: Personal bio with stats and education
- **Experience**: Timeline of work experience (3 positions)
- **Skills**: Technical expertise organized by category
- **Projects**: Featured portfolio projects
- **Contact**: Contact form and information

## 🎯 Features

- 📱 Fully responsive design
- 🌓 Multiple theme support (8 themes)
- ✨ Smooth animations with Framer Motion
- 🎨 Modern gradient effects
- ⌨️ Keyboard navigation
- ♿ Accessible UI components
- 📊 Skill progress bars with scroll animation

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content

The portfolio contains Aniket's:
- **Experience**: GenAI Engineer at Vanguard, AWS AI Engineer, Backend Lead
- **Skills**: Generative AI, Machine Learning, NLP, AWS, Python, Data Engineering
- **Projects**: Legal Q&A system, Disease classification, Data analytics
- **Contact**: Email, phone, and location information

## 📁 Images & Assets

Place your files in:
- `/public/Images/` - Profile images
- `/public/Documents/` - Resume and PDFs

## 🎨 Customization

### Theme Variables
Edit `app/globals.css` to customize colors and theme variables:
```css
--primary: 262 80% 50%;
--background: 222.2 84% 4.9%;
/* etc */
```

### Content
Update section content in:
- `components/sections/*/experience-section.tsx`
- `components/sections/*/skills-section.tsx`
- `components/sections/*/projects-section.tsx`

## 📄 License

© 2024 Aniket Anvekar. All rights reserved.
My personal portfolio 
