import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const handleFilter = e =>
    dispatch(phonebookActions.changeFilter(e.currentTarget.value));

  return (
    <label className={styles.label}>
      <p className={styles.text}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleFilter}
      />
    </label>
  );
};

export default Filter;
