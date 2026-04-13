# 🏢 BharatTech Gurukul — React + Vite Website

**Owner:** Er. Vinay Kumar  
**Location:** Lucknow, India  
**Contact:** +91 9140254090

---

## ▶️ How to Run Locally

```bash
# Step 1: Extract the zip file
unzip bharattech-gurukul.zip
cd bharattech-gurukul

# Step 2: Install dependencies
npm install

# Step 3: Start development server
npm run dev
```

Open your browser at: **http://localhost:5173**

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

The production build will be in the `dist/` folder — upload this to any hosting service.

---

## 🌐 Free Hosting Options

| Platform | Steps |
|----------|-------|
| **Netlify** | Drag & drop the `dist/` folder at netlify.com |
| **Vercel** | Run `npx vercel` in project folder |
| **GitHub Pages** | Push to GitHub, enable Pages on `dist/` |

---

## 📁 Project Structure

```
bharattech-gurukul/
├── index.html                  ← SEO meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
└── src/
    ├── App.jsx                 ← Root layout
    ├── index.css               ← Global styles + utilities
    └── components/
        ├── Navbar.jsx          ← Sticky nav, hamburger menu
        ├── Hero.jsx            ← Hero section with floating icons
        ├── About.jsx           ← About + owner card
        ├── Services.jsx        ← 4 service cards
        ├── Gallery.jsx         ← Portfolio gallery grid
        ├── WhyUs.jsx           ← Why Choose Us + stats
        ├── Contact.jsx         ← Form + map + WhatsApp
        ├── Footer.jsx          ← Full footer
        └── FloatingButtons.jsx ← Fixed WhatsApp + Call buttons
```

---

## 🎨 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion** (animations)
- **React Icons** (all icons)

---

## ✏️ Customization

- **Phone number:** Search & replace `9140254090` with your number
- **Colors:** Edit `tailwind.config.js` → `brand` colors
- **Content:** Edit each component in `src/components/`
- **Google Maps:** Replace the embed URL in `Contact.jsx` with your exact location

---

*Built for BharatTech Gurukul — Er. Vinay Kumar, Lucknow*
