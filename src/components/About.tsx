import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaRobot, FaRocket } from 'react-icons/fa'

const highlights = [
  {
    icon: <FaCode />,
    title: 'Full-Stack Development',
    description: 'Designing and delivering scalable applications end-to-end, from user experience to backend systems and data.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Applications',
    description: 'Building and maintaining production mobile apps used by large, active user bases.',
  },
  {
    icon: <FaRobot />,
    title: 'Intelligent Systems',
    description: 'Embedding intelligent, data-driven features into real-world products to improve usability and decision-making.',
  },
  {
    icon: <FaRocket />,
    title: 'Product & Startup Mindset',
    description: 'Iterating quickly, owning features end-to-end, and shipping high-quality solutions that create measurable impact.',
  },
]

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-purple-600/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <div className="glass-card p-5 sm:p-6 md:p-8 h-full flex flex-col justify-center">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                I'm a <span className="text-purple-400 font-semibold">product-driven software engineer</span> who builds systems that actually get used. I've worked across startups, nonprofits, and global teams, owning features end-to-end and turning ambiguous ideas into shipped products that improve real workflows.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                I focus on helping teams move faster and make better decisions by building <span className="text-blue-400 font-semibold">reliable</span>, <span className="text-teal-400 font-semibold">scalable</span>, and easy-to-use systems. I'm comfortable working in ambiguous environments and care deeply about user experience, long-term quality, and clear communication.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I think like a <span className="text-purple-400 font-semibold">builder</span>, not just a developer—focusing on outcomes, ownership, and iteration from idea to impact.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="glass-card p-4 sm:p-5 md:p-6 group cursor-default flex flex-col"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 group-hover:text-purple-300 transition-colors text-xl sm:text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
