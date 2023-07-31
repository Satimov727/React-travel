import { Conditions } from "../components/Conditions"
import { conditions } from '../data/conditions'


export function Instruction() {
  return (
    <>
      <div className='relative'>
        <img src="https://i.pinimg.com/originals/1e/8d/4b/1e8d4b0c3c846839663d8bf9132425b4.jpg" className="opacity-90" />
        <div className='absolute top-3 left-0 right-0 text-center text-white font-bold font-mono text-xl pt-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r py-2 px-4 rounded-xl w-1/4 ml-auto mr-auto mt-3 shadow-2xl'>Travel conditions</div>
        <div className='absolute top-24 grid grid-cols-3 gap-10  pl-10 pr-10'>
          {conditions.map(product => <Conditions conditions={product} key={product.id} />)}
        </div>
      </div >
    </>
  )
}