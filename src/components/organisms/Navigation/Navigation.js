import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Logo, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <Logo>
        <h1>
          Study <br /> Buddy
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink as="a" onClick={auth.logOut}>
        Login
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
