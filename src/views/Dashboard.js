import React, { useState, useEffect } from 'react';
import UsersList from 'components/organisms/StudentsList/StudentsList';
import PropTypes from 'prop-types';
import { StudentShape } from 'types';
import { Link, Redirect, useParams } from 'react-router-dom';
import { TitleWrapper, Wrapper, GroupWrapper } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <UsersList />
      </GroupWrapper>
    </Wrapper>
  );
};

UsersList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape(StudentShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
