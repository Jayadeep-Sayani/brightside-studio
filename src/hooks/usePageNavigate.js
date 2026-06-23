import { useNavigate } from 'react-router-dom'

export function usePageNavigate() {
  const navigate = useNavigate()

  return (to) => {
    const go = () => navigate(to)

    if (typeof document !== 'undefined' && document.startViewTransition) {
      document.startViewTransition(go)
    } else {
      go()
    }
  }
}
