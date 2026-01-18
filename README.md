# Venugopal Katragadda - Portfolio

A premium, gradient + neon styled personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project folder:
```bash
cd venugopal_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Adding Your Resume

Place your resume PDF file in the `public` folder with the name `resume.pdf`:
```
public/resume.pdf
```

## Customization

### Updating Contact Information

Edit the following files to update your contact details:
- `src/components/Contact.tsx` - Email, LinkedIn, GitHub, Phone
- `src/components/Footer.tsx` - Social links

### Updating Projects

Edit `src/components/Projects.tsx` to add, modify, or remove projects.

### Updating Experience

Edit `src/components/Experience.tsx` to update work history and education.

### Updating Skills

Edit `src/components/Skills.tsx` to modify the skills grid.

## Deployment to Netlify

### Option 1: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 2: Git-based Deployment

1. Push your code to GitHub/GitLab/Bitbucket

2. Connect your repository to Netlify:
   - Go to https://app.netlify.com
   - Click "Add new site" > "Import an existing project"
   - Select your Git provider and repository

3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

4. Deploy!

### Netlify Configuration

The `netlify.toml` file is already configured with:
- Build command and publish directory
- SPA routing redirects (so `/mobile` works correctly)
- Security headers
- Asset caching

## Project Structure

```
venugopal_portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── MobilePage.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Routes

- `/` - Main landing page (Full-Stack + AI Portfolio)
- `/mobile` - Dedicated mobile development page

## License

MIT
