import React from 'react';
import { Input } from 'components/atoms/Input/Input';
import { SearchbarWrapper, StatusInfo } from './Searchbar.styles';

const Searchbar = () => (
  <SearchbarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </StatusInfo>
    <Input name="search" id="search" placeholder="find students" />
  </SearchbarWrapper>
);

export default Searchbar;
