import React from 'react';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <table className='content table table-success table-striped ' style={{ width: '600px', height: '35%' }}>
      <thead>
        <tr className='tr'>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Телефон</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.username}</td>
            <td>{contact.phone}</td>
            <td>
              <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Contacts;
