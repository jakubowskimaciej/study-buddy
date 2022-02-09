import { Average } from 'components/atoms/Average/Average';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const BigAverage = styled(Average)`
  width: 6.8rem;
  height: 6.8rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  position: absolute;
  left: 2rem;
  top: 2.5rem;
`;

export const StyledDetails = styled.div`
  width: 100%;
  padding: 6rem 4rem 0 4rem;
`;

export const StyledLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: var(--color-darkGrey);
  margin-bottom: 0;
`;

export const StyledInfo = styled.p`
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.xl : theme.fontSize.l};
  color: var(--color-darkGrey);
  margin: 1rem 2rem 2rem 0;
`;

export const StyledSubjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25rem;
`;
