import { motion } from 'motion/react'
import BrowserWindow from './BrowserWindow'
import IPhone from './IPhone'

const ease = [0.16, 1, 0.3, 1] as const

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      {/* section header */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-14 flex flex-col gap-6 border-t-2 border-ink pt-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <span className="kicker">§ 01 — Live exhibits</span>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] font-bold">
            Everything I&apos;ve built,{' '}
            <span className="serif-em text-vermillion">in one room.</span>
          </h2>
        </div>
        <p className="max-w-xs text-ink-soft">
          No screenshots-as-decoration. Open a real window, swap tabs, pick up
          the phone and tap through the apps.
        </p>
      </motion.div>

      {/* exhibit grid */}
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
        {/* websites */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-paper">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-ink-soft">
              Websites — browse the tabs
            </span>
          </div>
          <BrowserWindow />
        </motion.div>

        {/* apps */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-4 lg:pt-9"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-paper">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" />
                <path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-ink-soft">
              Apps — tap to open
            </span>
          </div>
          <IPhone />
        </motion.div>
      </div>
    </section>
  )
}
