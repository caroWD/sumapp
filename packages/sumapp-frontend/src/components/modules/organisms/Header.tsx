import Container from '@modules/atoms/Container'
import SumappLogo from '@modules/molecules/SumappLogo'
import Navigation, { type NavigationItem } from '@modules/molecules/Navigation'
import ModeToggle from '@modules/molecules/ModeToggle'
import HamburgerMenu from '@modules/molecules/HamburgerMenu'

const Header = () => {
  const items: NavigationItem[] = [{ key: 1, label: 'Inicio', path: '/' }]

  return (
    <header className="fixed w-full py-3">
      <Container className="flex-row gap-4 justify-between items-center">
        <SumappLogo />
        <div className="flex flex-row gap-2 items-center">
          <Navigation items={items} />
          <ModeToggle />
          <HamburgerMenu items={items} />
        </div>
      </Container>
    </header>
  )
}

export default Header
