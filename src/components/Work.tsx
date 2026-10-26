import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-Commerce Platform',
    type: 'Product Delivery Project',
    description: 'Planned and built an online store from requirements through delivery, organizing the product catalog, checkout, inventory, and order-management work into clear milestones.',
    tech: ['Planning', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Task Management App',
    type: 'Team Coordination Tool',
    description: 'A practical workspace for turning goals into assigned tasks, deadlines, priorities, and visible progress—built to help teams stay aligned from kickoff to completion.',
    tech: ['Workflow', 'TypeScript', 'React', 'Collaboration'],
  },
  {
    title: 'Real-Time Chat Application',
    type: 'Communication Platform',
    description: 'A real-time team communication product with rooms, presence, and message history. The project balanced feature planning, technical decisions, and incremental delivery.',
    tech: ['Execution', 'React', 'Socket.io', 'Node.js'],
  },
  {
    title: 'University Portal',
    type: 'Systems Planning Project',
    description: 'A coordinated portal concept for enrollment, grades, schedules, and faculty administration, shaped by clear requirements and a structured implementation roadmap.',
    tech: ['Requirements', 'Java', 'MySQL', 'Delivery'],
  },
  {
    title: 'Idea Validation Lab',
    type: 'Concept-to-Code Experiments',
    description: 'A collection of small software experiments used to test new ideas quickly, define a useful first version, learn from the result, and decide what should be built next.',
    tech: ['Ideation', 'Scoping', 'Experimentation', 'Code'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-xs text-gray-600 tracking-[0.3em] uppercase">03 / Selected Work</span>
          <div className="w-6 h-px bg-gray-700 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          PROJECTS
        </motion.h2>

        {/* Numbered project rows */}
        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="group border-t border-gray-800 py-10 md:py-14"
            >
              <div className="flex items-start justify-between gap-6 md:gap-12">
                <div className="flex items-start gap-5 md:gap-10 min-w-0">
                  <span className="text-xs text-gray-700 font-mono mt-2 md:mt-3 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-none group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-gray-600 tracking-[0.3em] uppercase mt-3">
                      {project.type}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex flex-wrap gap-2 justify-end max-w-[16rem] shrink-0">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] text-gray-500 border border-gray-800 uppercase tracking-widest hover:border-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mt-6 md:mt-8 text-sm lg:text-base max-w-xl lg:max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-5 md:hidden">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[10px] text-gray-500 border border-gray-800 uppercase tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* GitHub CTA */}
        <motion.div
          {...fadeInUp}
          className="mt-12 lg:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-gray-700 px-6 py-3 text-xs text-gray-300 tracking-[0.3em] uppercase hover:bg-white hover:text-black hover:border-white transition-colors"
          >
            Discuss a project ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
