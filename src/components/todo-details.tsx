import React, { useCallback, useEffect, useState } from 'react';
import { TodoProps } from '@types';
import * as S from 'style';
import { getTodoById } from 'services/get-todo-by-id';
import { deleteTodo } from 'services/detele-todo-by-id';
import { useParams, useHistory } from 'react-router-dom';

import TodoCard from './todo-card';
import Title from './title';

export default function TodoDetails() {
  const [todo, setTodo] = useState<Partial<TodoProps>>({
    title: '',
    description: '',
  });

  const navigate = useHistory();
  const { id }: { id: string } = useParams();

  const getTodo = useCallback(async () => {
    const todo = await getTodoById(id);
    if (todo) {
      setTodo(todo);
    }
  }, [id]);

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const deleteTodoById = async (id: string) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this todo?'
    );
    if (confirmDelete) {
      const result = await deleteTodo(id);
      if (result) {
        navigate.push('/');
      }
    }
  };

  return (
    <S.TodosContainer>
      <S.FlexContainerCenter>
        <S.BackLink href="/" title="Back">
          {'<<'}
        </S.BackLink>
        <Title title={`Details Todo: ${todo.id}`} />
      </S.FlexContainerCenter>
      <TodoCard
        title={todo.title || ''}
        description={todo.description || ''}
        id={id}
        onCLickDelete={deleteTodoById}
      ></TodoCard>
    </S.TodosContainer>
  );
}
