import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import {
  FormWrapper,
  NotesWrapper,
  StyledErrorMessage,
  StyledInfo,
  StyledTextarea,
  Wrapper,
} from './Notes.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Label } from 'components/atoms/Label/Label';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from 'actions';
import { useForm } from 'react-hook-form';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddNote = ({ title, content }) => {
    dispatch(addNote({ title, content }));
    reset({
      title: '',
      content: '',
    });
  };

  return (
    <Wrapper>
      <FormWrapper as="form" onSubmit={handleSubmit(handleAddNote)}>
        <FormField
          label="Title"
          name="title"
          id="title"
          {...register('title', { required: true })}
        />
        <Label>Content</Label>
        <StyledTextarea
          label="Content"
          name="content"
          id="content"
          {...register('content', { required: true })}
        />
        {errors.title && (
          <StyledErrorMessage>Title is required</StyledErrorMessage>
        )}
        {errors.content && (
          <StyledErrorMessage>Content is required</StyledErrorMessage>
        )}
        <Button type="submit">Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => (
            <Note key={id} id={id} title={title} content={content} />
          ))
        ) : (
          <StyledInfo>
            <span>✏️</span> Create your first note
          </StyledInfo>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
