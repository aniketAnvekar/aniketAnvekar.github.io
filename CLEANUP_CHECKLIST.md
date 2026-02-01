# Pre-GitHub Cleanup Checklist

## 🧹 Files to Remove

Run these commands from your project root:

```bash
# 1. Remove backup files
rm index.html.backup

# 2. Check if .venv exists and remove it
rm -rf .venv/

# 3. Verify node_modules will be ignored (should already be in .gitignore)
# Don't push node_modules - it's too large
```

## ✅ Verify Files to Keep

Ensure these ARE in your repo:

```
✓ app/                  - Next.js app directory
✓ components/           - React components
✓ public/               - Static assets (Images folder)
✓ lib/                  - Utilities
✓ package.json          - Dependencies list
✓ package-lock.json     - Dependency lock file
✓ next.config.js        - Next.js config
✓ tsconfig.json         - TypeScript config
✓ tailwind.config.ts    - Tailwind config
✓ postcss.config.js     - PostCSS config
✓ README.md             - Project documentation
✓ .gitignore            - Git ignore rules
✓ DEPLOYMENT_GUIDE.md   - This deployment guide
```

## 🚫 Files Git Will Ignore (DON'T Push)

These are already in .gitignore:

```
✗ node_modules/         - Will be installed with `npm install`
✗ .next/                - Build output (recreated on deploy)
✗ .venv/                - Python virtual environment
✗ .env                  - Environment variables
✗ .DS_Store             - macOS files
✗ .vscode/              - IDE settings (local only)
```

## 🔍 Pre-Push Verification

Before running `git push`, verify:

1. **Images folder exists**
   ```bash
   ls public/Images/
   # Should show: Aniket-IMG2.png, aws-icon.jpeg, etc.
   ```

2. **No large files accidentally staged**
   ```bash
   git status
   # Look for anything unexpected
   ```

3. **Build works locally**
   ```bash
   npm run build
   # Should complete without errors
   ```

4. **Dev server works**
   ```bash
   npm run dev
   # Visit http://localhost:3000 and test
   ```

## 📋 Git Commands (In Order)

```bash
# 1. Check what will be pushed
git status

# 2. Add all changes
git add .

# 3. Commit with meaningful message
git commit -m "Portfolio website with Next.js, Tailwind, and animations"

# 4. Verify remote is correct
git remote -v
# Should show: https://github.com/aniketAnvekar/aniketAnvekar.github.io.git

# 5. Push to GitHub
git push origin main
```

## ✨ After Push

Once pushed to GitHub:

1. Go to https://github.com/aniketAnvekar/aniketAnvekar.github.io
2. Verify all files are there
3. Go to https://vercel.com
4. Import the project
5. Wait for auto-deployment

**Done!** 🚀
