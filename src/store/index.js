import { v4 as uuid } from 'uuid';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = [
  {
    id: uuid(),
    title: 'Lorem ipsum',
    content:
      'Quisque tincidunt, neque non auctor cursus, nisl nulla lacinia urna, laoreet venenatis risus sapien a felis. Nulla sit amet aliquet quam. ',
  },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    addNote(state, action) {
      state.push({
        id: uuid(),
        ...action.payload,
      });
    },
    removeNote(state, action) {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;

export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
  },
});
