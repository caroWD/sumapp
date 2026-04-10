import Container from '@modules/atoms/Container'
import { Badge } from '@shadcn/badge'
import { ChartColumn, ListCheck, ChartPie, ShoppingBasket } from 'lucide-react'

type BadgeHero = {
  key: number
  label: string
  icon: 'chart' | 'list' | 'analytics' | 'products'
}

type HeroProps = {
  size: 'sm' | 'md' | 'lg' | 'xl'
  title: string
  subtitle: string
  badges?: BadgeHero[]
}

const Hero = ({ size, title, subtitle, badges }: HeroProps) => {
  return (
    <section
      className={`${size === 'sm' ? 'py-8' : size === 'md' ? 'py-16' : size === 'lg' ? 'py-20 sm:py-24 md:py-28 lg:py-32' : 'py-64'} border-b dark:border-white/5 border-black/5`}
    >
      <Container className="flex-col gap-4 justify-center items-center text-center *:max-w-xl">
        <h2 className="text-4xl leading-normal">{title}</h2>
        <p className="leading-relaxed">{subtitle}</p>
        {badges !== undefined && (
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {badges.map((badge) => (
              <Badge key={badge.key} variant="outline" className="p-3">
                {badge.icon === 'chart' ? (
                  <ChartColumn />
                ) : badge.icon === 'list' ? (
                  <ListCheck />
                ) : badge.icon === 'analytics' ? (
                  <ChartPie />
                ) : (
                  <ShoppingBasket />
                )}
                {badge.label}
              </Badge>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

export default Hero
