import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1680px] px-5 pt-24 pb-6 sm:px-8 sm:pt-28 sm:pb-8"
    >
      {/* meta row, centered + tight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b border-line pb-4 text-center"
      >
        <span className="kicker">Vancouver, BC</span>
        <span className="kicker text-ink-faint">·</span>
        <span className="kicker">Open to relocating</span>
      </motion.div>

      {/* about, moved up as the lead */}
      <div className="grid gap-10 sm:grid-cols-12 sm:gap-12">
        <div className="sm:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="font-display text-[clamp(1.45rem,2.6vw,2rem)] leading-snug font-medium tracking-[-0.01em]"
          >
            I&apos;m Erfan, 26, and I design and build software end to end,
            from interface to infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            <p>
              Before code, I spent more than six years in retail and tech
              sales, nearly four of them leading teams of six to ten, including
              a run as Team Lead at Enjoy Technology that held the highest
              revenue-per-customer in Canada for twelve straight months, and a
              Best Buy team that posted the fastest sales growth nationwide
              under my leadership. More than the numbers, it reflects how
              invested I get in the companies I join, growing with the team and
              helping it evolve.
            </p>
            <p>
              <span className="serif-em text-red">
                My biggest asset is adapting fast.
              </span>{' '}
              I&apos;ve moved countries twice and rebuilt from scratch
              each time, language included. That turned me into a calm, clear
              communicator who can read a room, earn trust quickly, and get a
              team moving in the same direction. Now all of it goes into the
              apps, websites, and systems below, and come my next co-op, that
              same full focus shifts straight to your team.
            </p>
          </motion.div>
        </div>

        {/* right rail: study + grad only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.45 }}
          className="flex flex-col gap-3 font-mono text-xs text-ink-faint sm:col-span-4 sm:col-start-9 sm:pt-28"
        >
          {[
            ['Study', 'BSc Computer Science, SFU'],
            ['Grad', 'Late 2027 / early 2028'],
          ].map(([k, v]) => (
            <div key={k} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-x-8 border-b border-line/70 pb-2">
              <span className="uppercase tracking-[0.2em]">{k}</span>
              <span className="text-left text-ink">{v}</span>
            </div>
          ))}

          {/* scroll cue, moved into the right column and enlarged to fill it */}
          <a
            href="#showcase"
            className="group mt-24 inline-flex items-center gap-5 self-start font-mono text-sm tracking-[0.2em] uppercase text-ink-soft transition-colors hover:text-ink"
          >
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-ink">
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="text-2xl"
              >
                ↓
              </motion.span>
            </span>
            Browse the work
          </a>
        </motion.div>
      </div>
    </section>
  )
}
