import React from 'react';
import Note from 'components/molecules/Note/Note';
import {
  NotesWrapper,
  StyledInfo,
  StyledInfoWrapper,
  WidgetHandler,
  Wrapper,
} from 'components/organisms/NotesWidget/NotesWidget.styles';

const NotesWidget = ({ notes = [] }) => {
  const [isOpen, setIsOpen] = React.useState(false);

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
            <StyledInfo>Create your first note 🤓</StyledInfo>
          </StyledInfoWrapper>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
