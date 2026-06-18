import { motion } from 'motion/react'
import { indexEntries } from '@/data/projects'
import { useShowcase } from '@/lib/showcase'

const ease = [0.16, 1, 0.3, 1] as const

export default function ProjectIndex() {
  const { focus } = useShowcase()

  return (
    <section id="index" className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-10 border-t-2 border-ink pt-6">
        <span className="kicker">Full index</span>
        <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.6rem)] font-bold">
          The whole <span className="serif-em text-red">catalogue</span>
        </h2>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          Tap any project to open its live exhibit in the room above, or its source.
        </p>
      </div>

      <div className="border-b border-line">
        {indexEntries.map((p, i) => (
          <motion.button
            key={p.id}
            type="button"
            onClick={() => {
              if (p.href) window.open(p.href, '_blank', 'noopener,noreferrer')
              else focus(p.id, p.target as 'web' | 'app')
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.05 }}
            className="group relative block w-full border-t border-line py-7 text-left sm:py-9"
          >
            {/* top line: plate number + oversized name, with kind/year tucked right */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="serif-em text-xl text-ink-faint transition-colors duration-300 group-hover:text-red sm:text-2xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[clamp(2rem,6vw,4.25rem)] leading-[0.92] font-bold tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-red">
                  {p.name}
                </h3>
              </div>
              <div className="flex shrink-0 items-baseline gap-6 font-mono text-[11px] tracking-wide text-ink-faint sm:flex-col sm:items-end sm:gap-1.5 sm:text-right">
                <span>{p.kind}</span>
                <span className="text-ink-soft">{p.year}</span>
              </div>
            </div>

            {/* second line: blurb + a labelled action that reveals on hover */}
            <div className="mt-3 flex items-center gap-4 sm:pl-10">
              <p className="max-w-xl text-sm leading-relaxed text-ink-soft">
                {p.blurb}
              </p>
              <span className="ml-auto shrink-0 self-end font-mono text-[11px] tracking-[0.18em] text-red uppercase opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                {p.href ? 'Source ↗' : 'Exhibit ↗'}
              </span>
            </div>

            {/* signature: a red hairline draws across the row on hover */}
            <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-red transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </motion.button>
        ))}
      </div>
    </section>
  )
}
