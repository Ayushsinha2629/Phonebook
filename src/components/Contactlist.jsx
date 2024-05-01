import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

const Contactlist = () => {

    const [contacts, setContacts] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mfpwxvanolojwoflxwvo.supabase.co/rest/v1/contacts?select=*&user_id=eq.1bd00742-5183-4841-9881-059cc6295254', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mcHd4dmFub2xvandvZmx4d3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NDU2MTIsImV4cCI6MjAyOTQyMTYxMn0.zVmujhftittETdWgoTdqqYIydFA46M0uMFWgYcjHBHs'
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setContacts(data);

            } catch (error) {
                console.error('Error while fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleContactClick = (contactId) => {
        Navigate(`/contact/${contactId}`); 
    };

    const Navigate = useNavigate()
    

    return (
        <>
            <nav className='w-full flex justify-between m-16'>
                <span>
                    PB
                </span>
                <button onClick={() => Navigate("/")} className='flex border-2 border-white gap-5 items-center px-6 py-2 bg-zinc-900'>LOGOUT</button>

            </nav>
            <div className='flex justify-center'>
                <button onClick={() => Navigate("/addcontact")} className='flex border-2 border-white gap-5 items-center w-[30vw] py-2 bg-zinc-900'>
                    <span className='mr-28 ml-8'><svg width="20" height="20" viewBox="0 0 100 100">
                        <line x1="50" y1="10" x2="50" y2="90" stroke="white" stroke-width="3" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="white" stroke-width="3" /></svg>
                    </span>
                    <span className='text-center'>ADD CONTACT</span>
                </button>
            </div>
            <div className='flex justify-center mt-6'>
                <div className='flex flex-col border-2 border-white gap-5 w-[30vw] py-2 bg-zinc-900 text-left p-4 max-h-64 overflow-y-scroll'>
                    <ul>
                        {contacts.map((contact) => (
                            <li >
                                 <Link key={contact.id} to={`/contact/${contact.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{contact.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>


    )
}

export default Contactlist