import React from 'react';
import { StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';

import PokemonLogo from '../../assets/PokemonLogo.svg';

import {
  Container,
  LogoWrap,
  Footer,
  PokebalAnimationWrap,
  TitleWrap,
  TitleFooter,
  DotWrap,
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
        <PokebalAnimationWrap>
          <LottieView
            source={require('../../assets/pokeballLoadingAnimation.json')}
            autoPlay
            loop
            style={{flex: 1, width: '100%', height: '100%' , backgroundColor: 'transparent',}}
          />
        </PokebalAnimationWrap>
        <TitleWrap>
          <TitleFooter>Carregando</TitleFooter>
          <DotWrap>
            <LottieView
              source={require('../../assets/dotAnimation.json')}
              autoPlay
              loop
              style={{flex: 1, width: '100%', height: '100%' , backgroundColor: 'transparent',}}
            />
          </DotWrap>
        </TitleWrap>
      </Footer>

    </Container>
  );
}