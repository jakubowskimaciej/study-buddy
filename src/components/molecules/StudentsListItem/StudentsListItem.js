import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { StyledInfo, Wrapper } from './StudentsListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Average } from 'components/atoms/Average/Average';
import { UsersContext } from 'providers/UsersProvider';
import { StudentShape } from 'types';

const StudentsListItem = ({
  studentData: { name, average, attendance = '0%' },
  ...props
}) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}%</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  studentData: PropTypes.shape(StudentShape),
};

export default StudentsListItem;
