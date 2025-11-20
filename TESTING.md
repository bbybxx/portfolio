# Portfolio Testing Guide

## ✅ Features to Test

### 1. Header
- [ ] Click "Contact Me" button - scrolls to contact section
- [ ] Toggle language between RU/EN
- [ ] Header stays sticky when scrolling
- [ ] Logo and name display correctly

### 2. Hero Section
- [ ] Main title and subtitle visible
- [ ] CTA button visible
- [ ] Click "Explore My Work" - scrolls to projects
- [ ] Background gradient displays correctly
- [ ] Responsive on mobile (375px), tablet (768px), desktop (1440px)

### 3. Projects Section
- [ ] 3 projects visible: Farm RPG, LogistixService, IvinTrade
- [ ] Project cards have hover effect (elevation)
- [ ] Technology badges display for each project
- [ ] "View Demo" buttons working (open in new tab)
- [ ] Links correct:
  - Farm RPG: https://farm-pink-gamma.vercel.app
  - LogistixService: https://logistixservice.ru
  - IvinTrade: https://ivintrade.kg

### 4. About Section
- [ ] Title and description visible
- [ ] 8 skill tags display: React, TypeScript, Vite, Vercel, PWA, API Integration, Responsive Design, Performance Optimization
- [ ] Skill tags have hover effect
- [ ] Text is readable

### 5. Contact Form
- [ ] Name field accepts input
- [ ] Email field accepts input
- [ ] Message textarea accepts input
- [ ] Email validation works (reject invalid emails)
- [ ] "Send Message" button enabled
- [ ] Submit shows success message
- [ ] Form clears after submit
- [ ] (Optional) Telegram integration if .env.local configured

### 6. Footer
- [ ] Copyright year correct
- [ ] Text is readable
- [ ] Responsive design

### 7. Language Toggle
- [ ] Switch to Russian (РУ) - all text in Russian
- [ ] Switch to English (EN) - all text in English
- [ ] Language persists on page navigation
- [ ] All sections translated correctly

### 8. Responsive Design

#### Mobile (375px)
- [ ] Single column layout
- [ ] Navigation stack vertically
- [ ] Projects stack in 1 column
- [ ] Text sizes readable
- [ ] No horizontal scroll

#### Tablet (768px)
- [ ] Content properly spaced
- [ ] Projects in 2 columns
- [ ] Forms properly sized

#### Desktop (1440px)
- [ ] Full layout with 3 project columns
- [ ] Proper max-width container (1200px)
- [ ] Hover effects working

### 9. Smooth Scrolling
- [ ] Click header logo - no scroll
- [ ] Click "Contact Me" - smooth scroll to contact
- [ ] Click "Explore My Work" - smooth scroll to projects
- [ ] Internal navigation links smooth

### 10. Accessibility
- [ ] Tab navigation works
- [ ] Keyboard can access all buttons
- [ ] Form fields have proper labels
- [ ] Color contrast sufficient
- [ ] No accessibility errors in browser console

## 🚀 Performance Checklist

- [ ] Page loads in < 2 seconds
- [ ] No console errors
- [ ] No console warnings
- [ ] CSS modules properly scoped
- [ ] Images/assets load correctly
- [ ] Smooth animations (no jank)

## 📝 Telegram Integration (Optional)

1. Create Telegram bot with @BotFather
2. Copy bot token
3. Get your chat ID
4. Create `.env.local`:
   ```
   VITE_TELEGRAM_BOT_TOKEN=your_token
   VITE_TELEGRAM_CHAT_ID=your_chat_id
   ```
5. Restart dev server
6. Test contact form - message should appear in Telegram

## 🐛 Debugging

### Clear Cache
```bash
npm run build
npm run preview
```

### Check Errors
- Open browser DevTools (F12)
- Console tab for JavaScript errors
- Network tab for failed requests
- Application tab for service worker status

### TypeScript Errors
```bash
npm run build  # Compile check
```

## 📱 Device Testing

Use browser DevTools to test:
1. Press F12 → Toggle device toolbar (Ctrl+Shift+M)
2. Select specific device or set custom dimensions:
   - iPhone 14: 390x844
   - iPad Air: 768x1024
   - Desktop: 1440x900

## ✨ Visual Inspection

- [ ] Dark theme (gray/black background, white text)
- [ ] Blue accent color (#3B82F6) used in buttons/links
- [ ] Smooth shadows and transitions
- [ ] Professional appearance
- [ ] No visual glitches

## 🎯 SEO & Meta

- [ ] Page title correct
- [ ] Meta description present
- [ ] Open Graph tags for sharing
- [ ] Favicon displays

## 📊 Browser Testing

Test in:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (Chrome/Safari on phone)

---

**All tests passed?** Portfolio is ready for deployment! 🎉
