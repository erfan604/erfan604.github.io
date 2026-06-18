import { useState } from 'react'
import { motion } from 'motion/react'
import { indexEntries } from '@/data/projects'
import { useShowcase } from '@/lib/showcase'

const ease = [0.16, 1, 0.3, 1] as const

export default function ProjectIndex() {
  const [hover, setHover] = useState<number | null>(null)
  const { focus } = useShowcase()

  return (
    <section id="index" className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-10 border-t-2 border-ink pt-6">
        <span className="kicker">§ 02 · Full index</span>
        <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.6rem)] font-bold">
          The whole <span className="serif-em text-red">catalogue</span>
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Tap any project to open its live exhibit in the room above.
        </p>
      </div>

      <div className="border-b border-line">
        {indexEntries.map((p, i) => (
          <motion.button
            key={p.id}
            type="button"
            onClick={() => focus(p.id, p.target)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.04 }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="group relative grid w-full grid-cols-12 items-center gap-2 border-t border-line py-5 text-left transition-colors"
            style={{ color: hover === i ? 'var(--color-ink)' : undefined }}
          >
            {/* hover wash */}
            <span
              className="absolute inset-0 -z-10 origin-left scale-x-0 bg-paper-2 transition-transform duration-500 group-hover:scale-x-100"
              style={{ transformOrigin: 'left' }}
            />
            <span className="col-span-1 font-mono text-xs text-ink-faint">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="col-span-5 font-display text-xl font-bold sm:col-span-4 sm:text-3xl">
              {p.name}
            </span>
            <span className="col-span-6 hidden font-mono text-[11px] text-ink-faint sm:col-span-3 sm:block">
              {p.kind}
            </span>
            <span className="col-span-4 hidden text-sm text-ink-soft sm:col-span-3 sm:block">
              {p.blurb}
            </span>
            <span className="col-span-6 flex items-center justify-end gap-3 text-right font-mono text-xs text-ink-faint sm:col-span-1">
              {p.year}
              <span className="text-red opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                ↗
              </span>
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
