import React from 'react';
import { Logo, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study <br /> Buddy
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/add-student">Add students</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
