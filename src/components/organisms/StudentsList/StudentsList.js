import React, { useState, useEffect } from 'react';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router-dom';

const UsersList = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();

  useEffect(() => {
    (async () => {
      const results = await getStudents(id);
      setStudents(results);
    })();
  }, [getStudents, id]);

  return (
    <>
      <StyledTitle>Students list</StyledTitle>
      <StyledList>
        {students.map((studentData) => (
          <StudentsListItem key={studentData.name} studentData={studentData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
