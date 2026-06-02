# Nymul Islam Moon - Portfolio (React Version)

A modern, fully functional React portfolio website converted from vanilla HTML/CSS/JS. Built with Vite, React Router, and Swiper.

## 🚀 Features

✅ **Responsive Design** — Mobile-first design that works on all devices (320px - 1200px+)
✅ **Multiple Pages** — Home (main portfolio) and dedicated Blog page with routing
✅ **Dark/Light/Dim Themes** — Full theme customization with localStorage persistence
✅ **Dynamic Content** — All content extracted into clean data files
✅ **Portfolio Filter** — Interactive filtering by category (All, Art, Creative, Design)
✅ **Blog Modal** — Click-to-read blog posts with modal view
✅ **Testimonial Carousel** — Swiper carousel with autoplay and pagination
✅ **Contact Form** — Integrated with Formspree for real submissions
✅ **Active Nav Highlighting** — Automatic nav link highlighting based on scroll position
✅ **Smooth Animations** — CSS transitions and keyframe animations throughout
✅ **Back-to-Top Button** — Floating action button with smooth scroll animation
✅ **Optimized Performance** — Vite + React for fast load times

## 📁 Project Structure

```
src/
├── components/          # React components (14 total)
├── pages/               # Page components (2 total)
├── data/                # Content data files (8 files)
├── assets/css/          # Stylesheet (copied from original)
├── App.jsx              # Router + theme state
└── main.jsx             # Entry point
```

## 🛠 Tech Stack

- **React 18+** — UI framework
- **Vite** — Modern build tool (replaces deprecated CRA)
- **React Router v6** — Client-side routing
- **Swiper v11** — Carousel component
- **CSS** — Reused from original HTML version
- **Font Awesome 6 + LineIcons** — Icon libraries (CDN)
- **Formspree** — Form submissions

## 🚀 Getting Started

```bash
cd /home/gl-70nymulislammoon/Project/ReactJS/portfolio

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | MainPage.jsx | Main portfolio (all 11 sections + blog modal) |
| `/blog` | BlogPage.jsx | Full blog listing + blog modal |

## ✨ Key Features

### 🎨 Theme Customization
- 4 font sizes (12px, 14px, 16px, 18px)
- 5 color palettes
- 3 background themes (Light, Dim, Dark)
- **Fully persistent** via localStorage

### 📑 Portfolio Filter
- Interactive category filtering (All, Art, Creative, Design)
- Smooth show/hide animations
- Real-time re-rendering

### 📚 Blog Modal
- Click any blog card to read full content
- Close via: X button, Escape key, outside click
- HTML content rendering

### 🎠 Testimonial Carousel
- Swiper carousel with autoplay (3s)
- Pagination dots
- Loop mode enabled

### 📧 Contact Form
- Controlled inputs (React state)
- Animated labels on focus/blur
- Formspree integration (`f/mbjnjvlb`)

## 📱 Responsive Design

Fully responsive at all breakpoints:
- **1200px+**: Desktop (3-column)
- **768-992px**: Tablet (2-column)
- **576-767px**: Mobile (1-column, hamburger)
- **<576px**: Small mobile (full optimization)

## 📊 Build Output

```
dist/index.html          0.70 kB
dist/assets/style.css   31.54 kB (6.53 kB gzipped)
dist/assets/app.js     354.06 kB (109.29 kB gzipped)
```

## 🎯 What Changed vs HTML Version

| Aspect | HTML | React |
|--------|------|-------|
| Structure | 2 separate HTML files | 1 SPA with React Router |
| Data | Hardcoded in HTML | Extracted to JS data files |
| State | Vanilla JS + DOM | React hooks (useState, useEffect) |
| Components | HTML (copy-paste) | React components |
| Interactivity | Event listeners + classList | React event handlers + state |
| Persistence | localStorage directly | useEffect + localStorage |

## 🔍 File Checklist

✅ All 14 components created
✅ All 2 pages created
✅ All 8 data files created
✅ CSS copied and integrated
✅ All images copied to public/assets/img/
✅ CDN links added (LineIcons, Font Awesome)
✅ Routing configured (React Router v6)
✅ Theme customizer with localStorage
✅ Blog modal functionality
✅ Portfolio filter with animation
✅ Contact form (Formspree ready)
✅ Production build successful (no errors)

## 🎓 Architecture Notes

- **Header.jsx** — Manages menu state, scroll tracking, active link highlighting
- **ThemeCustomizer.jsx** — Manages theme state, localStorage sync with multiple color palettes
- **BackToTopButton.jsx** — Floating action button that appears on scroll with smooth animations
- **MainPage.jsx** — Renders all 11 sections + manages blog modal state
- **BlogPage.jsx** — Renders full blog list + manages blog modal state
- **All sections** — Stateless, data-driven components

## 📝 Content Management

To update portfolio content, edit files in `src/data/`:
- `blogData.js` — Blog posts
- `portfolioData.js` — Portfolio items
- `skillsData.js` — Skills list
- `servicesData.js` — Services
- `experienceData.js` — Education + work experience
- `pricingData.js` — Pricing plans
- `factsData.js` — About section stats
- `testimonialsData.js` — Testimonials

## 🌐 Deployment

**Build:**
```bash
npm run build
```

**Deploy the `dist/` folder** to:
- Vercel (recommended for React)
- Netlify
- GitHub Pages
- Any static hosting

## ✅ Verification Checklist

- [ ] `npm run dev` starts without errors
- [ ] All 11 sections display on homepage
- [ ] Blog page shows all blog cards
- [ ] Blog modal opens/closes correctly (X, Escape, outside click)
- [ ] Portfolio filter works (all/art/creative/design)
- [ ] Theme panel opens and changes apply
- [ ] Theme settings persist after page reload
- [ ] Testimonial carousel autoplays
- [ ] Contact form (try submitting)
- [ ] Nav links highlight on scroll
- [ ] Mobile hamburger menu works
- [ ] Responsive on all screen sizes

## 📞 Support

For issues or questions about the React version, check:
1. **React Router docs**: https://reactrouter.com/
2. **Swiper React**: https://swiperjs.com/react
3. **Vite docs**: https://vitejs.dev/

---

**Project:** Nymul Islam Moon Portfolio (React)
**Last Updated:** June 1, 2026
**Status:** ✅ Complete & Production-Ready with Enhanced UI/UX
