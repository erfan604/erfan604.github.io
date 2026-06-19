import { AnimatePresence, motion } from 'motion/react'
import BrowserWindow from './BrowserWindow'
import IPhone from './IPhone'
import { appProjects, webProjects } from '@/data/projects'
import { useShowcase } from '@/lib/showcase'

const ease = [0.16, 1, 0.3, 1] as const

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative mx-auto max-w-[1680px] px-5 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-28">
      {/* section header */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-14 flex flex-col gap-6 border-t-2 border-ink pt-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <span className="kicker">Live exhibits</span>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] font-bold">
            Everything I&apos;ve built.
          </h2>
        </div>
      </motion.div>

      {/* exhibits stacked vertically: each block = device left, writing right */}
      <div className="flex flex-col gap-20 sm:gap-28">
        {/* block 1 — websites */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Eyebrow
            label="Websites · browse the tabs"
            icon={
              <>
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
              </>
            }
          />
          <p className="mb-6 max-w-xl text-sm leading-relaxed text-ink-soft">
            These tabs are static snapshots, not the running sites. Hit{' '}
            <span className="text-ink">Open live</span> on any tab to browse the
            real, interactive site.
          </p>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <BrowserWindow />
            </div>
            <div className="lg:col-span-5">
              <WebInfo />
            </div>
          </div>
        </motion.div>

        {/* block 2 — apps */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Eyebrow
            label="Apps · tap to open"
            icon={
              <>
                <rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" />
                <path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            }
          />
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col items-center gap-7 lg:col-span-5">
              <p className="max-w-xs text-center text-sm leading-relaxed text-ink-soft">
                Note: these run a stripped-down, basic version of each app. The
                full builds ship complete functionality.
              </p>
              <IPhone />
            </div>
            <div className="lg:col-span-7">
              <AppInfo />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* little icon + mono label that sits above each block */
function Eyebrow({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid h-7 w-7 place-items-center rounded-full bg-graphite text-ink">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          {icon}
        </svg>
      </span>
      <span className="font-mono text-xs tracking-[0.18em] uppercase text-ink-soft">
        {label}
      </span>
    </div>
  )
}

/* a single ROLE / STACK / YEAR style row, mono, divider underneath */
function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] items-baseline gap-x-8 border-b border-line/70 pb-2">
      <span className="uppercase tracking-[0.18em] text-ink-faint">{k}</span>
      <span className="text-left text-ink-soft">{v}</span>
    </div>
  )
}

/* right-hand writing for the active browser tab; reactive to webId */
function WebInfo() {
  const { webId } = useShowcase()
  const project = webProjects.find((p) => p.id === webId) ?? webProjects[0]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.35, ease }}
      >
        <h3 className="font-display text-3xl font-bold text-red sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-3 max-w-md text-lg text-ink-soft">{project.tagline}</p>
        {project.published === false && (
          <p className="mt-4 inline-flex rounded-md border border-line px-3 py-1.5 font-mono text-[11px] text-ink-faint">
            Xantrex has not published this web app yet.
          </p>
        )}
        <div className="mt-7 flex flex-col gap-2.5 font-mono text-[11px]">
          <MetaRow k="Role" v={project.role} />
          <MetaRow k="Stack" v={project.stack.join(' · ')} />
          <MetaRow k="Year" v={project.year} />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

/* right-hand writing for the iPhone; reactive to appId.
   when nothing is open, prompt + a small list so the panel is never empty. */
function AppInfo() {
  const { appId, setAppId } = useShowcase()
  const openApp = appId ? appProjects.find((a) => a.id === appId) : null

  return (
    <AnimatePresence mode="wait">
      {openApp ? (
        <motion.div
          key={openApp.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease }}
        >
          <h3 className="font-display text-3xl font-bold text-red sm:text-4xl">
            {openApp.name}
          </h3>
          <p className="mt-3 max-w-md text-lg text-ink-soft">{openApp.tagline}</p>
          <div className="mt-7 flex flex-col gap-2.5 font-mono text-[11px]">
            <MetaRow k="Stack" v={openApp.stack.join(' · ')} />
            <MetaRow k="Status" v={openApp.status} />
            <MetaRow k="Year" v={openApp.year} />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="prompt"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease }}
        >
          <h3 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Apps
          </h3>
          <p className="mt-3 max-w-md text-lg text-ink-soft">
            Tap an icon on the home screen to open it. Both run live and
            navigable, right inside the phone.
          </p>
          <div className="mt-7 flex flex-col gap-2.5 font-mono text-[11px]">
            {appProjects.map((app) => (
              <button
                key={app.id}
                onClick={() => setAppId(app.id)}
                className="group grid grid-cols-[5.5rem_1fr] items-baseline gap-x-8 border-b border-line/70 pb-2 text-left transition-colors"
              >
                <span className="uppercase tracking-[0.18em] text-red">
                  {app.name}
                </span>
                <span className="text-left text-ink-soft">{app.tagline}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
