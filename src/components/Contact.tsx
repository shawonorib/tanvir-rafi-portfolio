import { motion } from 'framer-motion'

const infoRows = [
  { label: 'LOCATION', value: 'DHAKA, BANGLADESH' },
  { label: 'AVAILABILITY', value: 'REMOTE / ON-SITE' },
  { label: 'FOCUS', value: 'PROJECT MANAGEMENT & CODE' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-xs text-gray-600 tracking-[0.3em] uppercase">06 / Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Let's build<br />something
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-12 lg:mb-16"
        />

        {/* Open for work banner */}
        <motion.div
          {...fadeInUp}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 border border-gray-700 px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span className="text-xs text-white tracking-widest uppercase">
              Open for work — actively looking for opportunities
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
            I'M LOOKING FOR<br />
            PROJECT COORDINATION<br />
            & SOFTWARE ROLES
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            INTERNSHIPS, FULL-TIME ROLES, OR FREELANCE PROJECTS — ALL WELCOME
          </p>
        </motion.div>

        {/* Info Rows */}
        <div className="space-y-0 max-w-2xl">
          {infoRows.map((row, index) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 px-4 -mx-4"
            >
              <span className="text-sm text-gray-500 tracking-widest">
                {row.label}
              </span>
              <span className="text-sm text-gray-300 tracking-widest">
                {row.value}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Direct Contact */}
        <motion.div
          {...fadeInUp}
          className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800"
        >
          <p className="text-sm text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">
            Reach me directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16">
            <a
              href="mailto:tanvirrafi@gmail.com"
              className="text-lg lg:text-xl text-gray-300 tracking-widest hover:text-white transition-colors"
            >
              TANVIRRAFI@GMAIL.COM ↗
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 tracking-widest hover:text-white transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 tracking-widest hover:text-white transition-colors"
            >
              LINKEDIN ↗
            </a>
          </div>

          {/* CV Download */}
          <div className="mt-10">
            <a
              href="/Tanvir-Rafi-CV.pdf"
              download="Tanvir-Rafi-CV.pdf"
              className="inline-flex items-center gap-3 border border-gray-700 px-8 py-4 text-xs text-white tracking-[0.3em] uppercase hover:bg-white hover:text-black hover:border-white transition-colors"
            >
              Download CV ↓
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="select-none">
            <div className="font-display text-[18vw] leading-none tracking-tighter text-white/5 text-center">
              RAFI
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-6">
              <p className="text-[10px] uppercase tracking-[0.5em] text-gray-700">
                © {new Date().getFullYear()} Tanvir Rafi — All rights reserved
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-[10px] uppercase tracking-[0.5em] text-gray-600 hover:text-white transition-colors"
              >
                Contact ↗
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
