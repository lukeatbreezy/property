// A softened backdrop blur behind the header, at yStart..yEnd of its
// container, used over the hero photo before any scrolling has happened.
export function ProgressiveBlur({
  className = '',
  startBlur = 8,
  yStart = 8,
  yEnd = 100,
}: {
  className?: string
  startBlur?: number
  yStart?: number
  yEnd?: number
}) {
  const top = `${yStart}%`
  const bottom = `${100 - yEnd}%`

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 ${className}`}
      style={{
        top,
        bottom,
        zIndex: 1,
        backdropFilter: `blur(${startBlur}px)`,
        WebkitBackdropFilter: `blur(${startBlur}px)`,
      }}
    />
  )
}
