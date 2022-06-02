import React from 'react';

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

export function Card(){
  return (
    <Container>
      <CardBackground>
        <TitleNumberWrap>
          <TitleNumber>#001</TitleNumber>
        </TitleNumberWrap>

        <TitleNameContainer>
          <TitleNameWrap>
            <TitleName>Bulbasaur</TitleName>
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