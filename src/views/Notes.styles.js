import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 3re;
  padding: 3rem;
`;

export const FormWrapper = styled.div`
  padding: 4rem;
  margin-right: 1rem;
  background: var(--color-white);
  border-radius: 2.5rem;
  width: 35rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${Label} {
    margin-top: 2rem;
  }
`;

export const StyledTextarea = styled.textarea`
  height: 30rem;
  resize: none;
  width: 100%;
  margin-top: 1rem;
  border: 0.1rem solid var(--color-darkPurple);
  border-radius: 2.5rem;
  padding: 1rem 1.5rem;
  transition: 250ms ease-out;

  &:focus {
    outline: none;
    box-shadow: -0.1rem 0.4rem 1rem rgba(115, 124, 142, 0.3);
  }
`;

export const NotesWrapper = styled.div`
  padding: 2rem 1rem 2rem 6rem;
  display: flex;
  flex-direction: column;
`;
