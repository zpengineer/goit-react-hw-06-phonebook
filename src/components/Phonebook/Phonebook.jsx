import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import styles from './Phonebook.module.css';

function Phonebook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state.phonebook);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalazeName = name.toLowerCase();

    const hasName = contacts.find(contact =>
      contact.name.toLowerCase().includes(normalazeName)
    );

    if (hasName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    onSubmit(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={nameInputId} className={styles.label}>
        <p className={styles.text}>Name</p>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          id={nameInputId}
          onChange={handleChange}
        />
      </label>

      <label htmlFor={numberInputId} className={styles.label}>
        <p className={styles.text}>Number</p>
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces,dashes, parentheses and can start with +"
          required
          id={numberInputId}
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(phonebookActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Phonebook);
