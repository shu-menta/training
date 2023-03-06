import { atom, selector } from 'recoil';
import { Todo } from './types';

const defaultTodoList: Todo[] = [];

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: defaultTodoList,
});

export const unCompletedTodoList = selector<Todo[]>({
  key: 'unCompletedTodoList',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const unCompletedTodoList = todoList.filter((todo) => !todo.isCompleted);
    return unCompletedTodoList;
  },
});

export const completedTodoList = selector<Todo[]>({
  key: 'completedTodoList',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const completedTodoList = todoList.filter((todo) => todo.isCompleted);
    return completedTodoList;
  },
});
