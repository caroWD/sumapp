import useSupermarketLists from '@/components/hooks/useSupermarketLists'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router'

type Summary = {
  key: number
  label: string
  lists: number
}

const SummarySupermarketLists = () => {
  const { supermarketLists } = useSupermarketLists()

  const summary: Summary[] = [
    { key: 1, label: 'Listas:', lists: supermarketLists.length },
    {
      key: 2,
      label: 'Éxito:',
      lists: supermarketLists.filter((sl) => sl.supermarket === 'exito').length,
    },
    {
      key: 3,
      label: 'Carulla:',
      lists: supermarketLists.filter((sl) => sl.supermarket === 'carulla')
        .length,
    },
    {
      key: 4,
      label: 'EURO:',
      lists: supermarketLists.filter((sl) => sl.supermarket === 'euro').length,
    },
    {
      key: 5,
      label: 'Supermú:',
      lists: supermarketLists.filter((sl) => sl.supermarket === 'supermu')
        .length,
    },
    {
      key: 6,
      label: 'Boom:',
      lists: supermarketLists.filter((sl) => sl.supermarket === 'boom').length,
    },
  ]

  return (
    <div className="flex flex-row justify-between p-4 pl-6 border-b dark:border-zinc-900 border-zinc-100">
      <ul className="flex flex-row gap-6 items-center text-sm">
        {summary.map((s) => (
          <li className="flex flex-row gap-1.5">
            {s.label} <span className="font-bold">{s.lists}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-row gap-3">
        <Button variant="outline" className="cursor-pointer">
          Eliminar listas
        </Button>
        <Button className="cursor-pointer">
          <NavLink to="/agregar-lista" viewTransition>
            Agregar lista
          </NavLink>
        </Button>
      </div>
    </div>
  )
}

export default SummarySupermarketLists
