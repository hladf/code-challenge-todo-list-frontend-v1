import { TodoProps } from '@types';
import { getAllTodos } from 'services/get-all-todos';
import React, { useCallback, useEffect, useState } from 'react';
import TodoCard from './todo-card';
import * as S from 'style';
import { deleteTodo } from 'services/detele-todo-by-id';
// import { useHistory } from 'react-router-dom';

function CardsContainer() {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  // const navigate = useHistory();

  const allTodos = useCallback(async () => {
    const data = await getAllTodos();
    setTodos(data);
  }, []);

  const deleteTodoById = async (id: string) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this todo?'
    );
    if (confirmDelete) {
      await deleteTodo(id);
      allTodos();
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      await allTodos();
    };
    fetchTodos();
  }, [allTodos]);

  return (
    <S.TodosContainer>
      {todos?.map((todo, index) => (
        <TodoCard
          key={index}
          title={todo.title}
          description={todo.description}
          id={todo.id}
          onCLickDelete={deleteTodoById}
        />
      ))}
    </S.TodosContainer>
  );
}

export default CardsContainer;
