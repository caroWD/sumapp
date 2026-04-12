import { Menu } from 'lucide-react'
import { Button } from '@shadcn/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@shadcn/sheet'
import SumappLogo from './SumappLogo'
import type { NavigationItem } from './Navigation'
import { NavLink } from 'react-router'

type HamburgerMenuProps = {
  items: NavigationItem[]
}

const HamburgerMenu = ({ items }: HamburgerMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SumappLogo />
        </SheetHeader>
        <ul className="flex flex-col px-4">
          {items.map((item) => (
            <li key={item.key} className="py-2">
              <NavLink to={item.path} end className="uppercase tracking-widest">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default HamburgerMenu
