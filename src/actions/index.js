import { v4 as uuid } from 'uuid';

export const addNote = (payload) => {
  return {
    type: 'ADD_NOTE',
    payload: {
      id: uuid(),
      ...payload,
    },
  };
};

export const removeNote = (payload) => {
  return {
    type: 'REMOVE_NOTE',
    payload,
  };
};
