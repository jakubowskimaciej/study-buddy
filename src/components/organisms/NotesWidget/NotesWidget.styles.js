import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40rem;
  height: auto;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(40rem)'};
  transition: transform 0.6s ease-in-out;
  max-height: 70rem;
  position: absolute;
  right: 0;
  top: 2.5rem;
  background: white;
  border: 0.2rem solid var(--color-darkGrey);
  box-shadow: 0 0.5rem 1.5rem -1rem rgba(0, 0, 0, 0.3);
`;

export const WidgetHandler = styled.button`
  width: 8rem;
  height: 3rem;
  background-color: var(--color-darkGrey);
  transform: rotate(-90deg);
  position: absolute;
  left: -5.5rem;
  border-radius: 0.8rem 0.8rem 0 0;
  top: 4rem;
  color: white;
  border: none;
  cursor: pointer;
`;

export const NotesWrapper = styled.div`
  max-height: 70rem;
  overflow-y: scroll;
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
`;

export const StyledInfoWrapper = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  color: var(--color-darkGrey);

  span {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
