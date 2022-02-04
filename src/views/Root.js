import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from 'views/AddUser';

const Root = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/add-student">
            <AddUser />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

export default Root;
