# 💼 Developer Portfolio

Modern, responsive portfolio website for Full-Stack Developer Vladimir. Built with React, TypeScript, and Vite.

## ✨ Features

- 🌐 **Bilingual Support**: Switch between Russian and English
- 📱 **Fully Responsive**: Optimized for mobile (375px), tablet (768px), and desktop (1440px)
- 🎨 **Modern Design**: Dark theme with blue accent, smooth animations
- ⚡ **Performance**: Built with Vite, optimized for speed
- 📧 **Contact Form**: Email validation with Telegram API integration (optional)
- 💼 **Project Showcase**: 3 featured projects with live demo links

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **CSS Modules** - Scoped styling without conflicts
- **React Hooks** - Modern state management

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone and install
git clone <repository-url>
cd portfolio
npm install

# Copy environment variables (optional, for Telegram integration)
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build & Deploy

```bash
npm run build   # Build for production
npm run preview # Preview the build locally
```

## 📁 Project Structure

```
src/
├── components/              # React components (6 sections)
│   ├── Header.tsx          # Navigation, language toggle
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Projects.tsx        # Projects grid
│   ├── ProjectCard.tsx     # Individual project card
│   ├── About.tsx           # About me section
│   ├── Contact.tsx         # Contact form with validation
│   └── Footer.tsx          # Footer
│
├── i18n/
│   └── translations.ts     # Russian/English translations
│
├── data/
│   └── projects.ts         # 3 featured projects
│
├── types/
│   └── index.ts           # TypeScript interfaces
│
├── App.tsx                 # Main component
└── index.css              # Global styles
```

## 📖 Sections

### Header
- Developer name & specialization
- Contact button (smooth scroll)
- RU/EN language toggle
- Sticky on scroll

### Hero
- Main title: "I build modern web solutions"
- Subtitle with tech stack
- CTA button to projects
- Animated gradient background

### Projects (3 Featured)

1. **Farm RPG Calculator**
   - PWA with 500+ users
   - React, Vite, Vercel
   - Live: farm-pink-gamma.vercel.app

2. **LogistixService**
   - Logistics company website
   - HTML/CSS/JavaScript
   - Live: logistixservice.ru

3. **IvinTrade**
   - FinTech crypto platform
   - Payment processing
   - Live: ivintrade.kg

### About Me
- Brief description
- Skills showcase
- 8 technology badges

### Contact
- Name & email fields
- Message textarea
- Email validation
- Telegram API integration (optional)
- Success/error messaging

### Footer
- Copyright info
- Responsive design

## 🎨 Design System

| Element | Color |
|---------|-------|
| Background | `#111827` (dark gray) |
| Text | `#ffffff` (white) |
| Accent | `#3B82F6` (blue) |
| Secondary | `#9ca3af` (light gray) |

## 📱 Responsive Breakpoints

```
Mobile:  375px  → 1 column layout
Tablet:  768px  → 2 column layout
Desktop: 1440px → Full 3 column grid
```

## ⚙️ Configuration

### Environment Variables

Create `.env.local` to enable Telegram notifications:

```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_from_botfather
VITE_TELEGRAM_CHAT_ID=your_chat_id
```

Without these, the form still works but won't send messages.

### Customize Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: 'project-id',
  titleRu: 'Название',
  titleEn: 'Title',
  descriptionRu: 'Описание на русском',
  descriptionEn: 'English description',
  technologies: ['React', 'TypeScript', 'Vite'],
  demoUrl: 'https://example.com'
}
```

### Update Translations

Edit `src/i18n/translations.ts` to modify Russian or English content.

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel dashboard
3. Select Vite framework
4. Deploy ✅

### Netlify
1. Connect GitHub repository
2. Select Vite as framework
3. Deploy ✅

### GitHub Pages / Own Server
```bash
npm run build
# Deploy the 'dist' folder
```

## 🚀 Performance

- **Lighthouse Score**: 95+
- **FCP**: < 1s
- **LCP**: < 2.5s
- **CLS**: < 0.1

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast compliance

## 🌍 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile | ✅ iOS/Android |

## 📄 License

MIT License - Use freely for your portfolio

## 👨‍💻 Author

Vladimir - Full-Stack Developer

---

**Questions?** Use the contact form on the website!

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
