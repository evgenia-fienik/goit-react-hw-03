import { useEffect, useState } from 'react'
import ContactList from './contactList/ContactList';
import ContactForm from './contactForm/ContactForm';
import SearchBox from './searchBox/SearchBox';
import './App.css'

function App() {

  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
  return savedContacts ?
    JSON.parse(savedContacts) : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');


  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  const onAddContact = (newContact) =>{
  const contact = { id: newContact.id, ...newContact };
    setContacts(prevContacts => [...prevContacts, contact]);
  };
  const deleteContact = (id) => {
  setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };
 

  return (
    <div >
      <h1>Phonebook</h1>
      <ContactForm addContact={onAddContact} />
      <SearchBox filter={filter} onChange={(e) => setFilter(e.target.value)}/>
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App
