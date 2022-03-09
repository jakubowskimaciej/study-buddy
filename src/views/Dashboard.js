import React, { useState } from 'react';
import UsersList from 'components/organisms/StudentsList/StudentsList';
import { Link, Redirect, useParams } from 'react-router-dom';
import { TitleWrapper, Wrapper, GroupWrapper } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import useModal from 'hooks/useModal';
import StudentDetails from 'components/molecules/StudentsDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import { useGetGroupsQuery } from 'store';

const Dashboard = () => {
  const [currentStudent, setCurrentStudent] = useState([]);
  const { getStudentsById } = useStudents();
  const { id } = useParams();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const { data, isLoading } = useGetGroupsQuery();

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentsById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (isLoading) {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title as="h3">Loading...</Title>
        </TitleWrapper>
      </Wrapper>
    );
  }

  if (!id && data.groups.length > 0)
    return <Redirect to={`/group/${data.groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {data.groups.map(({ id }) => (
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
