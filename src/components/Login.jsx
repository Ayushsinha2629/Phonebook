import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // State variables for email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate(); // Hook for navigation
    let apikey = import.meta.env.VITE_APP_API_KEY; // API key
    console.log(apikey);

    // Function to handle login button click
    const handleClick = async () => {
        const item = { password, email };
        console.warn(item);

        // POST request to login endpoint
        let result = await fetch("https://mfpwxvanolojwoflxwvo.supabase.co/auth/v1/token?grant_type=password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "apikey": apikey,
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.log("result", result);

        // Store user info in localStorage
        localStorage.setItem('user-info', JSON.stringify(result));
        const userId = result.user.id;
        localStorage.setItem("userId", userId);

        // Navigate to contact list if login successful, else show alert
        if (result.access_token) {
            Navigate("/contactlist");
        } else {
            alert("Invalid Login Credentials");
        }
    };

    return (
        <>
            {/* Login form */}
            <div className='pt-32 pb-10'>
                <h1 className='font-bold text-3xl'>PHONE BOOK</h1>
            </div>
            <div className='w-[20vw] bg-zinc-900 flex flex-col gap-5 border-2 border-white mx-auto mb-10 pb-6 rounded-xl'>
                <span className='font-bold text-2xl pt-10'>Log In</span>
                <div className='flex flex-col gap-2'>
                    <div>
                        <p className='mr-[203px]'>Email</p>
                        {/* Input for email */}
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className=' p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="text" name='email' required />
                    </div>
                    <div>
                        <p className='mr-44'>Password</p>
                        {/* Input for password */}
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className=' p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="password" name='password' required />
                    </div>
                </div>
                <div className='flex justify-center'>
                    {/* Login button */}
                    <button onClick={handleClick} className='py-2 px-8 border border-white rounded-full bg-black text-center'>
                        Submit
                    </button>
                </div>
                {/* Link to create account */}
                <span onClick={() => Navigate("/createaccount")} className='cursor-pointer'>Create Account</span>
            </div>
        </>
    );
};

export default Login;
