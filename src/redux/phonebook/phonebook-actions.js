/* eslint-disable import/no-anonymous-default-export */
import { nanoid } from 'nanoid';
import actionTypes from './phonebook-types';

const addContact = (name, number) => ({
  type: actionTypes.ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
