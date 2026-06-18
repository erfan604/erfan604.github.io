import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

const rise = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: '0%',
    transition: { duration: 1, ease, delay: 0.25 + i * 0.08 },
  }),
}

function Line({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <span className="block overflow-hidden pb-[0.2em]">
      <motion.span
        variants={rise}
        custom={i}
        initial="hidden"
        animate="show"
        className="block"
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1400px] px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24"
    >
      {/* meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4"
      >
        <span className="kicker">Vancouver, BC · 49.28°N</span>
        <span className="kicker">Open to relocating</span>
      </motion.div>

      {/* headline */}
      <h1 className="font-display text-[clamp(2.25rem,7vw,7rem)] leading-[0.95] font-extrabold tracking-[-0.03em]">
        <Line i={0}>I build</Line>
        <Line i={1}>
          <span className="serif-em font-medium text-red">software</span>
        </Line>
        <Line i={2}>
          <span className="outline-text">end to end.</span>
        </Line>
      </h1>

      {/* sub-block, asymmetric */}
      <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.9 }}
          className="font-display text-lg leading-relaxed text-ink-soft sm:col-span-5 sm:col-start-1 sm:text-xl"
        >
          I&apos;m Erfan, 26, a computer science student at Simon Fraser
          University who designs and builds software end to end, from interface
          to infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.05 }}
          className="flex flex-col gap-3 font-mono text-xs text-ink-faint sm:col-span-4 sm:col-start-9"
        >
          {[
            ['Now', 'Fetchi · WelcomeAide · Crumb'],
            ['Stack', 'TS · React · RN · Cloudflare · Azure'],
            ['Study', 'BSc Computer Science, SFU'],
            ['Grad', 'Late 2027 / early 2028'],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-line/70 pb-2">
              <span className="uppercase tracking-[0.2em]">{k}</span>
              <span className="text-right text-ink">{v}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#showcase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="mt-16 inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-ink-soft"
      >
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink">
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </span>
        Browse the work
      </motion.a>
    </section>
  )
}
