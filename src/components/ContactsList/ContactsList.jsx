import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from './ContactsItem/ContactsItem';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import styles from './ContactsList.module.css';
import { connect } from 'react-redux';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalazeFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalazeFilter)
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookActions.deleteContact(id)),
});

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
