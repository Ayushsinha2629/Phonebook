import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Createaccount = () => {
    const Navigate = useNavigate(); // Hook for navigation

    // State variables for form inputs
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    let apikey = import.meta.env.VITE_APP_API_KEY; // API key

    // Function to handle signup button click
    const handleClick = async () => {
        const item = { name, password, email };
        console.warn(item);

        // POST request to signup endpoint
        let result = await fetch("https://mfpwxvanolojwoflxwvo.supabase.co/auth/v1/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "apikey": apikey,
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result);

        // Store user info in localStorage
        localStorage.setItem("user_info", JSON.stringify(result));

        // Check if authentication was successful and navigate accordingly
        if (result.aud === "authenticated") {
            Navigate("/newaddcontact");
        } else {
            alert("Authentication unsuccessful");
        }
    };

    return (
        <div>
            {/* Sign up form */}
            <div className='w-[20vw] bg-zinc-900 flex flex-col gap-5 border-2 border-white mx-auto mb-10 pb-6 rounded-xl'>
                <span className='font-bold text-2xl pt-10'>Sign Up</span>
                <div className='flex flex-col gap-3'>
                    <div>
                        <p className='w-[104px]'>Name</p>
                        {/* Input for name */}
                        <input value={name} onChange={(e) => setName(e.target.value)} className='p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="text" name='name' />
                    </div>
                    <div>
                        <p className='mr-[203px]'>Email</p>
                        {/* Input for email */}
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="text" name='email' />
                    </div>
                    <div>
                        <p className='mr-44'>Password</p>
                        {/* Input for password */}
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="text" name='password' />
                    </div>
                    <div>
                        <p className='w-[187px]'>Confirm Password</p>
                        {/* Input for confirming password */}
                        <input value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} className='p-2 text-white bg-zinc-800 w-4/5 rounded-lg' type="text" name='confirmPassword' />
                    </div>
                </div>
                <div className='flex justify-center'>
                    {/* Sign up button */}
                    <button onClick={handleClick} className='py-2 px-8 border border-white rounded-full bg-black text-center'>
                        Submit
                    </button>
                </div>
                <span onClick={() => Navigate("/login")} className='cursor-pointer'>Log in</span>
            </div>
        </div>
    );
}

export default Createaccount;
