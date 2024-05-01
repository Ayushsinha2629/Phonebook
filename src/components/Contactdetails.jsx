import React, { useState, useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';

const ContactDetails = ({ isOpen, onClose }) => {
    const { contactId } = useParams();
    const [contact, setContact] = useState();
    const [isEntering, setIsEntering] = useState(true);

    const Navigate = useNavigate();

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await fetch(`https://mfpwxvanolojwoflxwvo.supabase.co/rest/v1/contacts?select=*&id=eq.${contactId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mcHd4dmFub2xvandvZmx4d3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NDU2MTIsImV4cCI6MjAyOTQyMTYxMn0.zVmujhftittETdWgoTdqqYIydFA46M0uMFWgYcjHBHs"
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Fetched data:', data[0])
                setContact(data[0]);
            } catch (error) {
                console.error('Error while fetching contact details:', error.message);
            }
        };

        fetchContact();
    }, [contactId]);

    const handleClose = () => {
        setIsEntering(false); 
        setTimeout(() => {
            onClose(); 
            Navigate("/contactlist");
        }, 300); 
    };

    if (!isOpen || !contact) {
        return null;
    }
    return (
        <>
           <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-transform ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className='flex flex-wrap gap-20 mx-auto w-[37vw] text-left border-2 border-white p-6 bg-zinc-900'>
                <div className='flex flex-col pr-32'>
                    <span className='pl-1'>Name*</span>
                    <p className='p-1 text-xl'>{contact.name}</p>
                </div>
                <div className='flex flex-col'>
                    <span className='pl-1'>Phone Number*</span>
                    <p className='p-1 text-xl'>{contact.phone_number}</p>
                </div>
                <div className='flex flex-col'>
                    <span>Address</span>
                    <p className='p-0 text-xl w-[33vw]'>{contact.address}</p>
                </div>
                <button onClick={handleClose} className='text-white bg-zinc-800 border-2 border-white mx-auto py-2 px-8 font-medium rounded-md'>
                    Close
                </button>
            </div>
            </div>
            
        </>
    );
};

export default ContactDetails