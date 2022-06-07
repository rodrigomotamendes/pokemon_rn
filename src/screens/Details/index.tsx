import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { PokeDTO } from '../../dtos/PokeDTO';

import BackButtonIcon from '../../assets/BackButtonIcon.svg';
import LikeIcon from '../../assets/LikeIcon.svg';

import {
  Container,
  HeaderWrap,
  BackButton,
  LikeButton,
  Pokemoninformation,
  PokemonNameNumberWrap,
  PokemonName,
  PokemonNumber,
  TypePokemonContainer,
  TypePokemonWrap,
  TypePokemon,
  PokeImageWrap,
  ImagePokemon,
} from './styles';
import { Description } from '../../components/Description';

interface Params {
  pokemon: PokeDTO;
}

export function Details(){
  const navigation = useNavigation();
  const route = useRoute();
  const { pokemon } = route.params as Params;

  function handleGoBack() {
    navigation.goBack();
  }

  const color = pokemon.types[0].type.name;

  return (
    <Container color={color}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

      <HeaderWrap>
        <BackButton activeOpacity={0.6} onPress={handleGoBack}>
          <BackButtonIcon 
            width={7.7}
            height={13.4}
          />
        </BackButton>

        <LikeButton activeOpacity={0.6} onPress={() => {}}>
          <LikeIcon 
            width={16}
            height={13}
          />
        </LikeButton>
      </HeaderWrap>

      <ScrollView>
        <Pokemoninformation>
          <PokemonNameNumberWrap>
            <PokemonName>{pokemon.name}</PokemonName>

            <PokemonNumber>
              #{`00${pokemon.id}`.slice(-3)}
            </PokemonNumber>
          </PokemonNameNumberWrap>

          <TypePokemonContainer>
            <TypePokemonWrap>
              <TypePokemon>
                {pokemon.types[0].type.name}
              </TypePokemon>
            </TypePokemonWrap>
            
          </TypePokemonContainer>

          <PokeImageWrap>
            <ImagePokemon
              resizeMode='contain'
              source={{uri: `https://veekun.com/dex/media/pokemon/global-link/${pokemon.id}.png`}}
            />
          </PokeImageWrap>
        </Pokemoninformation>

        <Description pokemon={pokemon}/>
        
      </ScrollView>
    </Container>
  );
}