import PreviewCard, { type PreviewCardProps } from './components/PreviewCard.tsx'
import sedansIcon from '../assets/images/icon-sedans.svg'
import suvsIcon from '../assets/images/icon-suvs.svg'
import luxuryIcon from '../assets/images/icon-luxury.svg'
import './App.css'

const cards: PreviewCardProps[] = [
  {
    title: 'Sedans',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    icon: sedansIcon,
    color: 'var(--color-bright-orange)',
  },
  {
    title: 'SUVs',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    icon: suvsIcon,
    color: 'var(--color-dark-cyan)',
  },
  {
    title: 'Luxury',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    icon: luxuryIcon,
    color: 'var(--color-very-dark-cyan)',
  },
]

function App() {
  return (
    <main className="page">
      <h1 className="sr-only">3-column preview card component</h1>
      <div className="card-group">
        {cards.map((card) => (
          <PreviewCard key={card.title} {...card} />
        ))}
      </div>
    </main>
  )
}

export default App
