import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import {
  FormWrapper,
  NotesWrapper,
  StyledTextarea,
  Wrapper,
} from './Notes.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Label } from 'components/atoms/Label/Label';

const notes = [
  {
    title: 'Title',
    content:
      'Quisque tincidunt, neque non auctor cursus, nisl nulla lacinia urna, laoreet venenatis risus sapien a felis. Nulla sit amet aliquet quam. ',
    id: '1',
  },
  {
    title: 'Title',
    content:
      'Quisque tincidunt, neque non auctor cursus, nisl nulla lacinia urna, laoreet venenatis risus sapien a felis. Nulla sit amet aliquet quam. ',
    id: '2',
  },
  {
    title: 'Title',
    content:
      'Quisque tincidunt, neque non auctor cursus, nisl nulla lacinia urna, laoreet venenatis risus sapien a felis. Nulla sit amet aliquet quam. ',
    id: '3',
  },
];

const Notes = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <FormField label="Title" name="title" id="title" />
        <Label>Content</Label>
        <StyledTextarea
          as="textarea"
          isTextarea
          label="Content"
          name="content"
          id="content"
        />
        <Button>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => (
            <Note id={id} key={id} title={title} content={content} />
          ))
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
