import { useState } from 'react'
import './index.css'
function App() {
  const [change,setChange] =useState<boolean>(true)

  const changeText =()=>{
    setChange(!change)
  }

  return (
    <div className='h-[100vh] bg-black flex justify-center items-center'>
      <h1 className="text-3xl font-bold border-b-6
       text-red-600 inline cursor-pointer " onClick={changeText}>
        {change ? `Hello world!`:`Welcome home`}
      </h1>
    </div>
  )
}

export default App
