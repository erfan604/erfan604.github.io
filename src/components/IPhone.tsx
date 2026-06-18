import { AnimatePresence, motion } from 'motion/react'
import { appProjects } from '@/data/projects'
import { useShowcase } from '@/lib/showcase'
import { appScreenMap } from './AppScreens'

const ease = [0.16, 1, 0.3, 1] as const

export default function IPhone() {
  const { appId: open, setAppId: setOpen } = useShowcase()
  const openApp = open ? appProjects.find((a) => a.id === open) : null
  const Screen = open ? appScreenMap[open] : null

  return (
    <div className="relative mx-auto w-[260px] sm:w-[288px]">
      {/* device body */}
      <div className="relative rounded-[3rem] border border-line-strong bg-[#1c1c20] p-2.5 shadow-[var(--shadow-device)]">
        {/* side buttons */}
        <span className="absolute top-28 -left-[3px] h-12 w-[3px] rounded-l bg-[#2c2c30]" />
        <span className="absolute top-44 -left-[3px] h-9 w-[3px] rounded-l bg-[#2c2c30]" />
        <span className="absolute top-36 -right-[3px] h-16 w-[3px] rounded-r bg-[#2c2c30]" />

        {/* screen */}
        <div className="device-scroll relative h-[560px] overflow-hidden rounded-[2.4rem] bg-black">
          {/* dynamic island */}
          <div className="pointer-events-none absolute top-2 left-1/2 z-30 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* status bar */}
          <div className="absolute top-0 right-0 left-0 z-20 flex items-center justify-between px-6 pt-2.5 text-[11px] font-semibold text-white mix-blend-difference">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span>●●●</span>
              <span>􀙇</span>
              <span>100%</span>
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!open ? (
              <HomeScreen key="home" onOpen={setOpen} />
            ) : (
              <motion.div
                key={open}
                initial={{ scale: 0.4, opacity: 0, borderRadius: 48 }}
                animate={{ scale: 1, opacity: 1, borderRadius: 0 }}
                exit={{ scale: 0.4, opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0 origin-center overflow-hidden"
              >
                <div className="device-scroll h-full overflow-y-auto pt-9">
                  {Screen && <Screen />}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* home indicator (tap to go home) */}
          <button
            onClick={() => setOpen(null)}
            aria-label="Home"
            className="absolute bottom-1.5 left-1/2 z-30 h-1.5 w-32 -translate-x-1/2 rounded-full bg-white/80 transition-opacity hover:opacity-100"
          />
        </div>
      </div>

      {/* caption under phone */}
      <AnimatePresence mode="wait">
        <motion.p
          key={open ?? 'home'}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-5 text-center font-mono text-[11px] text-ink-faint"
        >
          {openApp
            ? `${openApp.name} · ${openApp.status} · tap the bar to go home`
            : 'Tap an app to open it'}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

function HomeScreen({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.4, ease }}
      className="absolute inset-0 flex flex-col"
      style={{
        background:
          'radial-gradient(130% 90% at 50% 0%, #5a5c59 0%, #2c2e2c 42%, #131413 100%), radial-gradient(80% 50% at 80% 8%, rgba(228,0,43,0.35), transparent 60%)',
      }}
    >
      <div className="flex flex-1 flex-col items-center px-7 pt-20">
        <p className="font-display text-5xl font-light text-white/90">9:41</p>
        <p className="mt-1 text-[13px] text-white/60">Wednesday, June 18</p>

        <div className="mt-12 grid w-full grid-cols-4 gap-x-4 gap-y-6">
          {appProjects.map((app) => (
            <button
              key={app.id}
              onClick={() => onOpen(app.id)}
              className="group flex flex-col items-center gap-1.5"
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${app.tile} text-2xl shadow-lg transition-transform group-hover:scale-110 group-active:scale-95`}
              >
                {app.icon}
              </span>
              <span className="text-[10px] font-medium text-white/90">
                {app.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* dock */}
      <div className="mx-4 mb-7 flex justify-center gap-5 rounded-3xl bg-white/10 px-5 py-3 backdrop-blur-md">
        {['✦', '◷', '⌘', '✉'].map((g, i) => (
          <span
            key={i}
            className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-lg text-white/80"
          >
            {g}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
