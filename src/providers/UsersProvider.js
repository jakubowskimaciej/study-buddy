import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext({
  users: [],
  deleteUser: () => {},
  handleUserAdd: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data: { students } }) => setUsers(students))
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleUserAdd = (formValues) => {
    const newStudent = {
      name: formValues.name,
      average: formValues.average,
      attendance: formValues.attendance,
    };
    setUsers([newStudent, ...users]);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        deleteUser,
        handleUserAdd,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
