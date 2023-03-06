import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStorage } from '../../useStorage';
import { Title } from './Title/Title';
import { TodoSummary } from './TodoSumamry/TodoSummary';
const DashBoard = () => {
  const { initializeStorageDataLoad } = useStorage();

  useEffect(() => {
    initializeStorageDataLoad();
  }, []);

  return (
    <StyledDiv>
      <Title />
      <TodoSummary />
      <Link to="kanban">ボード</Link>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export default DashBoard;
