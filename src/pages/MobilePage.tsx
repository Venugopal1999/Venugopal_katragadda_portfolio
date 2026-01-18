import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaReact,
  FaMobileAlt,
  FaRocket,
  FaCloudDownloadAlt,
  FaBluetooth,
  FaDatabase,
  FaCog,
  FaPaintBrush,
  FaGithub,
  FaArrowLeft,
} from 'react-icons/fa'
import {
  SiExpo,
  SiRedux,
  SiFirebase,
  SiTypescript,
  SiJest,
} from 'react-icons/si'

const mobileProjects = [
  {
    title: 'MyChevrolet App',
    company: 'General Motors (via TCS)',
    description:
      'Enterprise mobile application for Chevrolet vehicle owners with real-time vehicle data integration and cloud connectivity.',
    stack: ['React Native', 'Redux', 'Jest', 'Java/Spring Boot', 'Kafka', 'PostgreSQL', 'AWS'],
    highlights: [
      'Built and deployed core mobile features serving 100K+ monthly active users',
      'Achieved 30% increase in user engagement through optimized UI/UX',
      'Reduced design-to-deployment cycle time by 20% via streamlined workflows',
      'Integrated secure vehicle data APIs with 99.9% data accuracy',
      'Implemented comprehensive test coverage with Jest and React Testing Library',
    ],
    impact: '100K+ MAUs',
    github: '#',
  },
  {
    title: 'LearnMate',
    description:
      'AI-powered note summarization app for students with intelligent document processing and instant summaries.',
    stack: ['React Native', 'Expo Router', 'Tailwind CSS', 'Firebase', 'Groq LLaMA-3 API'],
    highlights: [
      'Built AI note summarization using Groq LLaMA-3 API for instant document processing',
      'Implemented file upload system with Firebase Storage for seamless document management',
      'Reduced note retrieval time by 40% through intelligent indexing and caching',
      'Created mobile-first UI with smooth animations and intuitive navigation',
      'Integrated real-time sync across devices with Firebase Realtime Database',
    ],
    impact: '40% faster retrieval',
    github: 'https://github.com/kvenu9060/learnmate',
  },
]

const mobileSkills = [
  { name: 'React Native', icon: <FaReact />, description: 'Expo & Bare workflows' },
  { name: 'Expo', icon: <SiExpo />, description: 'Managed & development builds' },
  { name: 'Redux Toolkit', icon: <SiRedux />, description: 'State management' },
  { name: 'TypeScript', icon: <SiTypescript />, description: 'Type-safe development' },
  { name: 'Firebase', icon: <SiFirebase />, description: 'Auth, Storage, Realtime DB' },
  { name: 'Jest', icon: <SiJest />, description: 'Testing & coverage' },
]

const mobileStrengths = [
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Pixel-perfect Figma-to-code implementation with attention to platform guidelines.',
  },
  {
    icon: <FaRocket />,
    title: 'Navigation Patterns',
    description: 'Stack, tab, drawer navigation with deep linking and state persistence.',
  },
  {
    icon: <FaCloudDownloadAlt />,
    title: 'API Integration',
    description: 'REST/GraphQL consumption with offline-first architecture and sync strategies.',
  },
  {
    icon: <FaCog />,
    title: 'Native Capabilities',
    description: 'Camera, file uploads, push notifications, and device sensors integration.',
  },
  {
    icon: <FaBluetooth />,
    title: 'BLE & Native Modules',
    description: 'Experience integrating Bluetooth, native modules, and platform-specific features.',
  },
  {
    icon: <FaDatabase />,
    title: 'Performance',
    description: 'Memory optimization, lazy loading, and efficient list rendering with FlatList.',
  },
]

const MobilePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FaArrowLeft />
              Back to Home
            </Link>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-white/10 mb-6"
          >
            <FaMobileAlt size={36} className="text-teal-400" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Mobile Application Development</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-4"
          >
            Cross-platform apps with React Native and AI
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Building fast, intuitive, and visually polished mobile applications
            with React Native. From concept to App Store, I deliver experiences
            that users love.
          </motion.p>
        </div>
      </section>

      {/* Mobile Projects */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Mobile Spotlight Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Production mobile applications showcasing React Native expertise
              and scalable architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mobileProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 relative group"
              >
                {/* Impact Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full text-xs font-semibold">
                    <FaRocket size={10} />
                    {project.impact}
                  </div>
                </div>

                <h3 className="text-2xl font-bold gradient-text mb-2">
                  {project.title}
                </h3>
                {project.company && (
                  <p className="text-purple-400 font-medium mb-3">{project.company}</p>
                )}
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {project.github !== '#' && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300"
                  >
                    <FaGithub />
                    View on GitHub
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Tech Stack */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Mobile Tech Stack</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies I use to build performant cross-platform mobile applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mobileSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-4 text-center group cursor-default"
              >
                <div className="text-3xl text-teal-400 mb-3 flex justify-center group-hover:text-teal-300 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                <p className="text-xs text-gray-500">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Engineering Strengths */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Mobile Engineering Strengths</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Core competencies that enable me to deliver production-ready mobile applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileStrengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500/20 to-purple-500/20 text-teal-400 group-hover:text-teal-300 transition-colors">
                    {strength.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{strength.title}</h3>
                </div>
                <p className="text-gray-400">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="gradient-text">Need a Mobile App?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Let's discuss your mobile project. I can help you build cross-platform
              applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:kvenu9060@gmail.com?subject=Mobile%20App%20Project"
                className="btn-primary"
              >
                Discuss Your Project
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/#projects" className="btn-secondary">
                  View All Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MobilePage
