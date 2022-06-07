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
              resizeMode='contain'
              source={{uri: `https://veekun.com/dex/media/pokemon/global-link/${data.id}.png`}}
            />
          </ImagePokemonWrap>
        </TitleNameContainer>

      </CardBackground>
    </Container>
  );
}