import React from 'react';
import PropTypes from 'prop-types';

import { StyledInfo, Wrapper } from './UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Average } from 'components/atoms/Average/Average';

const UsersListItem = ({
  userData: { name, average, attendance = '0%' },
  deleteUser,
}) => {
  return (
    <Wrapper>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
