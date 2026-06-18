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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8">
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
          className="group flex items-center gap-2 font-mono text-xs tracking-wide"
        >
          <span className="relative h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-red" />
            <span className="absolute inset-0 animate-ping rounded-full bg-red" />
          </span>
          <span className="hidden sm:inline">Available</span>
        </a>
      </div>
    </motion.header>
  )
}
