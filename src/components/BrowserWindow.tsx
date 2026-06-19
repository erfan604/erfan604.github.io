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
          {project.published === false ? (
            <span
              title="Xantrex has not published this web app yet"
              className="shrink-0 rounded-md border border-black/15 px-3 py-1.5 font-mono text-[10px] tracking-wide text-[#9a9a9a]"
            >
              Not published yet
            </span>
          ) : (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-md bg-red px-3 py-1.5 font-mono text-[10px] tracking-wide text-white transition-transform hover:-translate-y-0.5"
            >
              {project.ctaLabel ?? 'Open live ↗'}
            </a>
          )}
        </div>

        {/* viewport: scrollable static screenshot */}
        <div className="device-scroll relative h-[360px] overflow-y-auto bg-white sm:h-[560px]">
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
    </div>
  )
}
