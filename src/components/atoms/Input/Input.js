import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.5rem 1.2rem;
  border: 0.1rem solid var(--color-darkPurple);
  box-shadow: -0.2rem 0.4rem 1rem rgba(115, 124, 142, 0.09);
  border-radius: 2.5rem;
  transition: 250ms ease-out;

  &:focus {
    outline: none;
    box-shadow: -0.2rem 0.4rem 1rem rgba(115, 124, 142, 0.3);
  }
`;
