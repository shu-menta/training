import { useRecoilValue } from 'recoil';
import { completedTodoList, unCompletedTodoList } from '../../../../store';
import { Todo } from '../../../../types';
import { TodoCard } from './TodoCard/TodoCard';

type Props = {
  isCompeleted: boolean;
};
export const TodoCardList = (props: Props) => {
  const todoList = useRecoilValue<Todo[]>(props.isCompeleted ? completedTodoList : unCompletedTodoList);

  return (
    <>
      {todoList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </>
  );
};
