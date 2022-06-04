import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

import axios from 'axios';
import { api } from '../../services/api';
import { PokeDTO } from '../../dtos/PokeDTO';

import { Loading } from '../Loading';
import { Card } from '../../components/Card';
import { FooterLoading } from '../../components/FooterLoading';

import {
  Container,
  Header,
  TextHeader,
  TitleHeader,
  SubtitleHeader,
  ImagePeople,
  TextTitlePokemon,
  PokeList,
} from './styles';

export function Home(){
  const [pokemon, setPokemon] = useState<PokeDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(14);

  useEffect(() => {
    fetchPokemons()
  }, []);

  async function fetchPokemons() {
    await api.get(`/?limit=${page}`)
      .then((res) => {
        return res.data.results
      })
      .then((results) => {
        return Promise.all(results.map((res: any) => axios.get(res.url)))
      })
      .then((results) => {
        setPokemon(results.map((res) => res.data));
        setPage(page + 14);
        setLoading(false);
      })
  }

  if(loading == true) {
    return (
      <Loading/>
    )
  }

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

      <PokeList
        data={pokemon}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        onEndReached={fetchPokemons}
        onEndReachedThreshold={0.3}
        ListFooterComponent={<FooterLoading />}
        renderItem={({ item }) =>
          <Card data={item}/>
        }
      />
      
    </Container>
  );
}