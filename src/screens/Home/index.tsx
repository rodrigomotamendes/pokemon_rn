import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

interface PokeRender {
  item: PokeDTO;
}

export function Home(){
  const navigation = useNavigation<any>();

  const [pokemon, setPokemon] = useState<PokeDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchPokemons()
  }, []);

  async function fetchPokemons() {
    await api.get(`/pokemon/?limit=20&offset=${page}`)
      .then((res) => {
        return res.data.results
      })
      .then((results) => {
        return Promise.all(results.map((res: any) => axios.get(res.url)))
      })
      .then((results) => {
        const resultadoPokeList = (results.map((res) => res.data));

        setPokemon([...pokemon, ...resultadoPokeList])
        setPage(page + 20);
        setLoading(false);
      })
  }

  function handlePokeDetails(pokemon : PokeDTO) {
    navigation.navigate('Details', { pokemon })
  }

  if(loading == true) {
    return (
      <Loading/>
    )
  }

  const renderItem = ({ item }: PokeRender) => (
    <Card data={item} onPress={() => handlePokeDetails(item)}/>
  );

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

      <PokeList
        ListHeaderComponent={
          <TextTitlePokemon>
            Qual pokémon você{'\n'}escolheria?
          </TextTitlePokemon>
        }
        data={pokemon}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        onEndReached={fetchPokemons}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterLoading />}
        renderItem={renderItem}
      />
      
    </Container>
  );
}