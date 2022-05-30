/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Code after refactoring with Redux Toolkit

const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/changeFilter');

// Code with Vanilla Redux

// const addContact = (name, number) => ({
//   type: actionTypes.ADD,
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: actionTypes.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };
