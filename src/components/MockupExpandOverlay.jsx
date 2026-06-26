import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { mockupDemos } from '../data/mockupDemos'
import { MockupChrome } from './MockupPreviews'
import './MockupExpandOverlay.css'

function MockupExpandOverlay({ demoId, onClose }) {
  const demo = mockupDemos[demoId]
  const closeRef = useRef(null)

  useEffect(() => {
    if (!demo) return undefined

    const previousOverflow = document.body.style.overflow
    const previousTitle = document.title
    document.body.style.overflow = 'hidden'
    document.title = `${demo.label} | Sample Mockup`

    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.title = previousTitle
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [demo, onClose])

  if (!demo) return null

  const { Site, url, variant, label } = demo

  return createPortal(
    <div className="mockup-expand" role="dialog" aria-modal="true" aria-label={`${label} mockup preview`}>
      <button type="button" className="mockup-expand__backdrop" aria-label="Close mockup" onClick={onClose} />

      <div className="mockup-expand__shell">
        <div className="mockup-expand__toolbar">
          <button
            ref={closeRef}
            type="button"
            className="mockup-expand__close"
            aria-label="Close mockup"
            onClick={onClose}
          >
            Close preview
          </button>
        </div>

        <div className={`mockup-expand__frame mockup-expand__frame--${variant}`}>
          <MockupChrome url={url} variant={variant} />

          <div className="mockup-expand__screen">
            <Site />
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default MockupExpandOverlay
