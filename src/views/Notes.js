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
import { useAddNoteMutation, useGetNotesQuery } from 'store';
import { useForm } from 'react-hook-form';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';

const Notes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
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
      {isLoading ? (
        <StyledTitle>Loading...</StyledTitle>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => (
              <Note key={id} id={id} title={title} content={content} />
            ))
          ) : (
            <StyledInfo>
              <span>✏️</span> Create your first note
            </StyledInfo>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
