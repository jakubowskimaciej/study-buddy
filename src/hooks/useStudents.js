import axios from 'axios';
import { useCallback } from 'react';
import { useError } from 'hooks/useError';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const { dispatchError } = useError();

  const getGroups = useCallback(async () => {
    try {
      const results = await studentsAPI.get('/groups');
      return results.data.groups;
    } catch (e) {
      dispatchError(`Something went wrong! Couldn't get groups!.`);
    }
  }, [dispatchError]);

  const getStudents = useCallback(
    async (groupId) => {
      try {
        const result = await studentsAPI.get(`/groups/${groupId}`);
        return result.data.students;
      } catch (e) {
        dispatchError(`Something went wrong! Couldn't get students.`);
      }
    },
    [dispatchError]
  );

  const getStudentsById = useCallback(
    async (id) => {
      try {
        const result = await studentsAPI.get(`/students/${id}`);
        return result.data.students;
      } catch (e) {
        dispatchError(`Something went wrong! Couldn't get students.`);
      }
    },
    [dispatchError]
  );

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post('/students/search', {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getStudents,
    getGroups,
    getStudentsById,
    findStudents,
  };
};
