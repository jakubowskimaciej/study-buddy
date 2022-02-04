import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 3rem;

  nav a {
    display: inline-block;
    margin-left: 1.5rem;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    color: var(--color-darkGrey);
    background-color: var(--color-white);
    border-radius: 5rem;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const GroupWrapper = styled(ViewWrapper)`
  margin: 0;
`;
