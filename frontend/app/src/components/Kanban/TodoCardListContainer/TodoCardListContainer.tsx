import styled from 'styled-components';
import { TodoAdd } from './TodoAdd/TodoAdd';
import { TodoCardList } from './TodoCardList/TodoCardList';

type Props = {
  isCompleted: boolean;
};
export const TodoCardListContainer = (props: Props) => {
  return (
    <Container>
      <Title>{props.isCompleted ? '完了したTodo' : 'Todo'}</Title>
      <TodoCardList isCompeleted={props.isCompleted} />
      {props.isCompleted || <TodoAdd />}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: '20px';
  background-color: lightgray;
  width: 200px;
  height: 60vh;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;
