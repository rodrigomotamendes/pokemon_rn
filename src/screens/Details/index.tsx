import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import BackButtonIcon from '../../assets/BackButtonIcon.svg';
import LikeIcon from '../../assets/LikeIcon.svg';
import WeightIcon from '../../assets/WeightIcon.svg';
import HeightIcon from '../../assets/HeightIcon.svg';
import MaleIcon from '../../assets/MaleIcon.svg';
import FemaleIcon from '../../assets/FemaleIcon.svg';

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
  DescriptionPokemonContainer,
  DescriptionText,
  InformationText,
  PhysicalCharacteristicsContainer,
  PhysicalCharacteristicsWrap,
  PhysicalInfoWrap,
  PhysicalLogo,
  PhysicalTextTitle,
  PhysicalSubTitle,
  SeparatorWidget,
  FeaturesContainer,
  TitleFeatures,
  GengerWrap,
  GengerTitle,
  GengerType,
  GengerTypeIcon,
  GengerPercentage,
  PokemonStatusContainer,
  PokemonStatusWrap,
  PokemonStatusTitle,
  PokemonStatusNumber,
  PokemonStatusBarWrap,
  PokemonStatusInactive,
  PokemonStatusActive,
} from './styles';

export function Details(){
  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

      <HeaderWrap>
        <BackButton activeOpacity={0.6} onPress={() => {}}>
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
            <PokemonName>
              {'bulbasaur'}
            </PokemonName>

            <PokemonNumber>
              {'#001'}
            </PokemonNumber>
          </PokemonNameNumberWrap>

          <TypePokemonContainer>
            <TypePokemonWrap>
              <TypePokemon>
                {'Planta'}
              </TypePokemon>
            </TypePokemonWrap>

            <TypePokemonWrap>
              <TypePokemon>
                {'Venenoso'}
              </TypePokemon>
            </TypePokemonWrap>
          </TypePokemonContainer>

          <PokeImageWrap>
            <ImagePokemon
              width='191.65'
              height='189'
              uri={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`}
            />
          </PokeImageWrap>
        </Pokemoninformation>

        <DescriptionPokemonContainer>
          <DescriptionText>Descrição</DescriptionText>

          <InformationText>
            Bulbasaur pode ser visto cochilando sob a luz do sol. Há uma semente nas costas. Ao absorver os raios do sol, a semente cresce progressivamente maior
          </InformationText>

          <PhysicalCharacteristicsContainer>

            <PhysicalCharacteristicsWrap>
              <PhysicalInfoWrap>
                <PhysicalLogo>
                  <WeightIcon
                    width={16}
                    height={16}
                  />
                </PhysicalLogo>
                <PhysicalTextTitle>6,9 kg</PhysicalTextTitle>
              </PhysicalInfoWrap>
              <PhysicalSubTitle>Peso</PhysicalSubTitle>
            </PhysicalCharacteristicsWrap>

            <SeparatorWidget></SeparatorWidget>

            <PhysicalCharacteristicsWrap>
              <PhysicalInfoWrap>
                <PhysicalLogo>
                  <HeightIcon
                    width={8}
                    height={16}
                  />
                </PhysicalLogo>
                <PhysicalTextTitle>0.7 m</PhysicalTextTitle>
              </PhysicalInfoWrap>
              <PhysicalSubTitle>Altura</PhysicalSubTitle>
            </PhysicalCharacteristicsWrap>

            <SeparatorWidget></SeparatorWidget>

            <PhysicalCharacteristicsWrap>
              <PhysicalInfoWrap>
                <PhysicalTextTitle>Chicote de Vinha</PhysicalTextTitle>
              </PhysicalInfoWrap>
              <PhysicalSubTitle>Poder Principal</PhysicalSubTitle>
            </PhysicalCharacteristicsWrap>

          </PhysicalCharacteristicsContainer>

          <FeaturesContainer>
            <TitleFeatures>Suas características</TitleFeatures>

            <GengerWrap>
              <GengerTitle>Gênero</GengerTitle>

              <GengerType>
                <GengerTypeIcon>
                  <MaleIcon 
                    width={17}
                    height={14}
                  />
                </GengerTypeIcon>
                <GengerPercentage>87,5%</GengerPercentage>
              </GengerType>

              <GengerType>
                <GengerTypeIcon>
                  <FemaleIcon 
                    width={17}
                    height={14}
                  />
                </GengerTypeIcon>
                <GengerPercentage>12,5%</GengerPercentage>
              </GengerType>
            </GengerWrap>

            <PokemonStatusContainer>

            <PokemonStatusWrap>
              <PokemonStatusTitle>Saúde</PokemonStatusTitle>
              <PokemonStatusNumber>45</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive></PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>Ataque</PokemonStatusTitle>
              <PokemonStatusNumber>65</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive></PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>Defesa</PokemonStatusTitle>
              <PokemonStatusNumber>49</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive></PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>VI. Ataque</PokemonStatusTitle>
              <PokemonStatusNumber>65</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive></PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>VI. Defesa</PokemonStatusTitle>
              <PokemonStatusNumber>65</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive></PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>Velocidade</PokemonStatusTitle>
              <PokemonStatusNumber>45</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive></PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>Total</PokemonStatusTitle>
              <PokemonStatusNumber>317</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive></PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            </PokemonStatusContainer>

            

          </FeaturesContainer>

        </DescriptionPokemonContainer>
      </ScrollView>
    </Container>
  );
}