import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { PokeDTO } from '../../dtos/PokeDTO';

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

  const totalBaseStat = 
    pokemon.stats[0].base_stat +
    pokemon.stats[1].base_stat +
    pokemon.stats[2].base_stat +
    pokemon.stats[3].base_stat +
    pokemon.stats[4].base_stat +
    pokemon.stats[5].base_stat;

  const weightPokemon = ((pokemon.weight)/10);
  const heightPokemon = ((pokemon.height)/10);

  const hp = ((pokemon.stats[0].base_stat));
  const attack= ((pokemon.stats[1].base_stat));
  const defense = ((pokemon.stats[2].base_stat));
  const specialAttack = ((pokemon.stats[3].base_stat));
  const specialDefense = ((pokemon.stats[4].base_stat));
  const speed = ((pokemon.stats[5].base_stat));
  const totalStats = totalBaseStat / 4;

  const color = pokemon.types[0].type.name;

  return (
    <Container color={pokemon.types[0].type.name}>
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
              uri={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            />
          </PokeImageWrap>
        </Pokemoninformation>

        <DescriptionPokemonContainer>
          <DescriptionText color={color}>
            Descrição
          </DescriptionText>

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
                <PhysicalTextTitle>{weightPokemon} kg</PhysicalTextTitle>
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
                <PhysicalTextTitle>{heightPokemon} m</PhysicalTextTitle>
              </PhysicalInfoWrap>
              <PhysicalSubTitle>Altura</PhysicalSubTitle>
            </PhysicalCharacteristicsWrap>

            <SeparatorWidget></SeparatorWidget>

            <PhysicalCharacteristicsWrap>
              <PhysicalInfoWrap>
                <PhysicalTextTitle>{pokemon.moves[0].move.name}</PhysicalTextTitle>
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
              <PokemonStatusNumber>{pokemon.stats[0].base_stat}</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive 
                  percentage={hp} color={color}>
                </PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>Ataque</PokemonStatusTitle>
              <PokemonStatusNumber>{pokemon.stats[1].base_stat}</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive 
                  percentage={attack} color={color}>
                </PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>Defesa</PokemonStatusTitle>
              <PokemonStatusNumber>{pokemon.stats[2].base_stat}</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive 
                  percentage={defense} color={color}>  
                </PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>VI. Ataque</PokemonStatusTitle>
              <PokemonStatusNumber>{pokemon.stats[3].base_stat}</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive 
                  percentage={specialAttack} color={color}>
                </PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>VI. Defesa</PokemonStatusTitle>
              <PokemonStatusNumber>{pokemon.stats[4].base_stat}</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive 
                  percentage={specialDefense} color={color}>
                </PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>Velocidade</PokemonStatusTitle>
              <PokemonStatusNumber>{pokemon.stats[5].base_stat}</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive 
                  percentage={speed} color={color}>
                </PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            <PokemonStatusWrap>
              <PokemonStatusTitle>Total</PokemonStatusTitle>
              <PokemonStatusNumber>{totalBaseStat}</PokemonStatusNumber>

              <PokemonStatusBarWrap>
                <PokemonStatusInactive></PokemonStatusInactive>
                <PokemonStatusActive 
                  percentage={totalStats} color={color}>
                </PokemonStatusActive>
              </PokemonStatusBarWrap>
            </PokemonStatusWrap>

            </PokemonStatusContainer>

          </FeaturesContainer>

        </DescriptionPokemonContainer>
      </ScrollView>
    </Container>
  );
}