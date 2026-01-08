# HLPFL Sales Training Platform - Setup Guide

Complete guide for setting up and deploying the HLPFL Sales Training Platform for Noah Rank, Director of Sales.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** (alternative package manager)
- **Git** - [Download here](https://git-scm.com/)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code recommended)

### Verify Installation

Open your terminal and run:

```bash
node --version  # Should show v18.0.0 or higher
npm --version   # Should show 9.0.0 or higher
git --version   # Should show git version
```

## 🚀 Quick Start

### Option 1: Clone from GitHub (Recommended)

1. **Navigate to your desired directory**
```bash
cd /path/to/your/projects
```

2. **Clone the repository**
```bash
git clone https://github.com/HLPFLCG/HLPFLsales.git
```

3. **Enter the project directory**
```bash
cd HLPFLsales
```

4. **Install dependencies**
```bash
npm install
```

5. **Start the development server**
```bash
npm run dev
```

6. **Open in browser**
```
Navigate to http://localhost:3000
```

### Option 2: Manual Setup

If you have the files manually:

1. **Create project directory**
```bash
mkdir HLPFLsales
cd HLPFLsales
```

2. **Initialize package.json**
```bash
npm init -y
```

3. **Install dependencies**
```bash
npm install react react-dom react-router-dom lucide-react recharts clsx date-fns
npm install -D @types/react @types/react-dom @vitejs/plugin-react typescript vite tailwindcss postcss autoprefixer
```

4. **Copy all project files**
   - Copy all files from the provided structure into your project directory

5. **Start development server**
```bash
npm run dev
```

## 📁 Understanding the Project Structure

### Key Directories

```
HLPFLsales/
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── Dashboard/      # Dashboard-specific components
│   │   └── Layout/         # Layout components (Header, Sidebar)
│   ├── data/              # Mock data and content
│   │   ├── mockData.ts     # Dashboard and team data
│   │   ├── rolePlayScenarios.ts  # Role-play scenarios
│   │   └── trainingModules.ts     # Training content
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## 🔧 Configuration

### TypeScript Configuration (`tsconfig.json`)

The project uses strict TypeScript settings for type safety:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "jsx": "react-jsx"
  }
}
```

### Tailwind CSS Configuration (`tailwind.config.js`)

Custom colors for HLPFL branding:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          // ... more shades
        },
        secondary: {
          50: '#f5f3ff',
          // ... more shades
        }
      }
    }
  }
}
```

**To customize colors**:
1. Edit `tailwind.config.js`
2. Update the `colors` object with your brand colors
3. Restart the development server

### Vite Configuration (`vite.config.ts`)

Vite is configured for optimal performance:

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  }
})
```

**To change port**:
```typescript
server: {
  port: 4000,  // Change to your preferred port
  host: true
}
```

## 📊 Data Management

### Mock Data Structure

The application currently uses mock data in `src/data/`:

#### `mockData.ts`
- Current user information
- Performance metrics
- Recent sales activities
- Team members
- Notifications

#### `trainingModules.ts`
- 10 comprehensive training modules
- Module sections and content
- Progress tracking
- Categories and tags

#### `rolePlayScenarios.ts`
- 10 role-play scenarios
- Conversation scripts
- Objectives and tips
- Difficulty levels

### Replacing Mock Data with Real API

To connect to a real backend:

1. **Create API service file**
```typescript
// src/services/api.ts
export const api = {
  getDashboardData: async () => {
    const response = await fetch('/api/dashboard');
    return response.json();
  },
  
  getTeamMembers: async () => {
    const response = await fetch('/api/team');
    return response.json();
  },
  
  // Add more API methods
};
```

2. **Update components to use API**
```typescript
import { useEffect, useState } from 'react';
import { api } from '../services/api';

export const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);
  
  useEffect(() => {
    api.getDashboardData().then(setMetrics);
  }, []);
  
  // Rest of component
};
```

3. **Add environment variables**
```bash
# .env
VITE_API_URL=https://api.hlpfl.com
VITE_API_KEY=your_api_key
```

## 🎨 Customization Guide

### Customizing Training Content

#### Adding a New Training Module

1. **Open `src/data/trainingModules.ts`**
2. **Add new module to the array**:
```typescript
{
  id: '11',
  title: 'Your Module Title',
  description: 'Module description',
  duration: 45, // minutes
  category: 'Sales Fundamentals',
  difficulty: 'Intermediate',
  completed: false,
  progress: 0,
  sections: [
    {
      id: '11-1',
      title: 'Section Title',
      content: 'Section content',
      type: 'text', // or 'video', 'interactive', 'quiz'
      completed: false,
      duration: 15
    },
    // Add more sections
  ],
  tags: ['tag1', 'tag2', 'tag3']
}
```

#### Adding a New Role-Play Scenario

