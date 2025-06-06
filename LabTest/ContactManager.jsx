import React, { useState } from 'react';

const ContactManager = () => {
  const [contacts, setContacts] = useState([
    {
      name: "Ramu",
      email: "Ramu@gmail.com",
    },
    {
      name: "Rahul",
      email: "Rahul@gmail.com",
    },
  ]);

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleAddContact = () => {
    setContacts([...contacts, formInput]);
    setFormInput({ name: "", email: "" }); 
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formInput.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formInput.email}
          onChange={handleInputChange}
        />
        <button onClick={handleAddContact}>Add Contact</button>
      </div>
    </div>
  );
};

export default ContactManager;
