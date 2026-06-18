import { motion } from 'motion/react'

export default function Footer() {
  return (
    <footer id="about" className="relative mt-10 border-t border-ink/10 bg-graphite text-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 sm:grid-cols-12">
          <div className="sm:col-span-7">
            <span className="kicker text-ink-faint">About</span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-5 max-w-2xl font-display text-3xl leading-[1.15] font-medium sm:text-4xl"
            >
              I&apos;m Erfan, 26, a computer science student at Simon Fraser
              University who designs and builds software end to end, from
              interface to infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-7 max-w-xl space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              <p>
                Before code, I spent more than six years in retail and tech
                sales, nearly four of them leading teams of six to ten,
                including a run as Team Lead at Enjoy Technology that held the
                highest revenue-per-customer in Canada for twelve straight
                months, and a Best Buy team that posted the fastest sales growth
                nationwide under my leadership. More than the numbers, it
                reflects how invested I get in the companies I join, growing
                with the team and helping it evolve.
              </p>
              <p>
                <span className="serif-em text-red">
                  My biggest asset is adapting fast.
                </span>{' '}
                I&apos;ve moved countries three times and rebuilt from scratch
                each time, language included. That turned me into a calm, clear
                communicator who can read a room, earn trust quickly, and get a
                team moving in the same direction. Now all of it goes into the
                apps, websites, and systems above, and come my next co-op, that
                same full focus shifts straight to your team.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6 sm:col-span-4 sm:col-start-9">
            <Contact label="Email" value="eaa82@sfu.ca" href="mailto:eaa82@sfu.ca" />
            <Contact label="GitHub" value="github.com/erfan604" href="https://github.com/erfan604" />
            <Contact label="Location" value="Vancouver, BC" />
            <Contact label="Phone" value="778-791-4020" href="tel:7787914020" />
            <Contact label="Availability" value="Co-op & internships, Fall 2026" />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6 font-mono text-[11px] text-ink-faint">
          <span>© 2026 Erfan Aghdasi · built from scratch</span>
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
      <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint uppercase">
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
