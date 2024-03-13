import React from 'react';
import { TodoProps } from '@types';
import * as S from 'style';
import Title from './title';
import { formateTitle } from 'helpers/formatter-title';

interface TodoCardProps extends TodoProps {
  onCLickDelete: (id: string) => void;
}

export default function TodoCard({
  id,
  title,
  description,
  onCLickDelete,
}: TodoCardProps) {
  return (
    <S.TodoCardContainer>
      <S.FlexContainer justify="space-between">
        <S.Link title="Details page" href={`/todo/${id}`}>
          <Title title={formateTitle(title)} />
        </S.Link>
        <S.ButtonDelete title="Delete" onClick={() => onCLickDelete(id)}>
          X
        </S.ButtonDelete>
      </S.FlexContainer>
      <S.Paragraph>{description}</S.Paragraph>
    </S.TodoCardContainer>
  );
}
