import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import axios from 'axios';
import { api } from '../../services/api';
import { PokeDTO } from '../../dtos/PokeDTO';

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
  const [pokemon, setPokemon] = useState<PokeDTO[]>([]);

  console.log(pokemon)

  useEffect(() => {
    async function fetchPokemons() {
      await api.get('/')
        .then((res) => {
          return res.data.results
        })
        .then((results) => {
          return Promise.all(results.map((res: any) => axios.get(res.url)))
        })
        .then((results) => {
          setPokemon(results.map((res) => res.data))
        })
    }
    fetchPokemons()
  }, [])

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