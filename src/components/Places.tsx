import { useState } from "react"
import { IPlaces } from "../interfaces/intplaces"

interface PlacesProps {
  places: IPlaces
}

export function Places({ places }: PlacesProps) {
  const [more, setMore] = useState(false)
  return (
    <div className='py-2 px-4 rounded flex flex-col items-center mb-7 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white font-bold font-mono text-xl'>
      <img src={places.image} alt={places.title} />
      <p>{places.title}</p>
      <button className='bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-black py-2 px-7 mt-3 mb-2 active:underline hover:text-white' onClick={() => setMore(prev => !prev)}>{more ? 'Hide' : 'More'}</button>
      {more && <div>
        <p>{places.description}</p>
      </div>}
    </div>
  )
}