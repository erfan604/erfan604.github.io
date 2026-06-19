import { useState } from 'react'

export default function Footer() {
  return (
    <footer id="about" className="relative mt-10 border-t border-ink/10 bg-graphite text-ink">
      <div className="mx-auto max-w-[1680px] px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-10 sm:grid-cols-12">
          <div className="sm:col-span-3">
            <span className="kicker">Contact</span>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:col-span-8 sm:col-start-5 sm:grid-cols-2">
            <Contact label="Email" value="eaa82@sfu.ca" copy="eaa82@sfu.ca" />
            <Contact label="GitHub" value="github.com/erfan604" copy="https://github.com/erfan604" />
            <Contact label="LinkedIn" value="linkedin.com/in/erfanaghdasi" copy="https://www.linkedin.com/in/erfanaghdasi/" />
            <Contact label="Location" value="Vancouver, BC" />
            <Contact label="Phone" value="778-791-4020" copy="778-791-4020" />
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
  copy,
}: {
  label: string
  value: string
  copy?: string
}) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copy!)
    } catch {
      // Fallback for browsers without the async clipboard API.
      const ta = document.createElement('textarea')
      ta.value = copy!
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
      } catch {
        /* give up silently; the value is still select-all so manual copy works */
      }
      document.body.removeChild(ta)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const inner = (
    <>
      <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint uppercase">
        {label}
      </span>
      {/* select-all so a single click/drag grabs only this value, never the label or neighbours */}
      <span className="mt-1 block select-all font-display text-lg group-hover:text-red">
        {copied ? 'Copied ✓' : value}
      </span>
    </>
  )

  // Copyable rows (email / github / phone): click to copy, with a brief confirmation.
  if (copy !== undefined) {
    return (
      <button
        type="button"
        onClick={handleCopy}
        title={`Click to copy ${label.toLowerCase()}`}
        aria-label={`Copy ${label}: ${value}`}
        className="group block w-full cursor-pointer border-b border-ink/15 pb-3 text-left"
      >
        {inner}
      </button>
    )
  }

  return <div className="block border-b border-ink/15 pb-3">{inner}</div>
}
