import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.1rem solid var(--color-darkPurple);
  padding: 3rem 0;
  grid-row: 1/3;
  grid-column: 1/1;
`;

export const Logo = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--color-darkGrey);
  margin-bottom: 3rem;

  h1 {
    color: var(--color-white);
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: right;
    margin-right: 1.3rem;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  text-decoration: none;
  color: var(--color-darkGrey);
  text-align: right;
  margin: 1.3rem 2rem 1.3rem auto;
  position: relative;

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    content: '';
    transition: opacity 400ms ease-in-out;
    position: absolute;
    width: 1.8rem;
    height: 0.3rem;
    top: 50%;
    transform: translateY(-50%);
    right: -2rem;
    background-color: var(--color-darkPurple);
  }
`;
