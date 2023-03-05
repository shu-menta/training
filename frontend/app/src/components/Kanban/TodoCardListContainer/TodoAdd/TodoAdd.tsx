import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { todoListState } from '../../../../store';
import { Todo } from '../../../../types';

export const TodoAdd = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const onInputChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
  };
  const onButtonClickHandle = () => {
    console.log(todoList.length + 1);
    const newTodo: Todo = {
      id: todoList.length + 1,
      title: newTodoTitle,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setNewTodoTitle('');
  };
  return (
    <StyledDiv>
      <input
        type="text"
        value={newTodoTitle}
        onChange={(e) => {
          onInputChangeHandle(e);
        }}
      />
      <button onClick={() => onButtonClickHandle()}>追加</button>
    </StyledDiv>
  );
};

const StyledDiv = styled.div``;
