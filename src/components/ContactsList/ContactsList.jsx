import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ContactsItem from './ContactsItem/ContactsItem';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const { contacts, filter } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  const getVisibleContacts = (contacts, filter) => {
    const normalazeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazeFilter)
    );
  };

  const filteredContactsList = getVisibleContacts(contacts, filter);

  return (
    <ul className={styles.list}>
      {filteredContactsList.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={() => dispatch(phonebookActions.deleteContact(id))}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
