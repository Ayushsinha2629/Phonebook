import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ContactDetails = ({ isOpen, onClose, contactId }) => {
    // State variables
    const [contact, setContact] = useState();
    const [isEntering, setIsEntering] = useState(true);
    let apikey = import.meta.env.VITE_APP_API_KEY; // API key

    const Navigate = useNavigate(); // Hook for navigation

    // Fetch contact details on component mount or contactId change
    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await fetch(`https://mfpwxvanolojwoflxwvo.supabase.co/rest/v1/contacts?select=*&id=eq.${contactId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                        "apikey": apikey,
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Fetched data:', data[0]);
                setContact(data[0]);
            } catch (error) {
                console.error('Error while fetching contact details:', error.message);
            }
        };

        fetchContact();
    }, [contactId]);

    // Function to close modal and navigate back to contact list
    const handleClose = () => {
        setIsEntering(false);
        setTimeout(() => {
            onClose();
            Navigate("/contactlist");
        }, 300);
    };

    // Render null if modal is closed or contact data is not available
    if (!isOpen || !contact) {
        return null;
    }

    return (
        <>
            {/* Modal content */}
            <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-transform ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className='flex flex-wrap gap-20 mx-auto w-[50vw] h-[60vh] text-left border-2 border-white p-10 bg-zinc-900 rounded-xl'>
                    {/* Display contact details */}
                    <div className='flex flex-col pr-32'>
                        <span className='pl-1 text-xl'>Name*</span>
                        <p className='p-1 text-2xl'>{contact.name}</p>
                    </div>
                    <div className='flex flex-col'>
                        <span className='pl-1 text-xl'>Phone Number*</span>
                        <p className='p-1 text-2xl'>{contact.phone_number}</p>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xl'>Address</span>
                        {/* Display address or message if not available */}
                        {contact.address ? (
                            <p className='p-0 text-2xl w-[43vw]'>{contact.address}</p>
                        ) : (
                            <p className='p-0 text-2xl w-[43vw]'>Address not found.</p>
                        )}
                    </div>
                    {/* Close button */}
                    <button onClick={handleClose} className='text-white bg-zinc-800 border-2 border-white mx-auto py-2 px-8 font-medium rounded-md'>
                        Close
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContactDetails;
