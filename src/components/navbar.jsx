import { Link } from 'react-router-dom';
import {planets} from '../constants.js'


export default function Navbar() {
  return( 
  <nav className='text-white border-b-white border-b border-opacity-20 '>
    <div className='flex justify-between items-center p-6'>

    <div>
      <Link to='/' className="font-antonio font-medium text-[1.75rem] tracking-[-1.05px] opacity-100">THE PLANETS</Link> 
    </div>
    <ul className='flex gap-8'>
      {planets.map((planet, index) => (
        <li key={index} className=' font-spartan font-semibold tracking-[1px] text-spartan-md'>
          <Link to={`/planet/${planet}`}>{planet.toUpperCase()}</Link>
        </li>
      ))}
    </ul>
    </div>

  </nav>);
}