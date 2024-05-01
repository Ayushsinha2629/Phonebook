;import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ContactDetails = () => {
  const { contactId } = useParams();
  const [contact, setContact] = useState();

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
        console.log('Fetched data:', data)
        setContact(data);
      } catch (error) {
        console.error('Error while fetching contact details:', error.message);
      }
    };

    fetchContact();
  }, [contactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }
  

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Phone Number: {contact.phone_number}</p>
      <p>Address: {contact.address}</p>
    </div>
  );
};

export default ContactDetails;