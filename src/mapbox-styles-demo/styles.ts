// Set VITE_MAPBOX_TOKEN in a .env.local file (see .env.example) — never commit a real token.
export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN ?? ''

export type MapStyle = {
  id: string
  name: string
  /** A style the map can load directly (mapbox:// or a style.json URL). */
  styleUrl?: string
  /**
   * OpenMapTiles-based styles need a MapTiler API key we don't have, so they
   * can't be loaded into our own map instance — show the project's own
   * hosted demo instead.
   */
  previewUrl?: string
  source: string
  sourceUrl: string
}

export type StyleGroup = {
  title: string
  description: string
  styles: MapStyle[]
}

const AWESOME_LIST_URL = 'https://github.com/NatEvatt/awesome-mapbox-gl-styles'

export const STYLE_GROUPS: StyleGroup[] = [
  {
    title: 'Breezy',
    description: 'Custom styles from the dev-breezy Mapbox account.',
    styles: [
      {
        id: 'breezy-3d-lite',
        name: '3D Lite',
        styleUrl: 'mapbox://styles/dev-breezy/cmsnnewx2015m01sd88xia72o',
        source: 'Breezy',
        sourceUrl: 'https://api.mapbox.com/styles/v1/dev-breezy/cmsnnewx2015m01sd88xia72o',
      },
      {
        id: 'breezy-3d-dark',
        name: '3D Dark',
        styleUrl: 'mapbox://styles/dev-breezy/cmrtmy8u0003y01sg98f88uwu',
        source: 'Breezy',
        sourceUrl: 'https://api.mapbox.com/styles/v1/dev-breezy/cmrtmy8u0003y01sg98f88uwu',
      },
      {
        id: 'breezy-3d-light',
        name: 'Breezy 3D Light',
        styleUrl: 'mapbox://styles/dev-breezy/cmrtmqu9h00c501qkhrrq8rp1',
        source: 'Breezy',
        sourceUrl: 'https://api.mapbox.com/styles/v1/dev-breezy/cmrtmqu9h00c501qkhrrq8rp1',
      },
      {
        id: 'breezy-satellite',
        name: 'Satellite',
        styleUrl: 'mapbox://styles/dev-breezy/cmrtleqh900cr01qz6cuihiic',
        source: 'Breezy',
        sourceUrl: 'https://api.mapbox.com/styles/v1/dev-breezy/cmrtleqh900cr01qz6cuihiic',
      },
    ],
  },
  {
    title: 'Mapbox & community',
    description: 'Loaded live from the styles linked in the awesome-mapbox-gl-styles list.',
    styles: [
      {
        id: 'basic-v8',
        name: 'Basic (basic-v8)',
        styleUrl: 'https://raw.githubusercontent.com/mapbox/mapbox-gl-styles/master/styles/basic-v8.json',
        source: 'mapbox/mapbox-gl-styles',
        sourceUrl: 'https://github.com/mapbox/mapbox-gl-styles',
      },
      {
        id: 'bright-v8',
        name: 'Bright (bright-v8)',
        styleUrl: 'https://raw.githubusercontent.com/mapbox/mapbox-gl-styles/master/styles/bright-v8.json',
        source: 'mapbox/mapbox-gl-styles',
        sourceUrl: 'https://github.com/mapbox/mapbox-gl-styles/blob/master/styles/bright-v8.json',
      },
      {
        id: 'satellite-v9',
        name: 'Satellite (mapbox-v9)',
        styleUrl: 'https://raw.githubusercontent.com/mapbox/mapbox-gl-styles/master/styles/satellite-v9.json',
        source: 'mapbox/mapbox-gl-styles',
        sourceUrl: 'https://github.com/mapbox/mapbox-gl-styles',
      },
      {
        id: 'swiss-ski',
        name: 'Swiss Ski',
        styleUrl:
          'https://raw.githubusercontent.com/mapbox/mapbox-gl-swiss-ski-style/master/cij1zoclj002y8rkkdjl69psd.json',
        source: 'mapbox/mapbox-gl-swiss-ski-style',
        sourceUrl: 'https://github.com/mapbox/mapbox-gl-swiss-ski-style',
      },
      {
        id: 'vintage',
        name: 'Vintage',
        styleUrl:
          'https://raw.githubusercontent.com/mapbox/mapbox-gl-vintage-style/master/cif5p01n202nisaktvljx9mv3.json',
        source: 'mapbox/mapbox-gl-vintage-style',
        sourceUrl: 'https://github.com/mapbox/mapbox-gl-vintage-style',
      },
      {
        id: 'whaam',
        name: 'Whaam',
        styleUrl:
          'https://raw.githubusercontent.com/mapbox/mapbox-gl-whaam-style/master/cii8323c8004w0nlvtss3dbm2.json',
        source: 'mapbox/mapbox-gl-whaam-style',
        sourceUrl: 'https://github.com/mapbox/mapbox-gl-whaam-style',
      },
      {
        id: 'camouflage',
        name: 'Camouflage',
        styleUrl: 'https://raw.githubusercontent.com/jingsam/mapbox-gl-styles/master/Camouflage.json',
        source: 'jingsam/mapbox-gl-styles',
        sourceUrl: 'https://github.com/jingsam/mapbox-gl-styles/blob/master/Camouflage.json',
      },
      {
        id: 'neon',
        name: 'Neon',
        styleUrl:
          'https://raw.githubusercontent.com/NatEvatt/awesome-mapbox-gl-styles/master/styles/Neon/style.json',
        source: 'awesome-mapbox-gl-styles',
        sourceUrl: `${AWESOME_LIST_URL}/tree/master/styles/Neon`,
      },
    ],
  },
  {
    title: 'OpenMapTiles (preview)',
    description:
      'These styles render OpenMapTiles vector tiles through a MapTiler key we don’t have, so they’re shown via the project’s own hosted preview instead of our map.',
    styles: [
      {
        id: 'dark-matter',
        name: 'Dark Matter',
        previewUrl: 'https://openmaptiles.github.io/dark-matter-gl-style/',
        source: 'openmaptiles/dark-matter-gl-style',
        sourceUrl: 'https://github.com/openmaptiles/dark-matter-gl-style',
      },
      {
        id: 'positron',
        name: 'Positron',
        previewUrl: 'https://openmaptiles.github.io/positron-gl-style/',
        source: 'openmaptiles/positron-gl-style',
        sourceUrl: 'https://github.com/openmaptiles/positron-gl-style',
      },
      {
        id: 'osm-bright',
        name: 'OSM Bright',
        previewUrl: 'https://openmaptiles.github.io/osm-bright-gl-style/',
        source: 'openmaptiles/osm-bright-gl-style',
        sourceUrl: 'https://github.com/openmaptiles/osm-bright-gl-style',
      },
      {
        id: 'klokantech-basic',
        name: 'Basic (Klokantech)',
        previewUrl: 'https://openmaptiles.github.io/maptiler-basic-gl-style/',
        source: 'openmaptiles/klokantech-basic-gl-style',
        sourceUrl: 'https://github.com/openmaptiles/klokantech-basic-gl-style',
      },
      {
        id: 'klokantech-3d',
        name: 'Klokantech 3D',
        previewUrl: 'https://openmaptiles.github.io/maptiler-3d-gl-style/',
        source: 'openmaptiles/klokantech-3d-gl-style',
        sourceUrl: 'https://github.com/openmaptiles/klokantech-3d-gl-style',
      },
      {
        id: 'klokantech-terrain',
        name: 'Klokantech Terrain',
        previewUrl: 'https://openmaptiles.github.io/maptiler-terrain-gl-style/',
        source: 'openmaptiles/klokantech-terrain-gl-style',
        sourceUrl: 'https://github.com/openmaptiles/klokantech-terrain-gl-style',
      },
      {
        id: 'fiord-color',
        name: 'Fiord Color',
        previewUrl: 'https://openmaptiles.github.io/fiord-color-gl-style/',
        source: 'openmaptiles/fiord-color-gl-style',
        sourceUrl: 'https://github.com/openmaptiles/fiord-color-gl-style',
      },
      {
        id: 'toner',
        name: 'Toner',
        previewUrl: 'https://openmaptiles.github.io/maptiler-toner-gl-style/',
        source: 'openmaptiles/toner-gl-style',
        sourceUrl: 'https://github.com/openmaptiles/toner-gl-style',
      },
      {
        id: 'osm-liberty',
        name: 'OSM Liberty',
        previewUrl: 'https://maputnik.github.io/osm-liberty/',
        source: 'lukasmartinelli/osm-liberty',
        sourceUrl: 'https://github.com/lukasmartinelli/osm-liberty',
      },
    ],
  },
]

export const ALL_STYLES: MapStyle[] = STYLE_GROUPS.flatMap((group) => group.styles)
