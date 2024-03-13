import React from 'react';

import * as S from 'style';
import Title from './title';

function Header() {
  return (
    <S.HeaderContainer>
      <S.FlexContainer justify="space-evenly">
        <Title title="Welcome !" />
        <S.Link title="Create Todo" href="/create-todo" color="white">
          + Add
        </S.Link>
      </S.FlexContainer>
    </S.HeaderContainer>
  );
}

export default Header;
