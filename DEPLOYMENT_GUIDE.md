# Deployment Guide

## 🧹 Step 1: Clean Up the Repository

### Files to Remove Locally (don't push to GitHub)

Before pushing, remove these files from your local directory:

```bash
# Navigate to project root
cd aniketAnvekar.github.io

# Remove backup files
rm index.html.backup

# Remove old static files that are now in Next.js
# Keep index.html for reference, but the main source is in app/

# Remove Python virtual environment
rm -rf .venv/

# These will be ignored by .gitignore anyway:
rm -rf .next/
rm -rf node_modules/
```

### Recommended Folder Structure for GitHub

```
aniketAnvekar.github.io/
├── app/                    # Next.js app directory
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/             # React components
│   ├── sections/
│   ├── ui/
│   └── ...
├── public/                 # Static assets
│   └── Images/
├── lib/                    # Utilities
├── .gitignore              # Git ignore rules
├── package.json
├── next.config.js
├── tsconfig.json
├── README.md
├── DEPLOYMENT_GUIDE.md     # This file
└── ...other config files
```

### What NOT to Push

The `.gitignore` already excludes:
- `node_modules/` - Dependencies (install via `npm install`)
- `.next/` - Build output
- `.env` files - Never commit secrets
- `.vscode/`, `.idea/` - IDE settings
- `.DS_Store` - macOS files
- `package-lock.json` - Optional (but recommended to keep for consistency)

---

## 🚀 Step 2: Push to GitHub

### First Time Setup

```bash
cd aniketAnvekar.github.io

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website with Next.js"

# Add remote repository
git remote add origin https://github.com/aniketAnvekar/aniketAnvekar.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Regular Updates

```bash
git add .
git commit -m "Update: [description of changes]"
git push origin main
```

---

## 🌐 Step 3: Deploy to Vercel

Vercel is **the best choice** for Next.js projects - free, fast, and auto-deploys.

### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Use GitHub account
3. Click **"Import Project"**
4. Select your GitHub repository: `aniketAnvekar.github.io`
5. Vercel auto-detects it's a Next.js project
6. Click **"Deploy"**
7. Wait ~2-3 minutes
8. Your site is live at: `https://aniketAnvekar.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# From project root
cd aniketAnvekar.github.io

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new? → Create new
# - Project name? → aniketAnvekar-portfolio
# - Framework? → Next.js (auto-detected)
# - Build output? → .next
# - Environment variables? → Skip (unless you have .env vars)
```

### Option C: Connect Custom Domain (Optional)

1. In Vercel dashboard → Project Settings → Domains
2. Add your custom domain (e.g., `anikelanvekar.com`)
3. Follow DNS configuration steps
4. Wait for DNS propagation (5-30 minutes)

---

## 🔄 Auto-Deploy on Every Push

After initial Vercel setup, **every push to GitHub main branch auto-deploys**:

```bash
git add .
git commit -m "Update experience section"
git push origin main

# Vercel automatically:
# ✓ Pulls latest code
# ✓ Installs dependencies (npm install)
# ✓ Builds project (npm run build)
# ✓ Deploys to production
# ✓ Shows build logs
```

---

## ✅ Verification Checklist

Before pushing to GitHub:

- [ ] Removed `index.html.backup`
- [ ] Removed `.venv/` directory
- [ ] `.gitignore` is properly configured
- [ ] `node_modules/` is NOT staged for commit
- [ ] `.next/` folder is NOT staged for commit
- [ ] `.env` files are NOT staged for commit
- [ ] `package.json` and `package-lock.json` are included
- [ ] All Next.js files (app/, components/, etc.) are included
- [ ] public/Images/ folder with all icons is included

---

## 🛠️ Troubleshooting

### "Build failed on Vercel"

**Check:**
```bash
# Build locally to test
npm run build

# Check for errors
npm run dev
```

**Common fixes:**
- Missing environment variables → Add in Vercel dashboard Settings → Environment Variables
- Image paths wrong → Ensure images use `/Images/` (with leading slash)
- TypeScript errors → Check tsconfig.json

### "Images not loading on Vercel"

Ensure paths start with `/`:
```jsx
// ✗ Wrong
<img src="Images/aws-icon.jpeg" />

// ✓ Correct
<img src="/Images/aws-icon.jpeg" />
```

### "Page loads but styling is broken"

This usually means Tailwind CSS isn't built:
```bash
# Rebuild locally
rm -rf .next node_modules
npm install
npm run build
```

---

## 📊 Vercel Features You Get (Free)

✅ Auto HTTPS/SSL  
✅ Global CDN  
✅ Automatic deployments  
✅ Preview URLs for pull requests  
✅ Analytics  
✅ Up to 100GB bandwidth  
✅ Unlimited projects  
✅ Unlimited teammates  

---

## 📚 Quick Reference

| Command | Purpose |
|---------|---------|
| `git add .` | Stage all changes |
| `git commit -m "message"` | Commit changes |
| `git push origin main` | Push to GitHub |
| `npm run dev` | Local development (localhost:3000) |
| `npm run build` | Build for production |
| `vercel` | Deploy via CLI |

---

## 🎉 You're Done!

Your portfolio is now:
- ✅ On GitHub with clean repo
- ✅ Auto-deploying to Vercel
- ✅ Live at `https://aniketAnvekar.vercel.app`
- ✅ Updated instantly on every push

**Next steps:**
1. Share your portfolio link
2. Continue making updates locally → `git push` → Auto-deploys
3. Monitor analytics on Vercel dashboard
