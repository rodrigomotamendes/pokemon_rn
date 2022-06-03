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
  const formatted = {

  }

  return (
    <Container {...rest}>
      <CardBackground>
        <TitleNumberWrap>
          <TitleNumber>#{`000${data.id}`.slice(-4)}</TitleNumber>
        </TitleNumberWrap>

        <TitleNameContainer>
          <TitleNameWrap>
            <TitleName>{data.name}</TitleName>
          </TitleNameWrap>
          <ImagePokemonWrap>
            <ImagePokemon 
              resizeMode='contain'
              source={{ uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'}}
            />
          </ImagePokemonWrap>
        </TitleNameContainer>

      </CardBackground>
    </Container>
  );
}