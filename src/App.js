import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './styles/App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log("Список обновлён:", contacts);
  }, [contacts]);

  const addContact = (newContact) => {
    const contactWithId = { ...newContact, id: Date.now() };
    setContacts((prev) => [...prev, contactWithId]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Контакты</h1>
      <ContactForm onAddContact={addContact} />
      <ContactList 
        contacts={contacts} 
        onDeleteContact={deleteContact} 
      />
    </div>
  );
}

export default App;


