import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaRocket, FaMobileAlt } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  stack: string[]
  highlights: string[]
  github?: string
  demo?: string
  demoLabel?: string
  mobileApp?: string
  mobileAppLabel?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Meck Mindset',
    description: 'AI-Powered Habit Tracking Web Application with real-time coaching and personalized feedback.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Socket.IO', 'Tailwind', 'Framer Motion', 'Groq API'],
    highlights: [
      'Integrated AI coaching using Groq API for personalized habit recommendations',
      'Built real-time chat functionality with Socket.IO for instant feedback',
      'Achieved 100% feature reliability across all devices with responsive UI',
      'Implemented CI/CD via GitHub for seamless deployments',
    ],
    github: 'https://github.com/Venugopal1999/Meck_Mindset',
    demo: 'https://meck-mindset.vercel.app/',
    demoLabel: 'Live Website Link',
    featured: true,
  },
  {
    title: 'Inventory Manager',
    description: 'Multi-Tenant Inventory Management SaaS with Amazon-style UI and comprehensive module system.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
    highlights: [
      'Designed Amazon-style inventory management UI with intuitive workflows',
      'Built 10+ modules: catalog, warehouses, purchasing, sales, transfers, counts, reports',
      'Architected multi-tenant system supporting isolated business operations',
      'Created deploy-ready blueprint with 10-week roadmap for low-cost SaaS rollout',
    ],
    github: 'https://github.com/Venugopal1999/inventary_management',
    demo: 'https://inventary-management-three.vercel.app/',
    demoLabel: 'Live Website Link',
    mobileApp: 'https://drive.google.com/file/d/1HYUlBDFcz_6ZSE9CTRnW228dCDXycreo/view?usp=sharing',
    mobileAppLabel: 'Mobile Application Link',
    featured: true,
  },
  {
    title: 'AI Trip Planner SaaS',
    description: 'Full-stack travel planning application with AI-generated itineraries and real-time map visualization.',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'Mapbox', 'Stripe'],
    highlights: [
      'Built personalized travel itinerary generation using OpenAI API',
      'Integrated Mapbox for interactive real-time map visualization',
      'Increased user engagement by ~35% through responsive design and animated UI',
      'Implemented smart suggestions based on user preferences and travel history',
    ],
    github: 'https://github.com/Venugopal1999/AI_Trip_Planner',
    demo: '#',
    featured: true,
  },
  {
    title: 'LearnMate',
    description: 'AI-Powered Note Summarizer mobile app for students with file uploads and intelligent processing.',
    stack: ['React Native', 'Expo Router', 'Tailwind CSS', 'Firebase', 'Groq LLaMA-3 API'],
    highlights: [
      'Developed AI note summarization using Groq LLaMA-3 API',
      'Built file upload system with Firebase Storage for document management',
      'Reduced note retrieval time by ~40% through intelligent indexing',
      'Created intuitive mobile-first UI with smooth animations',
    ],
    github: 'https://github.com/Venugopal1999/learnmate',
    demo: '#',
  },
  {
    title: 'SmartHomes',
    description: 'E-commerce web application for smart home products with optimized search and product management.',
    stack: ['Java Servlets', 'React', 'MongoDB'],
    highlights: [
      'Built full-stack e-commerce platform with Java backend and React frontend',
      'Reduced product lookup time by ~25% through optimized database queries',
      'Implemented comprehensive product catalog with filtering and search',
      'Designed scalable architecture for handling high-traffic scenarios',
    ],
    github: 'https://github.com/Venugopal1999/Smarthomes',
    demo: '#',
  },
  {
    title: 'Realistic Shadow Generator',
    description: 'A compositing tool that generates realistic shadows with physically-inspired rendering, directional light control, and depth-aware warping.',
    stack: ['Python', 'TypeScript', 'NumPy', 'SciPy', 'PyQt6', 'Canvas API'],
    highlights: [
      'Implemented directional light control with adjustable angle (0-360°) and elevation (0-90°)',
      'Built dual implementations: Python CLI/GUI and TypeScript/Web with real-time preview',
      'Created depth map warping for shadows that bend to match uneven surfaces',
    ],
    github: 'https://github.com/Venugopal1999/Realistic-Shadow-Generator',
  },
  {
    title: 'Real-Time Audio Transcriber',
    description: 'Chrome Extension that captures audio from browser tabs or microphone and provides real-time transcription with session saving and multi-format export.',
    stack: ['Chrome Extension', 'TypeScript', 'Gemini API', 'Node.js', 'pnpm'],
    highlights: [
      'Built real-time transcription from microphone or browser tab audio using Gemini API',
      'Implemented auto-save sessions with export to .txt, .json, .vtt formats',
      'Created seamless side panel UI with minimal setup and instant live text display',
    ],
    github: 'https://github.com/Venugopal1999/realtime_transcriber',
    demo: 'https://drive.google.com/file/d/1QDu-SrjSSH9JrXIWRizOlJRZPExSM34Z/view?usp=sharing',
    demoLabel: 'Live Demo',
  },
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`project-card relative ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Neon Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute -top-3 -right-3 z-10">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-xs font-semibold"
          >
            <FaRocket size={10} />
            Featured
          </motion.div>
        </div>
      )}

      <div className="relative">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 gradient-text">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            >
              <FaGithub />
              GitHub
            </motion.a>
          )}
          {project.demo && project.demo !== '#' && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-xs sm:text-sm font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
            >
              <FaExternalLinkAlt />
              {project.demoLabel || 'Live Website Link'}
            </motion.a>
          )}
          {project.mobileApp && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.mobileApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 text-xs sm:text-sm font-medium hover:from-teal-500/30 hover:to-green-500/30 transition-all duration-300"
            >
              <FaMobileAlt />
              <span className="hidden sm:inline">{project.mobileAppLabel || 'Mobile App'}</span>
              <span className="sm:hidden">App</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-20 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-2">
            A collection of full-stack applications showcasing my expertise in
            React, AI integration, and scalable architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
