import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username || !phone) {
      alert('Будь ласка, заповніть усі поля');
      return;
    }

    const newContact = {
      id: Math.floor(Math.random() * 1000), // тимчасове значення id для демонстрації
      name,
      username,
      phone
    };

    onAddContact(newContact);

    setName('');
    setUsername('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className='form-control form-control-lg d-flex flex-column gap-2 p-3 bg-warning' style={{width: '500px',margin:'0 auto'}}>
      <input type="text" placeholder="Ім'я" value={name} onChange={(e) => setName(e.target.value)} style={{width:'50%'}} />
      <input type="text" placeholder="Прізвище" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button type="submit" style={{height:'50px'}}>Зберегти</button>
    </form>
  );
};

export default ContactForm;
