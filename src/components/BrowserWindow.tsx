import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { webProjects } from '@/data/projects'

export default function BrowserWindow() {
  const [active, setActive] = useState(0)
  const project = webProjects[active]

  return (
    <div className="w-full">
      {/* window shell */}
      <div className="overflow-hidden rounded-xl border border-line-strong bg-paper-2 shadow-[var(--shadow-device)]">
        {/* title bar + tabs */}
        <div className="flex items-end gap-1 border-b border-line-strong/80 bg-[#e3ddcf] px-3 pt-2.5">
          {/* traffic lights */}
          <div className="mr-2 flex items-center gap-1.5 pb-2.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>

          {/* tabs */}
          <div className="flex flex-1 items-end gap-1 overflow-x-auto">
            {webProjects.map((p, i) => {
              const on = i === active
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  className={`relative flex max-w-[170px] min-w-0 items-center gap-2 rounded-t-lg px-3 py-2 text-left transition-colors ${
                    on ? 'bg-paper-2' : 'bg-transparent hover:bg-[#ded7c7]'
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="tab-bg"
                      className="absolute inset-0 -z-10 rounded-t-lg bg-paper-2"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: p.accent }}
                  />
                  <span
                    className={`truncate font-mono text-[11px] ${
                      on ? 'text-ink' : 'text-ink-faint'
                    }`}
                  >
                    {p.domain}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* address bar */}
        <div className="flex items-center gap-3 border-b border-line bg-paper-2 px-3 py-2.5">
          <div className="flex gap-1.5 text-ink-faint">
            <span>‹</span>
            <span>›</span>
            <span className="opacity-50">⟳</span>
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-md bg-paper px-3 py-1.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="text-ink-faint">
              <path
                d="M6 10V8a6 6 0 1112 0v2M5 10h14v10H5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="truncate font-mono text-[11px] text-ink-soft">
              {project.url.replace('https://', '')}
            </span>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-md bg-ink px-3 py-1.5 font-mono text-[10px] tracking-wide text-paper transition-transform hover:-translate-y-0.5"
          >
            Open live ↗
          </a>
        </div>

        {/* viewport: scrollable screenshot */}
        <div className="device-scroll relative h-[300px] overflow-y-auto bg-white sm:h-[440px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={project.id}
              src={project.shot}
              alt={`${project.name} — screenshot`}
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
              loading="lazy"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* caption strip */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-5 grid gap-3 sm:grid-cols-12"
        >
          <div className="sm:col-span-6">
            <h3 className="font-display text-2xl font-bold">{project.name}</h3>
            <p className="mt-1 max-w-md text-ink-soft">{project.tagline}</p>
          </div>
          <div className="flex flex-col gap-1.5 font-mono text-[11px] text-ink-faint sm:col-span-6">
            <Row k="Role" v={project.role} />
            <Row k="Stack" v={project.stack.join(' · ')} />
            <Row k="Year" v={project.year} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line/70 pb-1.5">
      <span className="uppercase tracking-[0.18em]">{k}</span>
      <span className="text-right text-ink-soft">{v}</span>
    </div>
  )
}
