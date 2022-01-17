import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-lightGrey);
`;

const Root = () => {
  return (
    <Wrapper>
      <UsersList />
    </Wrapper>
  );
};

export default Root;
