# Jatin Patel - Modern Portfolio Website

A stunning, modern portfolio website built with Next.js 14, featuring smooth animations, glassmorphism effects, and a beautiful dark theme with vibrant gradients.

## ✨ Features

- **Modern Design**: Clean, professional layout with creative visual flair
- **Dark Theme**: Deep navy base with electric blue, purple, and cyan accents
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Responsive**: Mobile-first design that looks great on all devices
- **Glassmorphism**: Modern glass effects with backdrop blur
- **Interactive Elements**: Hover effects, scroll reveals, and animated transitions
- **TypeScript**: Fully typed for better development experience
- **Performance**: Optimized for fast loading and smooth scrolling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jatinpatel-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set

## 📦 Project Structure

```
jatinpatel-website/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with typewriter effect
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Experience timeline
│   ├── Projects.tsx     # Projects grid
│   ├── Skills.tsx       # Skills visualization
│   ├── Education.tsx    # Education section
│   ├── Contact.tsx      # Contact form & social links
│   └── Navigation.tsx   # Navigation bar
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind configuration
```

## 🎨 Customization

### Update Personal Information

Edit the content in each component file:
- `components/Hero.tsx` - Name and tagline
- `components/About.tsx` - Bio and highlights
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Portfolio projects
- `components/Skills.tsx` - Technical skills
- `components/Education.tsx` - Educational background
- `components/Contact.tsx` - Contact information and social links

### Modify Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  electric: {
    blue: '#00d4ff',    // Customize
    purple: '#b429f9',  // Customize
    cyan: '#00fff5',    // Customize
  }
}
```

## 📱 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Jatin Patel**

- Portfolio: [jatinpatel.ai](https://jatinpatel.ai)
- GitHub: [@pateljatin](https://github.com/pateljatin)
- LinkedIn: [jatin1patel](https://linkedin.com/in/jatin1patel)

---

Built with ❤️ using Next.js and Framer Motion
