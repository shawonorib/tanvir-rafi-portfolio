import { motion } from 'framer-motion'

const skillGroups = [
  {
    num: '01',
    category: 'Project Management',
    skills: [
      'Project Planning',
      'Scope & Priorities',
      'Task Coordination',
      'Risk Awareness',
      'Progress Tracking',
    ],
  },
  {
    num: '02',
    category: 'Teamwork',
    skills: [
      'Clear Communication',
      'Stakeholder Alignment',
      'Team Collaboration',
      'Documentation',
      'Problem Solving',
    ],
  },
  {
    num: '03',
    category: 'Development',
    skills: [
      'JavaScript / TypeScript',
      'React & Node.js',
      'REST APIs',
      'SQL & Databases',
      'Git & GitHub',
    ],
  },
  {
    num: '04',
    category: 'Delivery',
    skills: [
      'Agile Workflows',
      'Requirements Breakdown',
      'Quality Review',
      'Process Improvement',
      'Idea to Launch',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-xs text-gray-600 tracking-[0.3em] uppercase">02 / Expertise</span>
          <div className="w-6 h-px bg-gray-700 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          SKILLS
        </motion.h2>

        {/* Skill Groups — stark numbered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800 border border-gray-800">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
              className="bg-[#0d0d0d] p-8 md:p-10"
            >
              <span className="text-xs text-gray-700 block mb-8 font-mono">
                {group.num}
              </span>
              <h3 className="text-xs text-white tracking-[0.3em] uppercase mb-6">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-display text-xl lg:text-2xl text-gray-400 leading-tight tracking-tight"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
