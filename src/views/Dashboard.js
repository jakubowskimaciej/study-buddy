import React, { useEffect, useState } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { TitleWrapper, Wrapper, GroupWrapper } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setUsers(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  console.log(groups);

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
        <UsersList users={users} />
      </GroupWrapper>
    </Wrapper>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
