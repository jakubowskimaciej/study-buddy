import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = () => {
  const { register, handleSubmit } = useForm();
  const auth = useAuth();

  return (
    <form
      onSubmit={handleSubmit(auth.logIn)}
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormField name="login" label="Login" id="login" {...register('login')} />
      <FormField
        name="password"
        label="Password"
        id="password"
        type="password"
        {...register('password')}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
