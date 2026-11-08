import type { CSSProperties } from 'react'
import './PreviewCard.css'

export type PreviewCardProps = {
  title: string
  description: string
  icon: string
  color: string
}

// Lets the card pass its accent colour to CSS as a custom property
type PreviewCardStyle = CSSProperties & { '--card-color': string }

function PreviewCard({ title, description, icon, color }: PreviewCardProps) {
  const style: PreviewCardStyle = { '--card-color': color }

  return (
    <article className="preview-card" style={style}>
      <img className="preview-card__icon" src={icon} alt="" width={64} height={40} />
      <h2 className="preview-card__title">{title}</h2>
      <p className="preview-card__description">{description}</p>
      <a className="preview-card__link" href="#">
        Learn More<span className="sr-only"> about {title}</span>
      </a>
    </article>
  )
}

export default PreviewCard
