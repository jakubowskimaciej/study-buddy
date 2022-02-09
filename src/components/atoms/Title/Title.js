import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.xl : theme.fontSize.l};
  color: var(--color-darkGrey);
`;
