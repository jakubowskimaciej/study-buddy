import React, { useState, useEffect } from 'react';
import UsersList from 'components/organisms/StudentsList/StudentsList';
import { Link, Redirect, useParams } from 'react-router-dom';
import { TitleWrapper, Wrapper, GroupWrapper } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import useModal from 'hooks/useModal';
import StudentDetails from 'components/molecules/StudentsDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState([]);
  const { getGroups, getStudentsById } = useStudents();
  const { id } = useParams();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentsById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map(({ id }) => (
            <Link key={id} to={`/group/${id}`}>
              {id}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <UsersList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          handleClose={handleCloseModal}
        >
          <StudentDetails student={currentStudent} />
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
