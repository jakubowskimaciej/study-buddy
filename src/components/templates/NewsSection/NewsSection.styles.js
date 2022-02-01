import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

export const NewsSectionWrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3rem;
  overflow-y: scroll;
  border-left: 0.1rem solid var(--color-grey);
`;

export const Header = styled.h3`
  margin-bottom: 3rem;
  color: var(--color-darkGrey);
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 3rem 0;
  max-width: unset;
  border-radius: 1rem;
  color: var(--color-darkGrey);
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1.2rem;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    margin-left: 3.5rem;
    max-width: 20rem;
    object-fit: cover;
  }
`;
