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
    width: 35rem;
    /* max-width: 35rem; */
    border: 0.2rem solid var(--color-lightPurple);
    color: var(--color-darkGrey);
    padding: 1.1rem 1.5rem;
  }
`;

export const StatusInfo = styled.div`
  width: 10rem;
  color: var(--color-darkGrey);
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-right: 3rem;

  p {
    margin: 0.4rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchResults = styled.ul`
  z-index: 1000;
  max-height: 50rem;
  overflow-y: scroll;
  padding: 1rem;
  border-radius: 1.5rem;
  list-style: none;
  width: 35rem;
  position: absolute;
  top: 5rem;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  box-shadow: -0.2rem 0.4rem 1rem rgba(115, 124, 142, 0.3);
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

export const SearchResultsItem = styled.li`
  font-weight: 700;
  color: var(--color-darkGrey);
  background-color: ${({ isHighlighted }) =>
    isHighlighted ? 'var(--color-lightPurple)' : 'var(--color-white)'};
  width: 100%;
  padding: 2rem 0.5rem;

  &:hover {
    background-color: var(--color-lightPurple);
  }

  &:not(:last-child) {
    border-bottom: 0.1rem solid var(--color-darkPurple);
  }
`;
