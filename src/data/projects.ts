export type WebProject = {
  id: string
  name: string
  tagline: string
  url: string
  domain: string
  year: string
  stack: string[]
  role: string
  shot: string // path under /public
  accent?: string
}

export type AppProject = {
  id: string
  name: string
  tagline: string
  year: string
  stack: string[]
  status: string
  icon: string // emoji or short glyph for the home-screen tile
  tile: string // tailwind gradient classes for the app tile
  screens: string[] // paths under /public
}

/* ---- WEBSITES (browser window) ---- */
export const webProjects: WebProject[] = [
  {
    id: 'fetchi',
    name: 'Fetchi',
    tagline: 'A taste-driven product aggregator. Search, rerank, discover.',
    url: 'https://fetchi.shop',
    domain: 'fetchi.shop',
    year: '2026',
    stack: ['Next.js', 'Azure', 'Postgres', 'R2 CDN'],
    role: 'Solo: design, build, infra, SEO',
    shot: '/shots/fetchi.png',
    accent: '#ff3b1f',
  },
  {
    id: 'welcomeaide',
    name: 'WelcomeAide',
    tagline: 'AI tools that help newcomers settle into Canada. 21 languages.',
    url: 'https://welcomeaide.com',
    domain: 'welcomeaide.com',
    year: '2026',
    stack: ['Next.js 15', 'TS', 'Tailwind', 'Azure ACA'],
    role: 'Founder & Executive Director',
    shot: '/shots/welcomeaide.png',
    accent: '#1e3a5f',
  },
  {
    id: 'silvertouch',
    name: 'SilverTouch',
    tagline: 'Renovation studio site. Built and maintained for the family trade.',
    url: 'https://silvertouchrenovation.com',
    domain: 'silvertouchrenovation.com',
    year: '2025',
    stack: ['WordPress', 'Divi', 'Custom CSS'],
    role: 'Design & build',
    shot: '/shots/silvertouch.png',
    accent: '#9a7b4f',
  },
  {
    id: 'techtour247',
    name: 'TechTour247',
    tagline: 'A design-first, motion-heavy experiment in 3D web.',
    url: 'https://techtour247.com',
    domain: 'techtour247.com',
    year: '2026',
    stack: ['Next.js', 'GSAP', 'three / r3f', 'Theatre'],
    role: 'Design & build',
    shot: '/shots/techtour247.png',
    accent: '#1f3aff',
  },
]

/* ---- APPS (iPhone) ---- */
export const appProjects: AppProject[] = [
  {
    id: 'crumb',
    name: 'Crumb',
    tagline: 'Track gluten-free spending, claim the celiac tax credit.',
    year: '2026',
    stack: ['Expo / RN', 'Cloudflare D1', 'R2', 'Workers AI'],
    status: 'In TestFlight',
    icon: '🍞',
    tile: 'from-amber-400 to-orange-500',
    screens: ['/shots/crumb-1.png', '/shots/crumb-2.png'],
  },
  {
    id: 'glopro',
    name: 'GloPro',
    tagline: 'Control outdoor LED lighting. Reverse-engineered BLE, per-pixel.',
    year: '2026',
    stack: ['Expo / RN', 'BLE', 'Reanimated'],
    status: 'TestFlight builds',
    icon: '◐',
    tile: 'from-fuchsia-500 to-indigo-600',
    screens: ['/shots/glopro-1.png', '/shots/glopro-2.png'],
  },
]

/* ---- EVERYTHING ELSE (index list) ---- */
export type IndexEntry = {
  name: string
  kind: string
  year: string
  blurb: string
  stack: string
}

export const indexEntries: IndexEntry[] = [
  {
    name: 'Fetchi',
    kind: 'Web · Commerce',
    year: '2026',
    blurb: 'Product aggregator with semantic search & geo-routed rails.',
    stack: 'Next.js · Azure · Postgres',
  },
  {
    name: 'WelcomeAide',
    kind: 'Web · Nonprofit',
    year: '2026',
    blurb: 'Multilingual AI assistant for newcomers to Canada.',
    stack: 'Next.js 15 · Azure ACA',
  },
  {
    name: 'Crumb',
    kind: 'iOS · Health/Fintech',
    year: '2026',
    blurb: 'Celiac GF tax-credit tracker with receipt OCR.',
    stack: 'Expo · CF D1/R2/AI',
  },
  {
    name: 'GloPro',
    kind: 'iOS · Hardware',
    year: '2026',
    blurb: 'Music-reactive LED controller over reverse-engineered BLE.',
    stack: 'Expo · BLE · Reanimated',
  },
  {
    name: 'Polymarket Edge',
    kind: 'System · Research',
    year: '2026',
    blurb: 'Statistical screener for edge-positive wallets (Poisson-binomial / FDR).',
    stack: 'Python · Dune · Goldsky',
  },
  {
    name: 'SilverTouch',
    kind: 'Web · Business',
    year: '2025',
    blurb: 'Renovation studio marketing site.',
    stack: 'WordPress · Divi',
  },
  {
    name: 'TechTour247',
    kind: 'Web · Experiment',
    year: '2026',
    blurb: 'Design-first 3D web playground.',
    stack: 'three / r3f · GSAP',
  },
  {
    name: 'AI Mafia',
    kind: 'Bot · Community',
    year: '2026',
    blurb: 'Autonomous Discord game master and moderation bot.',
    stack: 'Node · discord.js',
  },
]
