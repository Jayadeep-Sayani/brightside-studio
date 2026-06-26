import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { mockupDemos } from '../data/mockupDemos'
import { MockupChrome } from './MockupPreviews'
import './MockupExpandOverlay.css'

function MockupExpandOverlay({ demoId, onClose }) {
  const demo = mockupDemos[demoId]
  const closeRef = useRef(null)
  const [mobileView, setMobileView] = useState(false)

  useEffect(() => {
    setMobileView(false)
  }, [demoId])

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

  const { Site, url, variant, label, mobilePreview } = demo

  return createPortal(
    <div className="mockup-expand" role="dialog" aria-modal="true" aria-label={`${label} mockup preview`}>
      <button type="button" className="mockup-expand__backdrop" aria-label="Close mockup" onClick={onClose} />

      <div
        className={`mockup-expand__shell${mobileView ? ' mockup-expand__shell--mobile' : ''}`}
      >
        <div className="mockup-expand__toolbar">
          {mobilePreview ? (
            <button
              type="button"
              className="mockup-expand__viewport-toggle"
              aria-pressed={mobileView}
              onClick={() => setMobileView((current) => !current)}
            >
              {mobileView ? 'Desktop view' : 'Mobile view'}
            </button>
          ) : (
            <span className="mockup-expand__toolbar-spacer" aria-hidden="true" />
          )}

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

        <div
          className={`mockup-expand__frame mockup-expand__frame--${variant}${
            mobileView ? ' mockup-expand__frame--mobile-preview' : ''
          }`}
        >
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
