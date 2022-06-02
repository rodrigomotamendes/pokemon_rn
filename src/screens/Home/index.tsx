import React from 'react';
import { StatusBar } from 'react-native';

import { Card } from '../../components/Card';

import {
  Container,
  Header,
  TextHeader,
  TitleHeader,
  SubtitleHeader,
  ImagePeople,
  TextTitlePokemon,
} from './styles';

export function Home(){
  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

      <Header>
        <TextHeader>
          <TitleHeader>Olá, Ash Ketchum</TitleHeader>
          <SubtitleHeader>Bem Vindo!</SubtitleHeader>
        </TextHeader>

        <ImagePeople />
      </Header>

      <TextTitlePokemon>
        Qual pokémon você{'\n'}escolheria?
      </TextTitlePokemon>

      <Card />
    </Container>
  );
}