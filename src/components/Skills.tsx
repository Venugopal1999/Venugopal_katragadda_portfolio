import { motion } from 'framer-motion'
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDotnet,
  SiLaravel,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiOpenai,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiMicrosoftazure,
  SiGithubactions,
  SiGit,
  SiJira,
  SiMysql,
  SiApachekafka,
  SiApachehadoop,
  SiApachespark,
  SiGo,
  SiRubyonrails,
  SiPhp,
  SiGraphql,
  SiApachehive,
  SiApachecassandra,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { FaDatabase, FaMobile, FaHtml5, FaCss3Alt } from 'react-icons/fa'

interface SkillCategory {
  title: string
  color: string
  skills: {
    name: string
    icon?: React.ReactNode
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    color: 'from-purple-500 to-purple-700',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Python', icon: <SiPython /> },
      { name: '.NET Core', icon: <SiDotnet /> },
      { name: 'Laravel', icon: <SiLaravel /> },
      { name: 'Go', icon: <SiGo /> },
      { name: 'Ruby on Rails', icon: <SiRubyonrails /> },
      { name: 'PHP', icon: <SiPhp /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
    ],
  },
  {
    title: 'Database',
    color: 'from-orange-500 to-orange-700',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'SQL Server', icon: <FaDatabase /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Cassandra', icon: <SiApachecassandra /> },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-blue-500 to-blue-700',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'React Native', icon: <FaMobile /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Angular', icon: <SiAngular /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
    ],
  },
  {
    title: 'AI & ML',
    color: 'from-teal-500 to-teal-700',
    skills: [
      { name: 'Groq API' },
      { name: 'OpenAI', icon: <SiOpenai /> },
      { name: 'Claude' },
      { name: 'LLaMA' },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'AWS SageMaker' },
      { name: 'Perplexity' },
      { name: 'Cursor' },
    ],
  },
  {
    title: 'Big Data & Streaming',
    color: 'from-yellow-500 to-yellow-700',
    skills: [
      { name: 'Hadoop', icon: <SiApachehadoop /> },
      { name: 'HDFS' },
      { name: 'Hive', icon: <SiApachehive /> },
      { name: 'Spark', icon: <SiApachespark /> },
      { name: 'Kafka', icon: <SiApachekafka /> },
      { name: 'Cassandra', icon: <SiApachecassandra /> },
      { name: 'MapReduce' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    color: 'from-pink-500 to-pink-700',
    skills: [
      { name: 'GitHub Actions', icon: <SiGithubactions /> },
      { name: 'Azure DevOps', icon: <SiMicrosoftazure /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'AWS', icon: <SiAmazon /> },
      { name: 'Azure', icon: <SiMicrosoftazure /> },
      { name: 'CI/CD' },
      { name: 'Git', icon: <SiGit /> },
      { name: 'Jira', icon: <SiJira /> },
    ],
  },
]

const SkillBadge = ({
  skill,
  index,
  categoryColor,
}: {
  skill: { name: string; icon?: React.ReactNode }
  index: number
  categoryColor: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="group relative"
    >
      <div
        className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r ${categoryColor} bg-opacity-10 border border-white/10 backdrop-blur-sm cursor-default transition-all duration-300 hover:border-white/30`}
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
        }}
      >
        {skill.icon && (
          <span className="text-base sm:text-lg text-white/80 group-hover:text-white transition-colors">
            {skill.icon}
          </span>
        )}
        <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </div>

      {/* Glow Effect on Hover */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${categoryColor} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
      />
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -left-40 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-full blur-3xl"
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
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-2">
            A comprehensive toolkit spanning full-stack development, AI/ML, and
            cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-4 sm:p-5 md:p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div
                  className={`w-1 h-6 sm:h-8 rounded-full bg-gradient-to-b ${category.color}`}
                />
                <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    categoryColor={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
