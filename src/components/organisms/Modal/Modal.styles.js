import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Wrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 60rem;
  min-height: 50rem;
  background-color: var(--color-white);
  border-radius: 1.5rem;
  box-shadow: 0 -0.5rem 2.5rem -1rem rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  &:focus {
    outline: none;
  }
`;
