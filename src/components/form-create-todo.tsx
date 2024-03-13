import React, { useRef, useState } from 'react';
import * as S from 'style';
import { FormContainer } from './form-container';
import { createTodo } from '../services/post-new-todo';
import { useHistory } from 'react-router-dom';
import { validateInputsTitleAndDescription } from 'helpers/validate-todo-fields';

export function FormCreateTodo() {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useHistory();
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;

    const errorMessage = validateInputsTitleAndDescription(title, description);
    if (!errorMessage) {
      createTodo({
        title,
        description,
      });
      navigate.push('/');
    }
    if (errorMessage) setErrorMessage(errorMessage);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <S.FlexContainer>
        <S.Label htmlFor="title">Title:</S.Label>
        <S.Input type="text" name="title" id="title" ref={titleRef} />
      </S.FlexContainer>

      <S.Label htmlFor="description">Description:</S.Label>
      <S.TextArea name="description" id="description" ref={descriptionRef} />
      {errorMessage && <S.ErrorMensage>{errorMessage}</S.ErrorMensage>}

      <S.Button type="submit" title="Create">
        Create
      </S.Button>
    </FormContainer>
  );
}
