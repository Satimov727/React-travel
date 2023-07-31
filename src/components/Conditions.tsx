import { IConditions } from "../interfaces/intconditions"

interface ConditionsProps {
  conditions: IConditions
}

export function Conditions({ conditions }: ConditionsProps) {
  return (
    <div className='py-2 px-4 rounded flex flex-col items-center mb-7 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white font-bold font-mono text-xl'>
      <img src={conditions.image} alt={conditions.title} />
      <p>{conditions.title}</p>
      <a className='bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 text-black py-2 px-3 mt-3 mb-2 active:underline hover:text-white' href={conditions.link} target="_blank">Details</a>
    </div>
  )
}