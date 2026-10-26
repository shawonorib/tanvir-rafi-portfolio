import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-xs text-gray-600 tracking-[0.3em] uppercase">04 / Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {/* B.Sc. — NSU */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="/education-cs.jpg"
                alt="North South University studies"
                className="w-full h-auto grayscale"
                loading="lazy"
                width={1200}
                height={800}
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                DHAKA / BANGLADESH
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="font-display text-2xl lg:text-4xl text-white leading-tight mb-4">
                  B.Sc.
                </h3>
                <p className="text-white text-sm lg:text-base tracking-[0.2em] uppercase mb-5">
                  North South University (NSU)
                </p>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Completed my Bachelor of Science at North South University —
                  the academic grounding behind how I learn: asking the right
                  questions, working in a structured way, and turning theory
                  into something that actually runs.
                </p>
                <p className="text-sm text-gray-500 tracking-widest uppercase">
                  Completed — Open for opportunities
                </p>
              </div>
            </motion.div>
          </div>

          {/* Project management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="font-display text-2xl lg:text-4xl text-white leading-tight mb-4">
                  Project Management — Applied Learning
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Alongside technical work, I continue to build practical
                  project-management skills: defining outcomes, organizing
                  tasks, setting priorities, documenting decisions, and
                  helping teams move from an early idea to a completed result.
                </p>
                <p className="text-sm text-gray-500 tracking-widest uppercase">
                  Ongoing — Always learning
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Project team reviewing plans"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                PLANNING / COORDINATION / DELIVERY
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
