import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const ease = [0.76, 0, 0.24, 1] as const

/**
 * One-time page-load curtain. Shows a graphite panel with the mark + a red
 * progress line that fills, then wipes up to reveal the page. Shows once per
 * tab session (sessionStorage) and is skipped entirely for reduced-motion users.
 */
export default function Intro() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const seen = sessionStorage.getItem('introSeen')
    if (reduce || seen) return

    setShow(true)
    document.body.style.overflow = 'hidden'
    sessionStorage.setItem('introSeen', '1')
    const t = setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
    }, 1900)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-graphite text-ink"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <span className="bg-red grid h-14 w-14 place-items-center rounded-2xl font-display text-2xl font-bold text-white">
              E
            </span>
            <p className="font-mono text-[11px] tracking-[0.3em] text-ink-faint uppercase">
              Erfan Aghdasi · Portfolio
            </p>
          </motion.div>

          {/* progress line */}
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="bg-red h-full w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
