# Getting Started Guide

## 📋 Requirements

- **Node.js**: 16.0.0 or higher
- **npm**: 7.0.0 or higher
- **Git**: (optional, for version control)

Check your versions:
```bash
node --version    # Should be v16.0.0+
npm --version     # Should be 7.0.0+
```

---

## ⚡ Quick Start (2 minutes)

```bash
# 1. Navigate to project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173 (or 5174 if 5173 is busy)
```

✅ Your portfolio is now live locally!

---

## 🛠️ Available Commands

### Development
```bash
npm run dev
# Starts dev server with hot module replacement (HMR)
# Visit http://localhost:5173
```

### Build for Production
```bash
npm run build
# Creates optimized build in 'dist' folder
# Minifies code, optimizes assets, etc.
```

### Preview Production Build
```bash
npm run preview
# Shows what your site looks like in production
# Visit http://localhost:4173
```

### Type Checking
```bash
npm run tsc
# Checks for TypeScript errors without building
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/           # React components
│   │   ├── Header.tsx       # Navigation, language toggle
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── ProjectCard.tsx  # Individual project
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   │
│   ├── i18n/
│   │   └── translations.ts  # Russian & English text
│   │
│   ├── data/
│   │   └── projects.ts      # 3 featured projects
│   │
│   ├── types/
│   │   └── index.ts         # TypeScript types
│   │
│   ├── App.tsx              # Main app component
│   ├── App.css              # Global styles
│   ├── index.css            # Root styles
│   └── main.tsx             # Entry point
│
├── dist/                    # Production build (generated)
├── public/                  # Static files
├── .env.example             # Environment template
├── .gitignore              # Git ignore rules
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
├── README.md               # Documentation
├── TESTING.md              # Testing guide
└── DEPLOYMENT.md           # Deployment guide
```

---

## 🎨 Customization

### 1. Change Your Information

Edit `src/components/Header.tsx`:
```typescript
<h1>{translations.header.name}</h1>  // Change "Vladimir"
```

Edit `src/i18n/translations.ts`:
```typescript
ru: {
  header: {
    name: 'Your Name',  // ← Change here
    ...
  }
}
```

### 2. Update Projects

Edit `src/data/projects.ts`:
```typescript
{
  id: 'project-id',
  titleRu: 'Название проекта',
  titleEn: 'Project Title',
  descriptionRu: 'Описание...',
  descriptionEn: 'Description...',
  technologies: ['React', 'TypeScript'],
  demoUrl: 'https://project.com'
}
```

### 3. Change Colors

Edit component CSS files. Main color: `#3B82F6` (blue)

Search and replace:
- `#3B82F6` - Primary accent
- `#111827` - Dark background
- `#ffffff` - White text

### 4. Update About Section

Edit `src/components/About.tsx`:
```typescript
const skills = [
  'React', 'TypeScript', 'Vite',
  // Add/remove skills here
];
```

Edit `src/i18n/translations.ts` for about text.

---

## 🔐 Telegram Integration (Optional)

The contact form works without Telegram, but you can enable notifications:

### 1. Create Telegram Bot

- Open [@BotFather](https://t.me/botfather)
- Send `/newbot`
- Follow instructions to create bot
- Copy the bot token

### 2. Get Your Chat ID

- Open [@userinfobot](https://t.me/userinfobot)
- It will show your chat ID

### 3. Configure

Create `.env.local` in project root:
```env
VITE_TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklmnoPQRstuvWXYZ
VITE_TELEGRAM_CHAT_ID=123456789
```

### 4. Test

1. Restart dev server: `npm run dev`
2. Fill contact form and submit
3. Message appears in Telegram

---

## 🧪 Testing

See [TESTING.md](./TESTING.md) for comprehensive testing guide.

Quick test:
1. npm run dev
2. Test all sections
3. Test language toggle
4. Test responsive design (F12 → device toolbar)
5. Test contact form

---

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

Quick deploy to Vercel:
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

---

## 🐛 Common Issues

### "npm command not found"
- Install Node.js from [nodejs.org](https://nodejs.org)
- Restart terminal after installation

### "Port 5173 is already in use"
- Vite automatically tries 5174, 5175, etc.
- Or: Kill the process on port 5173
  ```bash
  # Windows
  netstat -ano | findstr :5173
  taskkill /PID <PID> /F
  ```

### "Module not found" errors
- Delete node_modules and package-lock.json
- Run `npm install` again

### TypeScript errors
- Run `npm run build` to see all errors
- Check file imports use correct paths
- Ensure all types are imported as `type`

### Contact form not sending
- Check browser console (F12)
- Verify .env.local has correct credentials
- Restart dev server after changing .env

---

## 📚 Learning Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vitejs.dev)
- [CSS Modules Guide](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)

---

## ✨ Tips

- Use VS Code for best development experience
- Install "ES7+ React/Redux/React-Native snippets" extension
- Press F12 to open DevTools for debugging
- Use `console.log()` for debugging
- Hot Module Replacement (HMR) - changes auto-refresh!

---

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Test all features
4. ✅ Customize your info
5. ✅ Deploy to Vercel/Netlify
6. ✅ Share your portfolio!

---

## 📧 Questions?

If something doesn't work:
1. Check this guide again
2. Check console errors (F12)
3. Try `npm run build` for detailed errors
4. Delete node_modules and reinstall
5. Check platform-specific guides (DEPLOYMENT.md, TESTING.md)

**Happy coding! 🎉**
