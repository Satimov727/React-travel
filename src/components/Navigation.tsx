import { Link } from 'react-router-dom'

export function Navigation() {

  return (
    <nav className='items-center py-6 bg-gray-900 font-bold font-mono text-xl flex justify-between text-white'>
      <h3 className='ml-4'>Travel.com</h3>
      <span>
        <Link to="/" className='mr-4 active:underline'>Countries</Link >
        <Link to="/conditions" className='mr-4 active:underline'>Instruction</Link >
      </span>
    </nav>
  )

}