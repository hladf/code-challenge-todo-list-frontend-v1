import { FormCreateTodo } from 'components/form-create-todo';
import Title from 'components/title';
import React from 'react';
import * as S from 'style';
export default function CreateTodoPage() {
  return (
    <S.PageContainer>
      <S.FlexContainerCenter>
        <S.BackLink href="/" title="Back">
          {'<<'}
        </S.BackLink>
        <Title title="Create Todo" />
      </S.FlexContainerCenter>
      <FormCreateTodo />
    </S.PageContainer>
  );
}
