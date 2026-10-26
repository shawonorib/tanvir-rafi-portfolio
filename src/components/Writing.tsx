import { motion } from 'framer-motion'

const articles = [
  {
    title: 'Turning a Rough Idea Into an Actionable Project Plan',
    publication: 'Planned Article',
  },
  {
    title: 'Why Clear Scope Is the Start of Better Software',
    publication: 'Planned Article',
  },
  {
    title: 'Keeping Technical Teams Aligned Without Slowing Them Down',
    publication: 'Planned Article',
  },
  {
    title: 'Small Experiments, Faster Learning, Stronger Products',
    publication: 'Planned Article',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Writing() {
  return (
    <section id="writing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-xs text-gray-600 tracking-[0.3em] uppercase">05 / Writing</span>
          <div className="w-6 h-px bg-gray-700 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WRITING
        </motion.h2>

        {/* Numbered article rows */}
        <div>
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block border-t border-gray-800 py-8 md:py-10"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-5 md:gap-10 min-w-0">
                  <span className="text-xs text-gray-700 font-mono shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl md:text-3xl lg:text-4xl text-white leading-tight group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
                      {article.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-gray-600 tracking-[0.3em] uppercase mt-2">
                      {article.publication}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-600 shrink-0 font-mono">IDEA</span>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
