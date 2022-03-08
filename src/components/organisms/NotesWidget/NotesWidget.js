import React from 'react';
import Note from 'components/molecules/Note/Note';
import {
  NotesWrapper,
  StyledInfo,
  StyledInfoWrapper,
  WidgetHandler,
  Wrapper,
} from 'components/organisms/NotesWidget/NotesWidget.styles';
import { useGetNotesQuery } from 'store';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { data, isLoading } = useGetNotesQuery();

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      {isLoading ? (
        <StyledTitle as="h3">Loading...</StyledTitle>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => (
              <Note id={id} key={id} title={title} content={content} />
            ))
          ) : (
            <StyledInfoWrapper>
              <StyledInfo>
                Create your first note <span>✏️</span>
              </StyledInfo>
            </StyledInfoWrapper>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default NotesWidget;