1. **Open `src/data/rolePlayScenarios.ts`**
2. **Add new scenario to the array**:
```typescript
{
  id: '11',
  title: 'Scenario Title',
  description: 'Scenario description',
  category: 'Discovery Calls',
  difficulty: 'Medium',
  script: [
    {
      speaker: 'artist',
      text: 'Artist dialogue',
      type: 'question'
    },
    {
      speaker: 'salesperson',
      text: '[Your response]',
      type: 'response'
    }
    // Add more exchanges
  ],
  objectives: [
    'Objective 1',
    'Objective 2'
  ],
  tips: [
    'Tip 1',
    'Tip 2'
  ]
}
```

### Customizing User Interface

#### Changing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#your-lightest',
    500: '#your-main',
    900: '#your-darkest',
  },
  secondary: {
    // Your secondary colors
  }
}
```

#### Adding New Pages

1. **Create page component**:
```typescript
// src/pages/NewPage.tsx
import React from 'react';

export const NewPage: React.FC = () => {
  return (
    <div>
      <h1>New Page</h1>
      {/* Page content */}
    </div>
  );
};
```

2. **Add route in `App.tsx`**:
```typescript
<Route path="/new-page" element={<NewPage />} />
```

3. **Add navigation link in `Sidebar.tsx`**:
```typescript
{ name: 'New Page', href: '/new-page', icon: YourIcon },
```

## 🚢 Building for Production

### Build Process

1. **Create production build**
```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Optimize and bundle code
- Generate optimized CSS
- Create static assets in `dist/` directory

2. **Preview production build**
```bash
npm run preview
```

This will serve the production build locally for testing.

### Production Checklist

Before deploying:
- [ ] Update environment variables
- [ ] Replace mock data with real API calls
- [ ] Test all features thoroughly
- [ ] Check responsive design on multiple devices
- [ ] Optimize images and assets
- [ ] Set up error tracking
- [ ] Configure analytics
- [ ] Update README with deployment info

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect and configure the project
   - Click "Deploy"

3. **Custom domain** (optional)
   - Go to project settings in Vercel
   - Add your custom domain

### Option 2: Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy via Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/` folder
   - Or connect your GitHub repository

### Option 3: AWS S3 + CloudFront

1. **Create S3 bucket**
```bash
aws s3 mb s3://hlpfl-sales-training
```

2. **Upload build files**
```bash
aws s3 sync dist/ s3://hlpfl-sales-training --delete
```

3. **Configure as static website**
   - Enable static website hosting in S3
   - Set index document to `index.html`
   - Set error document to `index.html`

### Option 4: GitHub Pages

1. **Update `vite.config.ts`**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/HLPFLsales/', // Add your repository name
  server: {
    port: 3000,
    host: true
  }
})
```

2. **Build and deploy**
```bash
npm run build
```

3. **Enable GitHub Pages**
   - Go to repository settings
   - Enable GitHub Pages
   - Select `main` branch and `dist/` folder

## 🔐 Environment Variables

### Creating `.env` file

Create `.env` file in project root:

```bash
# API Configuration
VITE_API_URL=https://api.hlpfl.com
VITE_API_KEY=your_api_key_here

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NOTIFICATIONS=true

# Third-party Services
VITE_SENTRY_DSN=your_sentry_dsn
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

### Using Environment Variables in Code

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
const enableAnalytics = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';
```

## 🐛 Troubleshooting

### Common Issues

#### Issue: Port 3000 already in use
**Solution**: Change port in `vite.config.ts` or kill the process using port 3000

#### Issue: Module not found
**Solution**: Run `npm install` to ensure all dependencies are installed

#### Issue: TypeScript errors
**Solution**: Run `npm run type-check` to identify and fix type errors

#### Issue: Build fails
**Solution**: 
1. Clear node_modules: `rm -rf node_modules`
2. Reinstall: `npm install`
3. Try building again: `npm run build`

#### Issue: Styles not loading
**Solution**: Ensure Tailwind is properly configured and `index.css` imports `@tailwind` directives

### Getting Help

- Check the [Vite documentation](https://vitejs.dev/)
- Check the [React documentation](https://react.dev/)
- Check the [Tailwind CSS documentation](https://tailwindcss.com/)
- Review the project README.md

## 📚 Additional Resources

### Learning Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Development Tools
- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [React DevTools](https://react.dev/learn/react-developer-tools) - Browser extension
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## 🎯 Next Steps

After setup:

1. **Explore the application**
   - Navigate through all pages
   - Test all features
   - Review training content

2. **Customize for your needs**
   - Update branding and colors
   - Add your own training content
   - Configure team members

3. **Connect to real data**
   - Set up backend API
   - Replace mock data
   - Configure authentication

4. **Deploy to production**
   - Choose deployment platform
   - Configure CI/CD pipeline
   - Set up monitoring

5. **Train your team**
   - Onboard team members
   - Assign training modules
   - Track progress
   - Monitor performance

## ✅ Setup Complete

Congratulations! Your HLPFL Sales Training Platform is now set up and ready to use.

For questions or support, contact the development team or refer to the project documentation.

---

**Happy Training! 🎓**