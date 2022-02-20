import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  };

  const visibleContacts = getVisibleContacts();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <ul>
        {visibleContacts.map(visibleContact => {
          const { id, name, number } = visibleContact;
          return <ContactListItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
