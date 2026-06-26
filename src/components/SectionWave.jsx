import './SectionWave.css'

function SectionWave({ flip = false, tone = 'white' }) {
  return (
    <div
      className={`section-wave section-wave--${tone}${flip ? ' section-wave--flip' : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none">
        <path
          d="M0,32 C240,56 480,8 720,28 C960,48 1200,16 1440,36 L1440,56 L0,56 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default SectionWave
