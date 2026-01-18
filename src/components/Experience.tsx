import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  type: 'work' | 'education'
  highlights: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack Developer',
    company: 'Community Dreams Foundation',
    location: 'Florida, United States',
    period: 'July 2025 - Present',
    type: 'work',
    highlights: [
      'Engineered scalable, secure application services with robust authentication, rate limiting, and data optimization, supporting 300+ active users with 99.9% uptime',
      'Designed and delivered real-time dashboards and workflows that reduced response turnaround by 40% across 200+ monthly submissions',
      'Automated build and deployment pipelines to streamline releases and reporting, reducing manual effort by ~30% and accelerating decision-making',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Hands Infotech Inc',
    location: 'Michigan, United States',
    period: 'August 2024 - May 2025',
    type: 'work',
    highlights: [
      'Built and maintained scalable application services with secure access controls, validation, and optimized data handling, supporting 120K+ records with reliable performance',
      'Delivered end-to-end product features including responsive user interfaces, backend logic, and database interactions, reducing manual operational errors by ~35%',
      'Optimized system performance and reliability through efficient data access patterns, API integrations, and deployment-ready workflows, improving query performance by ~25%',
    ],
  },
  {
    title: 'Mobile Application Developer',
    company: 'Tata Consultancy Services (TCS) - General Motors MyChevrolet App',
    location: 'Hyderabad, India',
    period: 'August 2021 - August 2023',
    type: 'work',
    highlights: [
      'Delivered high-performance application features at scale, supporting 100K+ monthly active users with reliable user experiences and production-level stability',
      'Implemented end-to-end features across user interfaces, service integrations, and data pipelines, improving engagement by ~30% and ensuring 99.9% data accuracy',
      'Streamlined delivery from design to production by translating design specifications into production-ready components and aligning development with modern build, test, and release workflows, reducing turnaround time by ~20%',
    ],
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'Illinois Institute of Technology',
    location: 'Chicago, USA',
    period: 'August 2024 - December 2024',
    type: 'work',
    highlights: [
      'Mentored 40+ students on full-stack and database projects (SQL, ER modeling, Agile)',
      'Created structured SQL DB design guides enabling students to complete 3 real-world projects with 90%+ accuracy',
      'Drove 15% improvement in project outcomes through hands-on guidance',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'HG Sports Analytics',
    location: 'Hyderabad, India',
    period: 'May 2020 - May 2021',
    type: 'work',
    highlights: [
      'Built React dashboards for 25+ athletes, enhancing real-time performance insights',
      'Developed Node.js + PostgreSQL APIs reducing data latency by 40%',
      'Improved match-day decision-making through accelerated analytics workflows',
    ],
  },
  {
    title: 'Master in Computer Science',
    company: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    period: 'August 2023 - May 2025',
    type: 'education',
    highlights: [
      'GPA: 3.7/4',
      'Courses: Enterprise Web Applications, Database Organization, Machine Learning, Big Data Technologies',
    ],
  },
  {
    title: 'Bachelors in Electronics and Communication Engineering',
    company: 'Gokaraju Rangaraju Institute of Engineering & Technology',
    location: 'Hyderabad, India',
    period: 'August 2017 - July 2021',
    type: 'education',
    highlights: [
      'GPA: 8.86/10',
      'Courses: OOPs, Cloud Computing, DSA using Python',
    ],
  },
]

const ExperienceCard = ({
  item,
  index,
}: {
  item: ExperienceItem
  index: number
}) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 z-10">
        <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-30" />
      </div>

      {/* Content Card */}
      <div
        className={`w-full md:w-[calc(50%-40px)] ${
          isEven ? 'md:pr-8' : 'md:pl-8'
        } pl-10 sm:pl-12 md:pl-0`}
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass-card p-4 sm:p-5 md:p-6 relative overflow-hidden group"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative">
            {/* Icon & Period */}
            <div className="flex items-center justify-between mb-2 sm:mb-3 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                  {item.type === 'work' ? (
                    <FaBriefcase className="text-purple-400 text-sm sm:text-base" />
                  ) : (
                    <FaGraduationCap className="text-blue-400 text-sm sm:text-base" />
                  )}
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                  {item.type === 'work' ? 'WORK' : 'EDUCATION'}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-purple-400 font-medium">
                {item.period}
              </span>
            </div>

            {/* Title & Company */}
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">{item.title}</h3>
            <p className="text-sm sm:text-base text-purple-300 font-medium mb-1">{item.company}</p>
            <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{item.location}</p>

            {/* Highlights */}
            <ul className="space-y-1.5 sm:space-y-2">
              {item.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 mt-1.5 sm:mt-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-[calc(50%-40px)]" />
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />

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
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-2">
            My professional journey building scalable applications, leading
            projects, and continuous learning in software engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500" />

          {/* Experience Items */}
          {experiences.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
