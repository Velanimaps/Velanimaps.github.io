# Physics & Maths Tutor Website

A modern, professional website for Physics and Mathematics tutoring services for Grades 10, 11, and 12.

## 🌟 Features

- **Modern Design**: Dark theme with beautiful gradients and animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Easy to Customize**: All content in one config file
- **Fast Performance**: Built with Vite for optimal loading speed
- **SEO Ready**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
my-app/
├── src/
│   ├── sections/          # Page sections
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Subjects.tsx
│   │   ├── Resources.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── config.ts          # ⭐ ALL CONTENT HERE - Easy to edit
│   ├── App.tsx
│   └── index.css
├── dist/                  # Build output (for deployment)
├── index.html
└── package.json
```

## 🚀 Quick Start

### 1. Customize Your Content

Edit `src/config.ts` to customize all website content:

```typescript
export const siteConfig = {
  name: "Your Academy Name",
  tutor: {
    name: "Your Name",
    title: "Your Qualifications",
    bio: "Your bio...",
  },
  contact: {
    phone: "Your Phone",
    email: "Your Email",
  },
  // ... more options
};
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## 📤 Deploy to GitHub Pages (Free Hosting)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `your-username.github.io` (for user site) or any name (for project site)

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/your-username/your-repo.git

# Push
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**

### Step 4: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 5: Update vite.config.ts

Add `base` to your vite.config.ts:

```typescript
export default defineConfig({
  base: '/your-repo-name/', // Replace with your repo name
  plugins: [react()],
  // ...
});
```

For user sites (`username.github.io`), use:
```typescript
base: '/',
```

### Step 6: Deploy

Push the workflow file:

```bash
git add .
git commit -m "Add GitHub Actions workflow"
git push
```

Your site will be live at `https://your-username.github.io/your-repo-name/`

## 🎨 Customization Guide

### Changing Colors

Edit `src/index.css`:

```css
:root {
  --primary: 217 91% 60%;  /* Change primary color */
  --background: 222 47% 6%; /* Change background */
}
```

### Adding New Sections

1. Create a new file in `src/sections/`
2. Import and add it to `App.tsx`

### Adding Images

1. Place images in `public/` folder
2. Reference them in config:

```typescript
tutor: {
  image: "/your-image.jpg",
}
```

## 🛠️ Tech Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 📱 Sections Included

1. **Navigation** - Sticky header with smooth scroll
2. **Hero** - Animated intro with stats
3. **About** - Tutor profile and highlights
4. **Subjects** - Physics & Maths details
5. **Resources** - Study materials showcase
6. **Testimonials** - Student reviews carousel
7. **FAQ** - Accordion with common questions
8. **Contact** - Form and contact info
9. **Footer** - Links and social media

## 📝 License

MIT License - feel free to use for your tutoring business!

## 🤝 Support

For issues or questions, please open an issue on GitHub.
"# sciencegalore.github.io" 
