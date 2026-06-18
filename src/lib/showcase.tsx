import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import { webProjects } from '@/data/projects'

type ShowcaseState = {
  webId: string
  setWebId: (id: string) => void
  appId: string | null
  setAppId: (id: string | null) => void
  /** Activate a project's exhibit and scroll the showcase into view. */
  focus: (id: string, target: 'web' | 'app') => void
}

const ShowcaseContext = createContext<ShowcaseState | null>(null)

export function ShowcaseProvider({ children }: { children: ReactNode }) {
  const [webId, setWebId] = useState(webProjects[0].id)
  const [appId, setAppId] = useState<string | null>(null)

  const focus = (id: string, target: 'web' | 'app') => {
    if (target === 'web') {
      setWebId(id)
      setAppId(null)
    } else {
      setAppId(id)
    }
    document
      .getElementById('showcase')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <ShowcaseContext.Provider
      value={{ webId, setWebId, appId, setAppId, focus }}
    >
      {children}
    </ShowcaseContext.Provider>
  )
}

export function useShowcase() {
  const ctx = useContext(ShowcaseContext)
  if (!ctx) throw new Error('useShowcase must be used within ShowcaseProvider')
  return ctx
}
