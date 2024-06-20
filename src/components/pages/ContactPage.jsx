import React, { useState, useEffect } from 'react';
import Contacts from '../pages/Contacts';
import ContactForm from '../pages/ContactForm';

const ContactsPage = () => {
  const [contactList, setContactList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      const data = await response.json();
      setContactList(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const addContact = (newContact) => {
    setContactList([...contactList, newContact]);
    toggleForm();
  };

  const deleteContact = (id) => {
    const updatedContacts = contactList.filter(contact => contact.id !== id);
    setContactList(updatedContacts);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="ContactsPage">
      <h2>Список контактів</h2>
      <Contacts contacts={contactList} onDeleteContact={deleteContact} />
      <button onClick={toggleForm}>{showForm ? 'Скасувати' : 'Додати контакт'}</button>
      {showForm && <ContactForm onAddContact={addContact} />}
    </div>
  );
};

export default ContactsPage;
