import { motion } from 'motion/react'
import Marquee from './Marquee'

export default function Footer() {
  return (
    <footer id="about" className="relative mt-10 bg-graphite text-ink">
      <Marquee
        items={[
          'Open to co-op & internships',
          'Fall 2026',
          'Let’s build something',
          'Vancouver / remote',
        ]}
        className="border-y border-ink/15 py-4 font-display text-2xl font-semibold sm:text-3xl"
      />

      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 sm:grid-cols-12">
          <div className="sm:col-span-7">
            <span className="kicker text-ink/50">§ 03 — About</span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-5 max-w-2xl font-display text-3xl leading-[1.15] font-medium sm:text-4xl"
            >
              I&apos;m Erfan — a comp-sci student at SFU who ships fast and
              finishes things.{' '}
              <span className="serif-em text-red">
                Apps, websites, infrastructure, and the occasional reverse-engineered
                LED protocol.
              </span>
            </motion.p>
          </div>

          <div className="flex flex-col gap-6 sm:col-span-4 sm:col-start-9">
            <Contact label="Email" value="erfan@welcomeaide.com" href="mailto:erfan@welcomeaide.com" />
            <Contact label="GitHub" value="github.com/erfan604" href="https://github.com/erfan604" />
            <Contact label="Location" value="Vancouver, BC" />
            <Contact label="Phone" value="778-791-4020" href="tel:7787914020" />
          </div>
        </div>

        <div className="mt-20 overflow-hidden">
          <p className="font-display text-[clamp(3rem,18vw,16rem)] leading-[0.8] font-extrabold tracking-[-0.04em] text-ink/95">
            ERFAN
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6 font-mono text-[11px] text-ink/40">
          <span>© 2026 Erfan Aghdasi — built from scratch</span>
          <span>Bricolage Grotesque · Fraunces · JetBrains Mono</span>
          <a href="#top" className="hover:text-ink">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

function Contact({
  label,
  value,
  href,
}: {
  label: string
  value: string
  href?: string
}) {
  const inner = (
    <>
      <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40 uppercase">
        {label}
      </span>
      <span className="mt-1 block font-display text-lg group-hover:text-red">
        {value}
      </span>
    </>
  )
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group block border-b border-ink/15 pb-3">
      {inner}
    </a>
  ) : (
    <div className="group block border-b border-ink/15 pb-3">{inner}</div>
  )
}
