import React from 'react';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div className='overflow-x-auto' style={{  borderRadius: '20px'}}>
      <table className='min-w-full bg-warning rounded-1 border border-gray-300'>
        <thead className='bg-gray-800 text-Black text-lg'>
          <tr>
            <th className='px-4 py-2'>Ім'я</th>
            <th className='px-4 py-2'>Прізвище</th>
            <th className='px-4 py-2'>Телефон</th>
            <th className='px-4 py-2'>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id} className=' border-gray-300'>
              <td className='px-4 py-2 text-sm'>{contact.name}</td>
              <td className='px-4 py-2 text-sm'>{contact.username}</td>
              <td className='px-4 py-2 text-sm'>{contact.phone}</td>
              <td className='px-4 py-2'>
                <button 
                  onClick={() => onDeleteContact(contact.id)} 
                  className='text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded'
                >
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
