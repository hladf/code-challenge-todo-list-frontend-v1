import React from 'react';
import * as S from 'style';

interface FormContainerProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export const FormContainer: React.FC<FormContainerProps> = ({
  onSubmit,
  children,
}) => {
  return <S.Form onSubmit={onSubmit}>{children}</S.Form>;
};
