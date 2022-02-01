import React, { useContext } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import FormField from 'components/molecules/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from 'hooks/useForm';

const initialValues = {
  name: '',
  average: '',
  attendance: '',
};

const AddUser = () => {
  const { handleUserAdd } = useContext(UsersContext);

  const { formValues, handleInputChange, handleClearForm } =
    useForm(initialValues);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleUserAdd(formValues);
    handleClearForm();
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <StyledTitle>Add new students</StyledTitle>
      <FormField
        name="name"
        id="name"
        label="Name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        name="average"
        id="average"
        label="Average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <FormField
        name="attendance"
        id="attendance"
        label="Attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
