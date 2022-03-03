import { v4 as uuid } from 'uuid';

const initialState = {
  notes: [
    {
      id: uuid(),
      title: 'Lorem ipsum',
      content:
        'Quisque tincidunt, neque non auctor cursus, nisl nulla lacinia urna, laoreet venenatis risus sapien a felis. Nulla sit amet aliquet quam. ',
    },
  ],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};
