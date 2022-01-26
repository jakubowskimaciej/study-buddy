import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchbarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 4rem;
  border-bottom: 0.1rem solid var(--color-grey);

  ${Input} {
    width: 100%;
    max-width: 35rem;
    border: 0.2rem solid var(--color-lightPurple);
    color: var(--color-darkGrey);
    padding: 1.1rem 1.5rem;
  }
`;

export const StatusInfo = styled.div`
  color: var(--color-darkGrey);
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-right: 3rem;

  p {
    margin: 0.4rem;
  }
`;
