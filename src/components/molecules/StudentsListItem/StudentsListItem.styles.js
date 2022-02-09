import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem;
  cursor: pointer;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    background-color: lightgrey;
  }
`;

export const StyledInfo = styled.div`
  padding: 1rem 2rem;

  p {
    color: var(--color-darkGrey);
  }

  p:first-child {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
