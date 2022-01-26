import styled from 'styled-components';

export const Button = styled.button`
  margin: 1.5rem 0;
  padding: ${({ isBig }) => (isBig ? '1rem 3rem' : '0.7rem 2.5rem')};
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.m : fontSize.s};
  background-color: var(--color-lightPurple);
  border-radius: 2rem;
  border: none;
  font-weight: bold;
  color: var(--color-darkGrey);
  box-shadow: -0.2rem 0.4rem 1rem rgba(115, 124, 142, 0.09);
`;
