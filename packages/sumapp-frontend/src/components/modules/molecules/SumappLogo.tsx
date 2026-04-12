import SumappIcon from '@modules/atoms/SumappIcon'
import { NavLink } from 'react-router'

const SumappLogo = () => {
  return (
    <NavLink to="/" className="flex flex-row items-center gap-3" end>
      <div className="p-1.5 bg-indigo-700 rounded-md">
        <SumappIcon />
      </div>
      <h1 className="text-xl font-black tracking-wide leading-none">sumapp</h1>
    </NavLink>
  )
}

export default SumappLogo
