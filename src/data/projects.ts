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
  published?: boolean // false = client hasn't published it publicly; hides "Open live"
  ctaLabel?: string // override for the action button (default "Open live ↗")
}

export type AppProject = {
  id: string
  name: string
  tagline: string
  year: string
  stack: string[]
  status: string
  icon: string // emoji fallback for the home-screen tile
  iconImg: string // real app launcher icon (path under /public)
  tile: string // tailwind gradient classes for the app tile
  screens: string[] // real app screenshots (paths under /public) — fallback when no live demo
  webUrl?: string // live, navigable web build to embed in the phone (when available)
  screenBg?: string // app's top background, fills the status-bar inset behind a live embed
}

/* ---- WEBSITES (browser window) ---- */
export const webProjects: WebProject[] = [
  {
    id: 'fetchi',
    name: 'Fetchi',
    tagline:
      'A shopping aggregator that unifies thousands of brands across 90+ retailers into one feed and reranks results by desirability instead of raw keyword match. Server-rendered product pages, semantic search with an embedding fallback, geo-routed image delivery, and an SEO/editorial layer that drives organic traffic.',
    url: 'https://fetchi.shop',
    domain: 'fetchi.shop',
    year: '2025',
    stack: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'Azure'],
    role: 'Solo: design, build, infra, SEO',
    shot: '/shots/fetchi.png?v=2',
    accent: '#ff3b1f',
  },
  {
    id: 'welcomeaide',
    name: 'WelcomeAide',
    tagline:
      'An AI nonprofit platform of free settlement tools for newcomers to Canada, anchored by the Aida assistant for navigating immigration, housing, and government paperwork. Localized into 21 languages with full RTL support, React Server Components, and an automated translation pipeline that runs on every commit.',
    url: 'https://welcomeaide.com',
    domain: 'welcomeaide.com',
    year: '2026',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'REST APIs', 'LLM APIs', 'Azure'],
    role: 'Founder & Executive Director',
    shot: '/shots/welcomeaide.png?v=2',
    accent: '#1e3a5f',
  },
  {
    id: 'silvertouch',
    name: 'SilverTouch',
    tagline:
      'The marketing site for a family renovation studio: service breakdowns, a project gallery, and lead capture. Built on a hand-tuned Divi child theme with custom CSS and JavaScript, and maintained directly over FTPS rather than through plugins.',
    url: 'https://silvertouchrenovation.com',
    domain: 'silvertouchrenovation.com',
    year: '2022',
    stack: ['WordPress', 'PHP', 'JavaScript', 'HTML / CSS', 'MySQL'],
    role: 'Design & build',
    shot: '/shots/silvertouch.png',
    accent: '#9a7b4f',
  },
  {
    id: 'xantrex',
    name: 'Xantrex',
    tagline:
      'A client project built with two classmates for SFU’s CMPT 276 software-engineering course: a solar MPPT charge-controller sizing tool. Enter panel specs, array layout, and battery-bank voltage and it applies NEC temperature-correction factors plus Victron datasheet limits to select a compatible controller. Spring Boot with Thymeleaf, Postgres persistence, and live minimum-temperature lookups from Open-Meteo.',
    url: 'https://xantrex.welcomeaide.com/calculator',
    domain: 'xantrex.welcomeaide.com',
    year: '2026',
    stack: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'JPA / Hibernate', 'PostgreSQL'],
    role: 'Team of 3 · backend + sizing logic',
    shot: '/shots/xantrex.png?v=4',
    accent: '#f59e0b',
    published: false,
  },
  {
    id: 'rubiks',
    name: "Rubik's Solver",
    tagline:
      'A Kociemba two-phase solver in Java that cracks any scrambled cube in well under a second. Admissible IDA* heuristics from precomputed pruning tables, a compact coordinate encoding of the cube, and clean OOP design searching a 43-quintillion-state space. No live site, so the tab opens the source repo.',
    url: 'https://github.com/erfan604/RubiksCube-solver',
    domain: 'github.com/erfan604/RubiksCube-solver',
    year: '2025',
    stack: ['Java', 'Algorithms', 'Data Structures', 'OOP', 'Heuristic Search'],
    role: 'Solo · algorithms',
    shot: '/shots/rubiks.png?v=3',
    accent: '#16a34a',
    ctaLabel: 'View source ↗',
  },
]

/* ---- APPS (iPhone) ---- */
export const appProjects: AppProject[] = [
  {
    id: 'crumb',
    name: 'Crumb',
    tagline:
      'A personal project I am building for my sister, who has celiac disease. It helps people with celiac recover the gluten-free price premium as a medical tax credit, using barcode lookup and receipt scanning to flag eligible items and tally the claimable difference. Offline-first local store synced to a Cloudflare Workers + D1 + R2 backend, with on-device AI for receipt parsing.',
    year: '2026',
    stack: ['React Native', 'Expo', 'TypeScript', 'REST APIs', 'SQL', 'Serverless'],
    status: 'In TestFlight',
    icon: '🍞',
    iconImg: '/shots/crumb-icon.png',
    tile: 'from-amber-400 to-orange-500',
    screens: ['/shots/crumb-1.png?v=3'],
    webUrl: 'https://crumb.welcomeaide.com/home',
    screenBg: '#f7f5ef',
  },
  {
    id: 'glopro',
    name: 'GloPro',
    tagline:
      'A client contract: a mobile app that controls Zengge and Magic Home Bluetooth LED strips down to individual pixels, with scene presets and music-reactive effects. Built on a reverse-engineered GATT command protocol and a real-time beat-detection engine that keeps multiple lights in sync.',
    year: '2026',
    stack: ['React Native', 'Expo', 'TypeScript', 'Bluetooth (BLE)', 'Reanimated'],
    status: 'TestFlight builds',
    icon: '◐',
    iconImg: '/shots/glopro-icon.png',
    tile: 'from-fuchsia-500 to-indigo-600',
    screens: ['/shots/glopro-1.png', '/shots/glopro-2.png', '/shots/glopro-3.png'],
    webUrl: 'https://glopro-adn.pages.dev',
    screenBg: '#0b0d12',
  },
]
