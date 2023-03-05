import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { todoListState } from '../../../store';

export const TodoSummary = () => {
  const todoList = useRecoilValue(todoListState);

  const unCompleteCount = todoList.filter((todo) => !todo.isCompleted).length;
  const completeCount = todoList.filter((todo) => todo.isCompleted).length;

  return (
    <StyledDiv>
      <h4>現在の状況</h4>
      <p>未完了のTODO: {unCompleteCount}個</p>
      <p>完了したTODO: {completeCount}個</p>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  text-align: center;
  font-size: 24px;
`;
