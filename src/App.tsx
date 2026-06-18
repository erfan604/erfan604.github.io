import Intro from './components/Intro'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Showcase from './components/Showcase'
import ProjectIndex from './components/ProjectIndex'
import Footer from './components/Footer'
import { ShowcaseProvider } from './lib/showcase'

const projects = ['Fetchi', 'WelcomeAide', 'Crumb', 'GloPro', 'SilverTouch']

export default function App() {
  return (
    <ShowcaseProvider>
      <div className="grain paper-tint min-h-screen">
        <Intro />
        <Cursor />
        <Nav />
        <main>
          <Hero />

          <Marquee
            items={[...projects, ...projects]}
            className="border-y border-line bg-paper-2/60 py-5 font-display text-3xl font-semibold text-ink sm:text-5xl"
          />

          <Showcase />
          <ProjectIndex />
        </main>
        <Footer />
      </div>
    </ShowcaseProvider>
  )
}
