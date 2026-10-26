import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-image.jpg"
          alt="Developer workspace at night"
          className="w-full h-full object-cover object-center grayscale opacity-40"
        />
        {/* Gradient melts the photo into the page */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/70" />
      </div>

      {/* Content — anchored to the bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end px-4 sm:px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="w-full max-w-7xl mx-auto">
          {/* Open to work badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 border border-green-500/30 bg-green-500/5 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-green-400 uppercase tracking-[0.2em]">
              Open for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-display text-[13vw] sm:text-[11vw] md:text-hero leading-none tracking-tighter"
          >
            <span className="block text-white">TANVIR RAFI</span>
            <span className="block text-gray-700">PROJECT BUILDER</span>
          </motion.h1>

          {/* Bottom row — intro + location */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end gap-5 md:gap-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed"
            >
              Project-minded developer turning new ideas into working software.
              I bring structure to the process, clarity to the team, and code
              to the solution.
            </motion.p>
            <div className="hidden md:block w-px h-14 bg-gray-800" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-500 leading-loose"
            >
              Based in Dhaka, Bangladesh<br />
              Open to remote &amp; on-site
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
