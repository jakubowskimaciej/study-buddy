import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { useStudents } from 'hooks/useStudents';
import { useCombobox } from 'downshift';

import { Input } from 'components/atoms/Input/Input';
import {
  SearchbarWrapper,
  SearchResults,
  SearchResultsItem,
  SearchWrapper,
  StatusInfo,
} from './Searchbar.styles';

const Searchbar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchbarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input
          name="search"
          id="search"
          placeholder="find students"
          {...getInputProps()}
        />
        <SearchResults
          isVisible={isOpen && matchingStudents.length > 0}
          {...getMenuProps()}
          aria-label="results"
        >
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem
                key={item.id}
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
              >
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchbarWrapper>
  );
};

export default Searchbar;
