import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@shadcn/navigation-menu'
import { NavLink } from 'react-router'

export type NavigationItem = {
  key: number
  label: string
  path: string
}

type NavigationProps = {
  items: NavigationItem[]
}

const Navigation = ({ items }: NavigationProps) => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="gap-2">
        {items.map((item) => (
          <NavigationMenuItem key={item.key}>
            <NavigationMenuLink asChild>
              <NavLink to={item.path} viewTransition>
                {item.label}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation
