import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { PokeDTO } from '../../dtos/PokeDTO';

import {
  Container,
  CardBackground,
  TitleNumberWrap,
  TitleNumber,
  TitleNameContainer,
  TitleNameWrap,
  TitleName,
  ImagePokemonWrap,
  ImagePokemon,
} from './styles';

interface Props extends TouchableOpacityProps{
  data: PokeDTO;
}

export function Card({ data, ...rest } : Props){
  return (
    <Container activeOpacity={0.7} {...rest}>
      <CardBackground color={data.types[0].type.name}>
        <TitleNumberWrap>
          <TitleNumber>#{`00${data.id}`.slice(-3)}</TitleNumber>
        </TitleNumberWrap>

        <TitleNameContainer>
          <TitleNameWrap>
            <TitleName>{data.name}</TitleName>
          </TitleNameWrap>
          <ImagePokemonWrap>
            <ImagePokemon
              width='100%'
              height='100%'
              uri={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`}
            />
          </ImagePokemonWrap>
        </TitleNameContainer>

      </CardBackground>
    </Container>
  );
}