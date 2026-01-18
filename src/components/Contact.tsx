import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const contactMethods = [
  {
    icon: <FaEnvelope className="text-lg sm:text-xl md:text-2xl" />,
    label: 'Email',
    value: 'kvenu9060@gmail.com',
    href: 'mailto:kvenu9060@gmail.com',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <FaLinkedin className="text-lg sm:text-xl md:text-2xl" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/venugopal-k',
    href: 'https://www.linkedin.com/in/venugopal-k-8138921a1/',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <FaGithub className="text-lg sm:text-xl md:text-2xl" />,
    label: 'GitHub',
    value: 'github.com/Venugopal1999',
    href: 'https://github.com/Venugopal1999',
    color: 'from-gray-600 to-gray-700',
  },
  {
    icon: <FaPhone className="text-lg sm:text-xl md:text-2xl" />,
    label: 'Phone',
    value: '(872) 230-0337',
    href: 'tel:+18722300337',
    color: 'from-teal-500 to-teal-600',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        className="absolute top-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-2">
            I'm always open to discussing new opportunities, collaborations, or
            interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-5 sm:p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-tr from-teal-500/10 to-purple-500/10 rounded-full blur-3xl" />

          <div className="relative">
            {/* Location */}
            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 text-gray-400 text-sm sm:text-base">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>USA (Open to Relocation)</span>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div
                    className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${method.color} text-white`}
                  >
                    {method.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500">{method.label}</p>
                    <p className="text-sm sm:text-base text-white font-medium group-hover:text-purple-300 transition-colors truncate">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <motion.a
                href="mailto:kvenu9060@gmail.com?subject=Let's%20Work%20Together"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white text-sm sm:text-base transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #3b82f6, #14b8a6)',
                  boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)',
                }}
              >
                <FaEnvelope />
                Let's Work Together
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &rarr;
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
