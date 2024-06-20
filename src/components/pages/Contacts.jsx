import React from 'react';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <table className='content table table-success table-striped mb-3 table-container table' style={{ width: '600px', height: '35%' }}>
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
            <td style={{fontSize:'12px'}}>{contact.name}</td>
            <td style={{fontSize:'12px'}}>{contact.username}</td>
            <td style={{fontSize:'12px'}}>{contact.phone}</td>
            <td>
              <button onClick={() => onDeleteContact(contact.id)} style={{fontSize:'15px'}}>Видалити</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Contacts;
