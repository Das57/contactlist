import React, { useState } from 'react';

  const ContactForm = ({ onAddContact }) => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.name || !formData.phone || !formData.email) return;
      onAddContact({ ...formData });
      setFormData({ name: '', phone: '', email: '' });
    };
  
    return (
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3 className="contact-form__title">Новый контакт</h3>
        
        <input
          className="contact-form__input"
          type="text"
          name="name"
          placeholder="Имя Фамилия"
          value={formData.name}
          onChange={handleChange}
          autoComplete="off"
        />
        
        <input
          className="contact-form__input"
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="off"
        />
        
        <input
          className="contact-form__input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
        />
        
        <button className="contact-form__button" type="submit">
          Добавить
        </button>
      </form>
    );
  };
  
  export default ContactForm;
  