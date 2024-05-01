import React from 'react'
import { useNavigate } from 'react-router-dom'

const Newaddcontact = () => {
    const Navigate = useNavigate()
    
  return (
    <>
    <nav className='w-full flex justify-between m-16'>
            <span>
                PB
            </span>
            <button onClick={() => Navigate("/")} className='flex border-2 border-white gap-5 items-center px-6 py-2 bg-zinc-900'>LOGOUT</button>

        </nav>
    <div>
      <div className="circle h-20 w-20 border-2 border-white rounded-full mx-auto bg-zinc-900 mt-36">
      <div onClick={()=> Navigate("/addcontact")} className='flex justify-center items-center'><svg width="70" height="76" viewBox="0 0 100 100 ">
                    <line x1="50" y1="10" x2="50" y2="90" stroke="white" stroke-width="3" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="white" stroke-width="3" /></svg>
                    </div>
      </div>
    </div>
    </>
  )
}

export default Newaddcontact 