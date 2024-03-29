import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 1rem 0;
  }
`;

const FormField = React.forwardRef(
  ({ name, id, type = 'text', label, ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input
          name={name}
          id={id}
          type={type}
          {...props}
          autoComplete="off"
          data-testid={label}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

FormField.proTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
