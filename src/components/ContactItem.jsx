import React, { useState } from 'react';

 const ContactItem = ({ contact, onDelete }) => {
    return (
      <div className="contact-item">
        <div className="contact-item__info">
          <h4 className="contact-item__name">{contact.name}</h4>
          <span className="contact-item__details">{contact.phone}</span>
          <span className="contact-item__details">{contact.email}</span>
        </div>
        
        <button 
          className="contact-item__button" 
          onClick={() => onDelete(contact.id)}
        >
          Удалить
        </button>
      </div>
    );
  };
  
  export default ContactItem;