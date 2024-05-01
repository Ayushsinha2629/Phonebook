import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contactlist = () => {
    const Navigate = useNavigate()

    const handleClick = () => {
      localStorage.clear();
      Navigate("/")
    }
    
    return (
        <>
        <nav className='w-full flex justify-between m-16'>
            <span>
                PB
            </span>
            <button onClick={(handleClick)} className='flex border-2 border-white gap-5 items-center px-6 py-2 bg-zinc-900'>LOGOUT</button>

        </nav>
        <div className='flex justify-center'>
             <button onClick={()=>Navigate("/addcontact")} className='flex border-2 border-white gap-5 items-center w-[30vw] py-2 bg-zinc-900'>
                <span className='mr-28 ml-8'><svg width="20" height="20" viewBox="0 0 100 100">
                    <line x1="50" y1="10" x2="50" y2="90" stroke="white" stroke-width="3" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="white" stroke-width="3" /></svg>
                </span>
                <span className='text-center'>ADD CONTACT</span>
                </button>
        </div>
        <div className='flex justify-center mt-6'>
        <div className='flex flex-col border-2 border-white gap-5 w-[30vw] py-2 bg-zinc-900 text-left p-4 max-h-64 overflow-y-scroll'>
         <span>john doe </span>
         <span>john doe </span>
         <span>john doe </span>
         <span>john doe </span>
         <span>john doe </span>
         <span>john doe </span>
         <span>john doe </span>
        </div>
        </div>
        </>


    )
}

export default Contactlist