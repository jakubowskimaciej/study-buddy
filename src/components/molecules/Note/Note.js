import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import {
  NoteWrapper,
  StyledDeleteButton,
} from 'components/molecules/Note/Note.styles';
import { useRemoveNoteMutation } from 'store';

const Note = ({ title, content, id }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleRemoveNote = () => {
    removeNote({ id: id });
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton aria-label="delete" onClick={handleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
