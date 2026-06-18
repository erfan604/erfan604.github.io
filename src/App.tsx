import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Showcase from './components/Showcase'
import ProjectIndex from './components/ProjectIndex'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain paper-tint min-h-screen">
      <Cursor />
      <Nav />
      <main>
        <Hero />

        <Marquee
          items={[
            'Fetchi',
            'WelcomeAide',
            'Crumb',
            'GloPro',
            'SilverTouch',
            'TechTour247',
            'Polymarket Edge',
            'AI Mafia',
          ]}
          className="border-y border-line bg-paper-2/60 py-5 font-display text-3xl font-semibold text-ink sm:text-5xl"
        />

        <Showcase />
        <ProjectIndex />
      </main>
      <Footer />
    </div>
  )
}
