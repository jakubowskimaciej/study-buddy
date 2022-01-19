import React, { useState } from 'react';

import { users as usersData } from 'data/users';
import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from 'views/AddUser';

const initialValues = {
  name: '',
  average: '',
  attendance: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleStudentAdd = (e) => {
    e.preventDefault();
    const newStudent = {
      name: formValues.name,
      average: formValues.average,
      attendance: formValues.attendance,
    };
    setUsers([newStudent, ...users]);
    setFormValues(initialValues);
  };

  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route
            path="/add-student"
            element={
              <AddUser
                formValues={formValues}
                handleInputChange={handleInputChange}
                handleStudentAdd={handleStudentAdd}
              />
            }
          ></Route>
          <Route
            exact
            path="/"
            element={<Dashboard users={users} deleteUser={deleteUser} />}
          ></Route>
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

export default Root;
