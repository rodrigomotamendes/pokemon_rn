import React, { useEffect, useState } from 'react';
import { PokeDTO } from '../../dtos/PokeDTO';
import { api } from '../../services/api';

import WeightIcon from '../../assets/WeightIcon.svg';
import HeightIcon from '../../assets/HeightIcon.svg';
import MaleIcon from '../../assets/MaleIcon.svg';
import FemaleIcon from '../../assets/FemaleIcon.svg';

import {
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

interface Props {
  pokemon: PokeDTO;
}

interface PropsDescription {
  flavor_text: string,
  language: {
    name: string,
    url: string,
  },
  version: {
    name: string,
    url: string,
  }
};

export function Description({ pokemon } : Props){
  const [description, setDescription] = useState<PropsDescription>();

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

  useEffect(() => {
    fetchDetailText()
  }, []);

  async function fetchDetailText() {
    const response = await api.get(`pokemon-species/${pokemon.id}/`)
      .then((res) => {
        return res.data.flavor_text_entries[0];
      })

      setDescription(response);
  }

  console.log(description)

  return (
    <DescriptionPokemonContainer>
      <DescriptionText color={color}>
        Descrição
      </DescriptionText>

      <InformationText>{description?.flavor_text.replace(/[\n\r]/g,' ')}</InformationText>

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
  );
}