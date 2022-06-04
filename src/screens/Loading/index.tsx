import React from 'react';
import { StatusBar } from 'react-native';

import PokemonLogo from '../../assets/PokemonLogo.svg';

import {
  Container,
  LogoWrap,
  Footer,
  PokebalSVG,
  TitleWrap,
  TitleFooter,
} from './styles';

export function Loading(){
  return (
    <Container>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <LogoWrap>
        <PokemonLogo 
          width={142} 
          height={51}
        />
      </LogoWrap>
      <Footer>
        <PokebalSVG/>
        <TitleWrap>
          <TitleFooter>Carregando</TitleFooter>
          <TitleFooter>  ...</TitleFooter>
        </TitleWrap>
      </Footer>

    </Container>
  );
}