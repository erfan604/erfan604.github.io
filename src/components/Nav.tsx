import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

const links = [
  { label: 'About', href: '#top' },
  { label: 'Work', href: '#showcase' },
]

export default function Nav() {
  const [contactOpen, setContactOpen] = useState(false)
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

      <div className="relative mx-auto flex max-w-[1680px] items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="bg-red grid h-8 w-8 place-items-center rounded-full font-display text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-[18deg]">
            E
          </span>
          <span className="font-mono text-xs tracking-[0.18em] uppercase">
            Erfan A.
          </span>
        </a>

        <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-line bg-paper/70 px-1.5 py-1.5 backdrop-blur-md sm:flex">
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

        <div className="relative">
          <button
            type="button"
            onClick={() => setContactOpen((v) => !v)}
            aria-expanded={contactOpen}
            aria-haspopup="menu"
            className="group flex items-center gap-1.5 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:text-ink"
          >
            <span>Contact</span>
            <span className={`transition-transform ${contactOpen ? 'rotate-90' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`}>
              ↗
            </span>
          </button>

          <AnimatePresence>
            {contactOpen && (
              <>
                {/* click-away */}
                <button
                  aria-hidden
                  tabIndex={-1}
                  onClick={() => setContactOpen(false)}
                  className="fixed inset-0 z-0 cursor-default"
                />
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 z-10 mt-3 w-60 overflow-hidden rounded-2xl border border-line bg-paper/95 p-1.5 shadow-xl backdrop-blur-md"
                >
                  <a
                    href="mailto:eaa82@sfu.ca"
                    role="menuitem"
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-red/5"
                  >
                    <span className="block font-mono text-[10px] tracking-[0.2em] text-ink-faint uppercase">Email</span>
                    <span className="mt-0.5 block font-display text-sm text-ink">eaa82@sfu.ca</span>
                  </a>
                  <a
                    href="tel:7787914020"
                    role="menuitem"
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-red/5"
                  >
                    <span className="block font-mono text-[10px] tracking-[0.2em] text-ink-faint uppercase">Phone</span>
                    <span className="mt-0.5 block font-display text-sm text-ink">778-791-4020</span>
                  </a>
                  <a
                    href="/Erfan-Aghdasi-Resume.pdf"
                    download
                    role="menuitem"
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-red/5"
                  >
                    <span className="block font-mono text-[10px] tracking-[0.2em] text-ink-faint uppercase">Résumé</span>
                    <span className="mt-0.5 block font-display text-sm text-ink">Download PDF ↓</span>
                  </a>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}
