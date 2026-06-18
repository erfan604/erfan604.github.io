import { motion } from 'motion/react'

const links = [
  { label: 'Work', href: '#showcase' },
  { label: 'Index', href: '#index' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-0 right-0 left-0 z-50"
    >
      {/* scrim so page content never reads as overlapping the bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper via-paper/75 to-transparent"
      />

      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="bg-red grid h-8 w-8 place-items-center rounded-full font-display text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-[18deg]">
            E
          </span>
          <span className="font-mono text-xs tracking-[0.18em] uppercase">
            Erfan A.
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-paper/70 px-1.5 py-1.5 backdrop-blur-md sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:bg-red hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:erfan@welcomeaide.com"
          className="group flex items-center gap-1.5 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:text-ink"
        >
          <span>Contact</span>
          <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </div>
    </motion.header>
  )
}
