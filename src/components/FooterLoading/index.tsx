import React from 'react';
import { ActivityIndicator } from 'react-native';
import PokemonLogo from '../../assets/PokemonLogo.svg';

import {
  Container
} from './styles';

export function FooterLoading(){
  return (
    <Container>
      <PokemonLogo width={142} height={51}/>
      <ActivityIndicator style={{paddingTop: 16, paddingBottom: 12}} color="#F22424"/>
    </Container>
  );
}