import Intro from './components/Intro'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import ProjectIndex from './components/ProjectIndex'
import Footer from './components/Footer'
import { ShowcaseProvider } from './lib/showcase'

export default function App() {
  return (
    <ShowcaseProvider>
      <div className="grain paper-tint min-h-screen">
        <Intro />
        <Cursor />
        <Nav />
        <main>
          <Hero />

          <Showcase />
          <ProjectIndex />
        </main>
        <Footer />
      </div>
    </ShowcaseProvider>
  )
}
