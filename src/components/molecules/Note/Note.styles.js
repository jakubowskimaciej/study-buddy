import styled from 'styled-components';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

export const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  h3,
  p {
    margin: 0;
    color: var(--color-darkGrey);
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 2rem;
  left: -4rem;
`;
