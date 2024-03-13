import CardsContainer from 'components/todos-container';
import Header from '../components/header';
import React from 'react';
import * as S from 'style';
import Title from 'components/title';

function Home() {
  return (
    <S.MainPage>
      <Header />
      <Title title="Todos List" />
      <CardsContainer />
    </S.MainPage>
  );
}

export default Home;
