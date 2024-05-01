import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const userId = localStorage.getItem('userId');
  const Navigate = useNavigate();

  const handleClick = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mcHd4dmFub2xvandvZmx4d3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NDU2MTIsImV4cCI6MjAyOTQyMTYxMn0.zVmujhftittETdWgoTdqqYIydFA46M0uMFWgYcjHBHs'
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
  };

  return (
    <div>
      <nav className='w-full flex justify-between m-16'>
        <span>PB</span>
        <button onClick={() => navigate('/')} className='flex border-2 border-white gap-5 items-center px-6 py-2 bg-zinc-900'>
          LOGOUT
        </button>
      </nav>
      <div>
        <div className='mx-auto border-2 border-white w-[37vw] text-left font-semibold text-xl pl-6 py-3 bg-zinc-900'>Add Contact</div>
        <div className='flex flex-wrap gap-10 mx-auto w-[37vw] text-left border-2 border-white p-6 bg-zinc-900'>
          <div className='flex flex-col'>
            <span className='pl-1'>Name*</span>
            <input value={name} name='name' onChange={(e) => setName(e.target.value)} className='text-white bg-zinc-800 w-[15vw] rounded-md p-2' type='text' required />
          </div>
          <div className='flex flex-col'>
            <span className='pl-1'>Phone Number*</span>
            <input value={phoneNumber} name='phone_number' onChange={(e) => setPhoneNumber(e.target.value)} className='text-white bg-zinc-800 w-[15vw] rounded-md p-2' type='text' required />
          </div>
          <div className='flex flex-col'>
            <span className='pl-1'>Address</span>
            <textarea value={address} name='address' onChange={(e) => setAddress(e.target.value)} className='text-white bg-zinc-800 rounded-md w-[32.7vw] h-[5vw] p-2' type='text'></textarea>
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
