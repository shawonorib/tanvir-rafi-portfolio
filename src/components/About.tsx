import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-xs text-gray-600 tracking-[0.3em] uppercase">01 / About</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Writing code on a laptop"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              IDEAS / PLANNING / EXECUTION
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm Tanvir Rafi, a project-minded developer from Dhaka,
              Bangladesh. I care about what makes an idea achievable: a clear
              goal, a practical plan, honest communication, and focused
              execution. Code is how I turn that thinking into something real.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "A GOOD IDEA NEEDS<br />
            <span className="text-white underline underline-offset-8">DIRECTION</span>, A PLAN,<br />
            AND THE CODE TO<br />
            MAKE IT REAL."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            PROJECT THINKING × CODE
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I am passionate about project management because strong outcomes
              depend on more than technical work alone. I enjoy defining scope,
              breaking complex goals into clear steps, coordinating people and
              priorities, and keeping delivery moving without losing sight of
              the original purpose.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team planning a project together"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              PROJECT PLANNING — FROM SCOPE TO DELIVERY
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Collaborating on a project"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              BUILDING PROJECTS — DHAKA / BANGLADESH
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Right now I'm sharpening my skills through personal and
              collaborative software projects. I want to work with teams that
              value initiative, accountability, and thoughtful execution—where
              I can organize the work, contribute code, solve real problems,
              and keep growing. <span className="text-white">Open for work — remote or on-site.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
