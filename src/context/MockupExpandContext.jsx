import { createContext, useContext, useMemo, useState } from 'react'
import MockupExpandOverlay from '../components/MockupExpandOverlay'

const MockupExpandContext = createContext(null)

export function MockupExpandProvider({ children }) {
  const [activeDemo, setActiveDemo] = useState(null)

  const value = useMemo(
    () => ({
      openDemo: (demoId) => setActiveDemo(demoId),
      closeDemo: () => setActiveDemo(null),
      activeDemo,
    }),
    [activeDemo]
  )

  return (
    <MockupExpandContext.Provider value={value}>
      {children}
      {activeDemo ? <MockupExpandOverlay demoId={activeDemo} onClose={() => setActiveDemo(null)} /> : null}
    </MockupExpandContext.Provider>
  )
}

export function useMockupExpand() {
  const context = useContext(MockupExpandContext)

  if (!context) {
    throw new Error('useMockupExpand must be used within MockupExpandProvider')
  }

  return context
}
