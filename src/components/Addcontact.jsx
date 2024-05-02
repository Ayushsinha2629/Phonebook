import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const userId = localStorage.getItem('userId');
  const [isEntering, setIsEntering] = useState(true);
  const Navigate = useNavigate();
  let apikey = import.meta.env.VITE_APP_API_KEY;


  const handleClick = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          "apikey": apikey,
        },
        body: JSON.stringify({ name, phone_number: phoneNumber, user_id: userId, address }),
      };

      const response = await fetch('https://mfpwxvanolojwoflxwvo.supabase.co/rest/v1/contacts', requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Data has been saved:', result);
      alert('Form successfully submitted');
    } catch (error) {
      console.error('Error while saving data:', error.message);
    }
    Navigate('/contactlist');
    onClose();
  };
  const closeModal = () => {
    setIsEntering(false); 
    setTimeout(() => {
        onClose(); 
    }, 300); 
};

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-transform ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div>
      <div className="p-4 border-2 border-white bg-zinc-900 flex justify-between ">
                    <h2 className="text-2xl font-semibold">Add Contact</h2>
                    <button onClick={closeModal} className="focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500 hover:text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
        <div className='flex flex-wrap gap-10 mx-auto w-[50vw] h-[60vh] text-left border-2 border-white p-6 bg-zinc-900 '>
          <div className='flex flex-col mr-10'>
            <span className='pl-1 text-xl'>Name*</span>
            <input value={name} name='name' onChange={(e) => setName(e.target.value)} className='text-white bg-zinc-800 w-[20vw] rounded-md p-2' type='text' required />
          </div>
          <div className='flex flex-col'>
            <span className='pl-1 text-xl'>Phone Number*</span>
            <input value={phoneNumber} name='phone_number' onChange={(e) => setPhoneNumber(e.target.value)} className='text-white bg-zinc-800 w-[20vw] rounded-md p-2' type='text' required />
          </div>
          <div className='flex flex-col'>
            <span className='pl-1 text-xl'>Address</span>
            <textarea value={address} name='address' onChange={(e) => setAddress(e.target.value)} className='text-white bg-zinc-800 rounded-md w-[43.7vw] h-[5vw] p-2' type='text'></textarea>
          </div>
          <button onClick={handleClick} className='text-white bg-zinc-800 border-2 border-white mx-auto py-2 px-8 font-medium rounded-md'>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
