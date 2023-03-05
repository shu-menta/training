import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TodoCardListContainer } from './TodoCardListContainer/TodoCardListContainer';

export const Kanban = () => {
  return (
    <>
      <StyledDiv>
        <TodoCardListContainer isCompleted={false} />
        <TodoCardListContainer isCompleted={true} />
      </StyledDiv>
      <Link to="/">ホーム</Link>
    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
