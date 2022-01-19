import React from 'react';

import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import FormField from 'components/molecules/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const AddUser = ({ formValues, handleInputChange, handleStudentAdd }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleStudentAdd}>
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
        value={formValues.attandance}
        onChange={handleInputChange}
      />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
