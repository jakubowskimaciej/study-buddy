import React from 'react';
import Note from 'components/molecules/Note/Note';
import {
  NotesWrapper,
  StyledInfo,
  StyledInfoWrapper,
  WidgetHandler,
  Wrapper,
} from 'components/organisms/NotesWidget/NotesWidget.styles';
import { useSelector } from 'react-redux';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => (
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
    </Wrapper>
  );
};

export default NotesWidget;
