import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { StyledForm } from './UnauthenticatedApp.styles';

const UnauthenticatedApp = () => {
  const { register, handleSubmit } = useForm();
  const auth = useAuth();

  return (
    <StyledForm onSubmit={handleSubmit(auth.logIn)}>
      <FormField name="login" label="Login" id="login" {...register('login')} />
      <FormField
        name="password"
        label="Password"
        id="password"
        type="password"
        {...register('password')}
      />
      <Button type="submit">Sign in</Button>
    </StyledForm>
  );
};

export default UnauthenticatedApp;
