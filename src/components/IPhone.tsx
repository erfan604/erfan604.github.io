import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { appProjects } from '@/data/projects'
import { useShowcase } from '@/lib/showcase'

const ease = [0.16, 1, 0.3, 1] as const

const TZ = 'America/Vancouver'

/* live-ticking clock, re-renders every second */
function useVancouverNow() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

// "9:41" — 12-hour, no AM/PM (iOS-style face), live but no seconds
function vanClock(now: Date) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
    .format(now)
    .replace(/\s?[AP]M$/i, '')
}

// "9:41" for the status bar (no seconds, like a real phone)
function vanStatus(now: Date) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
    .format(now)
    .replace(/\s?[AP]M$/i, '')
}

// "Wednesday, June 18"
function vanDate(now: Date) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(now)
}

export default function IPhone() {
  const { appId: open, setAppId: setOpen } = useShowcase()
  const openApp = open ? appProjects.find((a) => a.id === open) : null
  const now = useVancouverNow()

  return (
    <div className="relative mx-auto w-[284px] sm:w-[320px]">
      {/* device body */}
      <div className="relative rounded-[3rem] border border-line-strong bg-[#1c1c20] p-2.5 shadow-[var(--shadow-device)]">
        {/* side buttons */}
        <span className="absolute top-28 -left-[3px] h-12 w-[3px] rounded-l bg-[#2c2c30]" />
        <span className="absolute top-44 -left-[3px] h-9 w-[3px] rounded-l bg-[#2c2c30]" />
        <span className="absolute top-36 -right-[3px] h-16 w-[3px] rounded-r bg-[#2c2c30]" />

        {/* screen */}
        <div className="device-scroll relative h-[624px] overflow-hidden rounded-[2.4rem] bg-black">
          {/* dynamic island */}
          <div className="pointer-events-none absolute top-2 left-1/2 z-30 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* status bar */}
          <div className="pointer-events-none absolute top-0 right-0 left-0 z-20 flex items-center justify-between px-7 pt-3 text-[11px] font-semibold text-white mix-blend-difference">
            <span className="tabular-nums">{vanStatus(now)}</span>
            <span className="flex items-center gap-1.5">
              <span className="text-[10px] tracking-tight">5G</span>
              <span>100%</span>
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!open ? (
              <HomeScreen key="home" onOpen={setOpen} />
            ) : openApp ? (
              <motion.div
                key={open}
                initial={{ scale: 0.45, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.45, opacity: 0 }}
                transition={{ duration: 0.45, ease }}
                className="absolute inset-0 origin-center overflow-hidden bg-black"
                style={openApp.webUrl ? { background: openApp.screenBg ?? '#000' } : undefined}
              >
                {openApp.webUrl ? (
                  /* live, navigable web build of the real app.
                     status-bar inset (spacer) clears the dynamic island so the
                     app's own header isn't covered. the iframe renders at a
                     wider logical viewport (≈390px phone width) and is scaled
                     down to fit, so the app lays out naturally instead of
                     squishing into the ~300px mockup. */
                  <div
                    className="flex h-full flex-col"
                    style={{ background: openApp.screenBg ?? '#000' }}
                  >
                    <div className="h-9 shrink-0" />
                    <div className="relative flex-1 overflow-hidden">
                      <iframe
                        src={openApp.webUrl}
                        title={`${openApp.name} live demo`}
                        className="absolute top-0 left-0 origin-top-left border-0"
                        style={{
                          width: '128%',
                          height: '128%',
                          transform: 'scale(0.78125)',
                          background: openApp.screenBg ?? '#fff',
                        }}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    </div>
                  </div>
                ) : (
                  /* fallback: real app screenshots, scrollable */
                  <div className="device-scroll h-full overflow-y-auto">
                    {openApp.screens.map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={src}
                        src={src}
                        alt={`${openApp.name} screen ${i + 1}`}
                        className="block w-full"
                        draggable={false}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ) : null}
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
          className="mt-5 text-center text-sm text-ink-soft"
        >
          {openApp ? 'Click on bar to go back' : 'Tap an app to open it'}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

function HomeScreen({ onOpen }: { onOpen: (id: string) => void }) {
  const now = useVancouverNow()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.4, ease }}
      className="absolute inset-0 flex flex-col"
      style={{
        background:
          'radial-gradient(130% 90% at 50% 0%, #5a5c59 0%, #2c2e2c 42%, #131413 100%), radial-gradient(80% 50% at 80% 8%, rgba(228,0,43,0.28), transparent 60%)',
      }}
    >
      <div className="flex flex-1 flex-col items-center px-7 pt-[4.5rem]">
        <p className="font-display text-[3.4rem] leading-none font-light text-white/90 tabular-nums">
          {vanClock(now)}
        </p>
        <p className="mt-1.5 text-[13px] text-white/55">{vanDate(now)}</p>

        {/* real apps */}
        <div className="mt-14 flex items-start justify-center gap-9">
          {appProjects.map((app) => (
            <button
              key={app.id}
              onClick={() => onOpen(app.id)}
              className="group flex w-16 flex-col items-center gap-2"
            >
              <span className="h-16 w-16 overflow-hidden rounded-[1.25rem] shadow-lg ring-1 ring-white/15 transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={app.iconImg} alt={`${app.name} icon`} className="h-full w-full object-cover" draggable={false} />
              </span>
              <span className="text-[11px] font-medium text-white/90">{app.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* dock: same real apps, iOS-style frosted favorites */}
      <div className="mx-5 mb-7 flex justify-center gap-6 rounded-[1.75rem] bg-white/10 px-6 py-3 backdrop-blur-md">
        {appProjects.map((app) => (
          <button
            key={app.id}
            onClick={() => onOpen(app.id)}
            aria-label={`Open ${app.name}`}
            className="h-12 w-12 overflow-hidden rounded-[1rem] ring-1 ring-white/15 transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={app.iconImg} alt="" className="h-full w-full object-cover" draggable={false} />
          </button>
        ))}
      </div>
    </motion.div>
  )
}
