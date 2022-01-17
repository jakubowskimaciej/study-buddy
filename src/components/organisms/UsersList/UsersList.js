import React, { useState } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users as usersData } from 'data/users';
import { StyledList, Wrapper } from './UsersList.styles';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem
            key={userData.name}
            userData={userData}
            deleteUser={deleteUser}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
