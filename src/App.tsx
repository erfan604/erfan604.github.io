import Intro from './components/Intro'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import { ShowcaseProvider } from './lib/showcase'

export default function App() {
  return (
    <ShowcaseProvider>
      <div className="grain paper-tint min-h-screen">
        <Intro />
        <Nav />
        <main>
          <Hero />

          <Showcase />
        </main>
        <Footer />
      </div>
    </ShowcaseProvider>
  )
}
