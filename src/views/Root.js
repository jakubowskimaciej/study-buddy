import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from 'views/AddUser';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <MainTemplate>
      <UsersProvider>
        <Wrapper>
          <Routes>
            <Route path="/add-student" element={<AddUser />}></Route>
            <Route exact path="/" element={<Dashboard />}></Route>
          </Routes>
        </Wrapper>
      </UsersProvider>
    </MainTemplate>
  );
};

export default Root;
