import { AnimatePresence, motion } from 'motion/react'
import { webProjects } from '@/data/projects'
import { useShowcase } from '@/lib/showcase'

export default function BrowserWindow() {
  const { webId, setWebId } = useShowcase()
  const project = webProjects.find((p) => p.id === webId) ?? webProjects[0]

  return (
    <div className="w-full">
      {/* window shell: a light window object resting on the grey desk */}
      <div className="overflow-hidden rounded-xl border border-black/15 bg-[#ececec] shadow-[var(--shadow-device)]">
        {/* title bar + tabs */}
        <div className="flex items-end gap-1 border-b border-black/10 bg-[#d7d7d7] px-3 pt-2.5">
          {/* traffic lights */}
          <div className="mr-2 flex items-center gap-1.5 pb-2.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>

          {/* tabs */}
          <div className="flex flex-1 items-end gap-1 overflow-x-auto">
            {webProjects.map((p) => {
              const on = p.id === webId
              return (
                <button
                  key={p.id}
                  onClick={() => setWebId(p.id)}
                  className={`relative flex max-w-[170px] min-w-0 items-center gap-2 rounded-t-lg px-3 py-2 text-left transition-colors ${
                    on ? 'bg-[#f4f4f4]' : 'bg-transparent hover:bg-[#c9c9c9]'
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="tab-bg"
                      className="absolute inset-0 -z-10 rounded-t-lg bg-[#f4f4f4]"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: p.accent }}
                  />
                  <span
                    className={`truncate font-mono text-[11px] ${
                      on ? 'text-[#1d1f1d]' : 'text-[#6b6b6b]'
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
        <div className="flex items-center gap-3 border-b border-black/10 bg-[#f4f4f4] px-3 py-2.5">
          <div className="flex gap-1.5 text-[#9a9a9a]">
            <span>‹</span>
            <span>›</span>
            <span className="opacity-50">⟳</span>
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-md bg-white px-3 py-1.5 shadow-inner">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="text-[#9a9a9a]">
              <path
                d="M6 10V8a6 6 0 1112 0v2M5 10h14v10H5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="truncate font-mono text-[11px] text-[#5a5a5a]">
              {project.url.replace('https://', '')}
            </span>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-md bg-red px-3 py-1.5 font-mono text-[10px] tracking-wide text-white transition-transform hover:-translate-y-0.5"
          >
            Open live ↗
          </a>
        </div>

        {/* viewport: scrollable screenshot */}
        <div className="device-scroll relative h-[300px] overflow-y-auto bg-white sm:h-[460px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={project.id}
              src={project.shot}
              alt={`${project.name} · screenshot`}
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
              loading="lazy"
            />
          </AnimatePresence>
          {/* scroll hint */}
          <div className="pointer-events-none sticky bottom-0 left-0 flex w-full justify-center pb-2">
            <span className="rounded-full bg-black/55 px-3 py-1 font-mono text-[9px] tracking-wide text-white/90 backdrop-blur-sm">
              scroll inside ↕
            </span>
          </div>
        </div>
      </div>

      {/* caption strip: on the grey desk, uses light tokens */}
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
            <h3 className="font-display text-2xl font-bold text-ink">{project.name}</h3>
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
