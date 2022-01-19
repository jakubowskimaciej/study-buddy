import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <StyledTitle>Students list</StyledTitle>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem
            key={userData.name}
            userData={userData}
            deleteUser={deleteUser}
          />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
