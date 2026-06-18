/**
 * Hand-built mock app UIs rendered inside the iPhone. Using real components
 * (not screenshots) keeps them razor-sharp at any DPI and lets each app carry
 * its own identity — Crumb is warm/bready, GloPro is dark/neon.
 */

/* ---------------- CRUMB ---------------- */
export function CrumbScreen() {
  const items = [
    { store: 'Whole Foods', item: 'GF sourdough loaf', amt: '$8.49' },
    { store: 'Save-On', item: 'Brown rice pasta ×2', amt: '$11.98' },
    { store: 'Costco', item: 'Almond flour 1.3kg', amt: '$16.99' },
    { store: 'Pharmacy', item: 'Certified GF oats', amt: '$6.25' },
  ]
  return (
    <div className="h-full bg-[#fdf6ec] text-[#3a2a1a]">
      <div className="bg-gradient-to-b from-amber-400 to-orange-500 px-5 pt-3 pb-6 text-white">
        <p className="font-mono text-[10px] tracking-widest opacity-80">
          2026 · CELIAC TAX CREDIT
        </p>
        <p className="mt-2 text-[13px] opacity-90">Claimable this year</p>
        <p className="font-display text-4xl font-extrabold tracking-tight">
          $1,284.60
        </p>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/30">
          <div className="h-full w-[68%] rounded-full bg-white" />
        </div>
        <p className="mt-1.5 text-[10px] opacity-80">68% of last year&apos;s claim</p>
      </div>
      <div className="px-4 py-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] font-semibold tracking-wide text-[#8a6a45]">
            RECENT RECEIPTS
          </p>
          <span className="text-[11px] text-orange-500">See all</span>
        </div>
        <div className="space-y-2">
          {items.map((r) => (
            <div
              key={r.item}
              className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-sm"
            >
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-amber-100 text-base">
                🧾
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold">{r.item}</p>
                <p className="text-[10px] text-[#9a8264]">{r.store}</p>
              </div>
              <p className="text-[12px] font-bold text-orange-600">{r.amt}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-4 mt-1 grid place-items-center rounded-2xl border-2 border-dashed border-amber-300 py-4 text-center">
        <span className="text-2xl">📷</span>
        <p className="mt-1 text-[11px] font-semibold text-amber-700">
          Scan a receipt
        </p>
      </div>
    </div>
  )
}

/* ---------------- GLOPRO ---------------- */
export function GloproScreen() {
  const swatches = [
    '#ff2d55',
    '#ff9500',
    '#ffd60a',
    '#34c759',
    '#00c7be',
    '#0a84ff',
    '#5e5ce6',
    '#bf5af2',
  ]
  const scenes = ['Sunset Fade', 'Music Pulse', 'Aurora', 'Candle']
  return (
    <div className="h-full bg-[#0b0b12] text-white">
      <div className="px-5 pt-4">
        <p className="font-mono text-[10px] tracking-widest text-white/40">
          BACKYARD · 42 LEDS · CONNECTED
        </p>
        <p className="mt-1 font-display text-xl font-bold">Patio Strip</p>
      </div>

      {/* color wheel */}
      <div className="my-5 grid place-items-center">
        <div
          className="relative h-40 w-40 rounded-full"
          style={{
            background:
              'conic-gradient(#ff2d55,#ff9500,#ffd60a,#34c759,#00c7be,#0a84ff,#5e5ce6,#bf5af2,#ff2d55)',
          }}
        >
          <div className="absolute inset-5 rounded-full bg-[#0b0b12]" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <p className="font-display text-2xl font-bold">82%</p>
              <p className="text-[9px] tracking-widest text-white/40">
                BRIGHTNESS
              </p>
            </div>
          </div>
          <div className="absolute top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-[#bf5af2] shadow-lg" />
        </div>
      </div>

      <div className="flex justify-center gap-2 px-5">
        {swatches.map((c) => (
          <span
            key={c}
            className="h-5 w-5 rounded-full ring-1 ring-white/10"
            style={{ background: c }}
          />
        ))}
      </div>

      <div className="mt-5 px-4">
        <p className="mb-2 font-mono text-[10px] tracking-widest text-white/40">
          SCENES
        </p>
        <div className="grid grid-cols-2 gap-2">
          {scenes.map((s, i) => (
            <div
              key={s}
              className={`rounded-2xl px-3 py-3 text-[12px] font-semibold ${
                i === 1
                  ? 'bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-white'
                  : 'bg-white/5 text-white/70'
              }`}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const appScreenMap: Record<string, () => React.JSX.Element> = {
  crumb: CrumbScreen,
  glopro: GloproScreen,
}
