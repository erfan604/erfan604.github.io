type Props = {
  items: string[]
  className?: string
}

/**
 * Seamless CSS marquee. The track is duplicated and translated -50% so the
 * loop is invisible. Pausing on hover is handled by the .marquee-paused class.
 */
export default function Marquee({ items, className = '' }: Props) {
  const row = [...items, ...items]
  return (
    <div className={`marquee-paused overflow-hidden ${className}`}>
      <div className="animate-marquee flex w-max items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 whitespace-nowrap">{item}</span>
            <span className="text-vermillion text-xl leading-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
