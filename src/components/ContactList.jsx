import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p className="contact-list__empty">Контактов пока нет</p>
      ) : (
        contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDeleteContact}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
