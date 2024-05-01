import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Createaccount = () => {
    const Navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');

    const handleClick = async () => {
        const item = { name, password, email }; 
        console.warn(item);

          let result = await fetch("https://mfpwxvanolojwoflxwvo.supabase.co/auth/v1/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "*/*",
              "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mcHd4dmFub2xvandvZmx4d3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NDU2MTIsImV4cCI6MjAyOTQyMTYxMn0.zVmujhftittETdWgoTdqqYIydFA46M0uMFWgYcjHBHs"
            },
            body: JSON.stringify(item)
          });
          result = await result.json();
          console.warn("result", result);
          localStorage.setItem("user_info",JSON.stringify(result));
          if (result.error) {
            console.error("Authentication error:", result.error.message);
            // Handle authentication error (e.g., display a message to the user)
        } else {
            console.log("Authentication successful");
            localStorage.setItem("user_info", JSON.stringify(result));
            Navigate("/newaddcontact");
        }
        
    };
    return (
        <div>
            <div className='w-[20vw] bg-zinc-900 flex flex-col gap-5 border-2 border-white mx-auto mb-10 pb-6'>
                <span className='font-bold text-2xl pt-10'>Sign Up</span>
                <div className='flex flex-col' >
                    <div>
                        <p className='w-[104px]'>Name</p>
                        <input value={name} onChange={(e) => setname(e.target.value)} className=' p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="text" name='email' />
                    </div>
                    <div>
                        <p className='mr-[203px]'>Email</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className=' p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="text" name='email' />
                    </div>
                    <div>
                        <p className='mr-44'>Password</p>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className=' p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="text" name='password' />
                    </div>
                    <div>
                        <p className='w-[187px]'>Confirm Password</p>
                        <input value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} className=' p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="text" name='password' />
                    </div>
                </div>
                <div className='flex justify-center'>

                    <button onClick={(handleClick)} className=' py-2 px-8 border border-white rounded-full bg-black text-center'>
                        Submit
                    </button>
                    <div>
                    </div>
                </div>
                <span>Log in</span>
            </div>
        </div>
    )
}

export default Createaccount