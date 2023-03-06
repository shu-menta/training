import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStorage } from '../../useStorage';
import { TodoCardListContainer } from './TodoCardListContainer/TodoCardListContainer';

export const Kanban = () => {
  const { setGlobalStateToStorage } = useStorage();

  useEffect(() => {
    return () => {
      setGlobalStateToStorage();
    };
  }, [setGlobalStateToStorage]);

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
