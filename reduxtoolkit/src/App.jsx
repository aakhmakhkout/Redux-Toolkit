import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './app/slices/counter'

const App = () => {
  const [amountval, setamountval] = useState(0)

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='w-full h-screen bg-black text-white flex flex-col justify-center items-center gap-5'>
      <div className='bg-white/20 w-60 h-30 flex justify-center items-center text-5xl rounded-2xl'>{count}</div>
      <button className='bg-purple-500 cursor-pointer  w-60 h-15 text-3xl rounded-sm font-bold text-black active:scale-95' onClick={()=> {
        dispatch(increment())
      }}>Increment</button>
      <button className='bg-orange-500 cursor-pointer  w-60 h-15 text-3xl rounded-sm font-bold text-black active:scale-95' onClick={()=> {
        dispatch(decrement())
      }}>Decrement</button>
      <div>
      <form className='flex flex-col gap-2' onSubmit={(elem)=>{
        elem.preventDefault()
        dispatch(incrementByAmount(amountval))
      }}>
      <input type="text" placeholder='Enter amount' className='bg-[#3b6886] h-10 w-full px-2 rounded-sm outline-none' onChange={(elem)=> {
        const value = elem.target.value
        setamountval(parseInt(value))
      }}/>
      <button className='bg-cyan-500 w-60 h-15 text-xl cursor-pointer rounded-sm font-bold text-black active:scale-95'>Increment By Amount</button>
      </form>
      </div>

    </div>
  )
}

export default App