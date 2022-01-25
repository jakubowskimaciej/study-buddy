import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'CLEAR_VALUES':
      return {
        ...action.initialValues,
      };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    dispatch({
      type: 'INPUT_CHANGE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: 'CLEAR_VALUES', initialValues });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
  };
};
