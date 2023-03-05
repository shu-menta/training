import { useRecoilState } from 'recoil';
import { todoListState } from '../../../../../../store';
import { Todo } from '../../../../../../types';

type Props = {
  todo: Todo;
};
export const TodoUpdateButton = (props: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onClickHandle = () => {
    const newTodo = { ...props.todo, isCompleted: !props.todo.isCompleted };
    const newTodoList = todoList.map((todo) => (todo.id === props.todo.id ? newTodo : todo));
    setTodoList(newTodoList);
  };

  return <button onClick={() => onClickHandle()}>{props.todo.isCompleted ? '戻す' : '完了'}</button>;
};
