import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { ALL_STYLES, MAPBOX_TOKEN, STYLE_GROUPS, type MapStyle } from './styles'

mapboxgl.accessToken = MAPBOX_TOKEN

const DEFAULT_STYLE_ID = STYLE_GROUPS[0].styles[0].id
const INITIAL_CENTER: [number, number] = [-122.4194, 37.7749]
const INITIAL_ZOOM = 12.5

export function StyleGalleryApp() {
  const [activeId, setActiveId] = useState(DEFAULT_STYLE_ID)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)

  const activeStyle = ALL_STYLES.find((style) => style.id === activeId) as MapStyle

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: STYLE_GROUPS[0].styles[0].styleUrl,
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
      pitch: 45,
    })
    mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!activeStyle.styleUrl || !mapRef.current) return
    mapRef.current.setStyle(activeStyle.styleUrl)
  }, [activeStyle])

  return (
    <div className="flex h-svh w-full bg-[#121212] text-[#fdfcfc]">
      <aside className="flex w-72 shrink-0 flex-col overflow-y-auto border-r border-white/10 bg-[#181818]">
        <div className="px-5 pt-6 pb-4">
          <h1 className="text-base font-semibold">Mapbox Style Gallery</h1>
          <p className="mt-1 text-xs text-white/50">
            Breezy styles plus every style linked from{' '}
            <a
              href="https://github.com/NatEvatt/awesome-mapbox-gl-styles"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              awesome-mapbox-gl-styles
            </a>
            .
          </p>
        </div>

        {STYLE_GROUPS.map((group) => (
          <div key={group.title} className="px-3 pb-4">
            <div className="px-2 pb-1 text-[11px] font-semibold tracking-wide text-white/40 uppercase">
              {group.title}
            </div>
            <p className="px-2 pb-2 text-[11px] leading-snug text-white/35">{group.description}</p>
            <div className="flex flex-col gap-0.5">
              {group.styles.map((style) => {
                const isActive = style.id === activeId
                return (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setActiveId(style.id)}
                    className={`rounded-lg px-2.5 py-2 text-left text-sm transition-colors ${
                      isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {style.name}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </aside>

      <main className="relative flex-1">
        <div
          ref={mapContainerRef}
          style={{
            position: 'absolute',
            inset: 0,
            visibility: activeStyle.styleUrl ? 'visible' : 'hidden',
          }}
        />
        {activeStyle.previewUrl && (
          <iframe
            title={activeStyle.name}
            src={activeStyle.previewUrl}
            className="absolute inset-0 size-full border-0"
          />
        )}

        <div className="pointer-events-none absolute top-4 left-4 max-w-md rounded-xl bg-black/50 px-4 py-3 backdrop-blur">
          <div className="text-sm font-semibold">{activeStyle.name}</div>
          <div className="mt-0.5 text-xs text-white/60">
            Source:{' '}
            <a
              href={activeStyle.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto underline hover:text-white"
            >
              {activeStyle.source}
            </a>
          </div>
          {activeStyle.previewUrl && (
            <div className="mt-1 text-xs text-white/45">
              Shown via the style's own hosted demo — it uses OpenMapTiles vector tiles that need a MapTiler API
              key we don't have.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
