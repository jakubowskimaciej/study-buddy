import styled from 'styled-components';

export const Average = styled.div`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ value }) => {
    if (value >= 4) return 'var(--color-success)';
    if (value >= 3) return 'var(--color-warning)';
    if (value > 1) return 'var(--color-danger)';
  }};
`;
