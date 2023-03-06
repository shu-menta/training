import { useRecoilState } from 'recoil';
import { todoListState } from './store';
import { Todo } from './types';

const TODO_LIST_KEY = 'todoList';
export const useStorage = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  // ストレージからデータをロードし、グルーバルステートにセットする
  const initializeStorageDataLoad = () => {
    const data = localStorage.getItem(TODO_LIST_KEY);
    if (!data) return;

    const todoListFromStorage = JSON.parse(data) as Todo[];
    setTodoList(todoListFromStorage);
  };

  // ストレージ上のデータをグローバルステートの値で更新する
  const setGlobalStateToStorage = () => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
  };

  return { initializeStorageDataLoad, setGlobalStateToStorage };
};
