import { Todo } from '../../../../../types';
import { TodoUpdateButton } from './TodoUpdateButton/TodoUpdateButton';

type Props = {
  todo: Todo;
};
export const TodoCard = (props: Props) => {
  return (
    <p>
      <TodoUpdateButton {...props} />
      {props.todo.title}
    </p>
  );
};
