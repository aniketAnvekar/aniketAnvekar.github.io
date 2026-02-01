# Quick Start: Repo Cleanup & Deployment

## 📦 3-Step Process

### Step 1: Clean Up (5 minutes)

```bash
cd ~/Documents/Portfolio-AniketAnvekar/aniketAnvekar.github.io

# Remove backup files
rm index.html.backup

# Remove Python venv if exists
rm -rf .venv/

# Check git status
git status
```

**Expected output should show changes but NO node_modules, .next, etc.**

### Step 2: Push to GitHub (2 minutes)

```bash
# Add all changes
git add .

# Commit
git commit -m "Portfolio website: Next.js, Tailwind CSS, Framer Motion, and animations"

# Push
git push origin main
```

**Verify on GitHub:** https://github.com/aniketAnvekar/aniketAnvekar.github.io

### Step 3: Deploy to Vercel (5 minutes)

**Option A: One-Click (Easiest)**
1. Go to https://vercel.com/sign-up
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"
6. ✅ Live at `https://aniketAnvekar.vercel.app`

**Option B: CLI**
```bash
npm install -g vercel
vercel
# Follow prompts
```

---

## 🎯 What Each Tool Does

| Tool | Purpose | Cost |
|------|---------|------|
| **GitHub** | Version control & storage | Free |
| **Vercel** | Hosting & auto-deploy | Free for Next.js |
| **Your Domain** | Custom URL (optional) | Varies |

---

## 🔄 Workflow After Deployment

Every time you want to update your portfolio:

```bash
# 1. Make changes locally
# Edit files in VS Code

# 2. Test locally
npm run dev
# Visit http://localhost:3000

# 3. Push to GitHub
git add .
git commit -m "Update: [what changed]"
git push origin main

# 4. Vercel auto-deploys (automatic!)
# No need to do anything
# Your site updates in ~30-60 seconds
```

---

## ⚠️ Important Notes

### .gitignore (Already Updated)
- Prevents pushing large folders (node_modules, .next)
- Protects environment variables
- Keeps repo small & fast

### Images Path Fix Needed
If you see "Images not loading on Vercel", update:

```jsx
// In Next.js components, use:
<img src="/Images/aws-icon.jpeg" />  // ✓ Correct

// NOT:
<img src="Images/aws-icon.jpeg" />   // ✗ Wrong
```

### Local vs Production
- **Local**: `npm run dev` (development mode)
- **Vercel**: Auto-builds with `npm run build`
- **Both use same code** - just different environments

---

## 📊 Status Check

After deploying, verify:

1. **GitHub**
   - Visit: https://github.com/aniketAnvekar/aniketAnvekar.github.io
   - Should see: app/, components/, public/, package.json, etc.

2. **Vercel**
   - Visit: https://aniketAnvekar.vercel.app
   - Should see: Your portfolio live
   - Check deployments tab for logs

3. **Features Working**
   - Navigation scrolls smoothly
   - Animations work
   - Images load correctly
   - Mobile responsive

---

## 🆘 Common Issues & Fixes

### Issue: Build failed on Vercel
**Fix:**
```bash
# Test locally first
npm run build
npm run dev

# If works locally, check Vercel logs:
# Dashboard → Deployments → Click failed deploy → View logs
```

### Issue: Images showing 404
**Fix:**
- Ensure `/Images/` path in all components (with leading slash)
- Verify public/Images/ folder exists with all icons

### Issue: Styles look broken on production
**Fix:**
```bash
# Rebuild locally
rm -rf .next
npm run build
git add .
git commit -m "Rebuild"
git push origin main
```

---

## ✅ Verification Checklist (Before Pushing)

- [ ] Removed `index.html.backup`
- [ ] Removed `.venv/` folder
- [ ] `git status` shows clean
- [ ] `npm run build` succeeds
- [ ] `npm run dev` works on localhost:3000
- [ ] Images display correctly locally
- [ ] All navigation links work
- [ ] Ready to push!

---

## 📞 Next Steps

1. **Run cleanup** (follow Step 1)
2. **Push to GitHub** (follow Step 2)
3. **Deploy to Vercel** (follow Step 3)
4. **Share your portfolio!**

Your portfolio will be:
- ✅ Version controlled on GitHub
- ✅ Live on the internet
- ✅ Auto-updating on every push
- ✅ Fast with global CDN
- ✅ Free hosting

**Questions?** Check DEPLOYMENT_GUIDE.md or CLEANUP_CHECKLIST.md for detailed info.
