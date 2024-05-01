import React from 'react'
import {useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';



const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  
    
    const Navigate = useNavigate()

    const handleClick = async () => {
        const item = {password, email }; 
        console.warn(item);

          let result = await fetch("https://mfpwxvanolojwoflxwvo.supabase.co/auth/v1/token?grant_type=password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "*/*",
              "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mcHd4dmFub2xvandvZmx4d3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NDU2MTIsImV4cCI6MjAyOTQyMTYxMn0.zVmujhftittETdWgoTdqqYIydFA46M0uMFWgYcjHBHs"
            },
            body: JSON.stringify(item)
          });
          result = await result.json();
          console.log("result", result);
          localStorage.setItem('user-info',JSON.stringify(result));
          const userId = result.user.id
          localStorage.setItem("userId", userId);
          if (result.access_token) {
            Navigate("/contactlist");
            
        } else {
            alert("Invalid Login Credentials");
        }

        
    };
    return (
        <>
            <div className='pt-32 pb-10'>
                <h1 className='font-bold text-3xl'>PHONE BOOK</h1>
            </div>
            <div className='w-[20vw] bg-zinc-900 flex flex-col gap-5 border-2 border-white mx-auto mb-10 pb-6'>
                <span className='font-bold text-2xl pt-10'>Log In</span>
                <div className='flex flex-col' >
                    <div>
                        <p className='mr-[203px]'>Email</p>
                        <input value={email} onChange={(e) => setemail(e.target.value)} className=' p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="text" name='email' />
                    </div>
                    <div>
                        <p className='mr-44'>Password</p>
                        <input value={password} onChange={(e) => setpassword(e.target.value)} className=' p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="password" name='password' />
                    </div>
                </div>
                <div className='flex justify-center'>

                    <button onClick={(handleClick)} className=' py-2 px-8 border border-white rounded-full bg-black text-center '>
                        Submit
                    </button>
                    <div>
                    </div>
                </div>
                <span onClick={()=>Navigate("/createaccount")} className='cursor-pointer'>Create Account</span>
            </div>
        </>
    )
}

export default Login
