import styled from 'styled-components/native';
import { SvgUri } from 'react-native-svg';

interface ColorProps {
  color: string;
};

interface PokemonStatusProps {
  percentage: number;
  color: string;
};

export const Container = styled.View<ColorProps>`
  flex: 1;
  
  ${({ theme, color }) => 
    color == 'grass' && ({ backgroundColor: theme.colors.grass})};

  ${({ theme, color }) => 
    color == 'fire' && ({ backgroundColor: theme.colors.fire})};

  ${({ theme, color }) => 
    color == 'water' && ({ backgroundColor: theme.colors.water})};

  ${({ theme, color }) => 
    color == 'electric' && ({ backgroundColor: theme.colors.electric})};

  ${({ theme, color }) => 
    color == 'bug' && ({ backgroundColor: theme.colors.bug})};

  ${({ theme, color }) => 
    color == 'rock' && ({ backgroundColor: theme.colors.rock})};

  ${({ theme, color }) => 
    color == 'ghost' && ({ backgroundColor: theme.colors.ghost})};

  ${({ theme, color }) => 
    color == 'steel' && ({ backgroundColor: theme.colors.steel})};

  ${({ theme, color }) => 
    color == 'psychic' && ({ backgroundColor: theme.colors.psychic})};

  ${({ theme, color }) => 
    color == 'ice' && ({ backgroundColor: theme.colors.ice})};

  ${({ theme, color }) => 
    color == 'dark' && ({ backgroundColor: theme.colors.dark})};

  ${({ theme, color }) => 
    color == 'fairy' && ({ backgroundColor: theme.colors.fairy})};

  ${({ theme, color }) => 
    color == 'normal' && ({ backgroundColor: theme.colors.normal})};

  ${({ theme, color }) => 
    color == 'fighting' && ({ backgroundColor: theme.colors.fighting})};

  ${({ theme, color }) => 
    color == 'flying' && ({ backgroundColor: theme.colors.flying})};

  ${({ theme, color }) => 
    color == 'poison' && ({ backgroundColor: theme.colors.poison})};

  ${({ theme, color }) => 
    color == 'ground' && ({ backgroundColor: theme.colors.ground})};

  ${({ theme, color }) => 
    color == 'dragon' && ({ backgroundColor: theme.colors.dragon})};
`;

export const HeaderWrap = styled.View`
  width: 100%;
  margin-top: 56px;
  margin-right: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  border-radius: 26px;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
`;

export const LikeButton = styled.TouchableOpacity`
  border-radius: 26px;
  width: 52px;
  height: 52px;
  margin-right: 9.5px;
  align-items: center;
  justify-content: center;
`;

export const Pokemoninformation = styled.View``;

export const PokemonNameNumberWrap = styled.View`
  flex-direction: row;
  padding-left: 20px;
  padding-right: 31px;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonName = styled.Text`
  font-size: 36px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_light};
  text-transform: capitalize;
`;

export const PokemonNumber = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const TypePokemonContainer = styled.View`
  margin-left: 17.5px;
  margin-right: 17.5px;
  margin-top: 11px;
  flex-direction: row;
`;

export const TypePokemonWrap = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 38px;
  margin-left: 3.5px;
  margin-right: 3.5px;
`;

export const TypePokemon = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const PokeImageWrap = styled.View`
  z-index: 1;
  height: 189px;
  width: 100%;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
`;

export const ImagePokemon = styled(SvgUri)``;

export const DescriptionPokemonContainer = styled.View`
  flex: 1;
  margin-top: -40px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.text_light};
  padding-top: 52px;
  padding-bottom: 52px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const DescriptionText = styled.Text<ColorProps>`
  font-size: 20px;
  font-weight: 700;

  ${({ theme, color }) => 
    color == 'grass' && ({ color: theme.colors.grass})};

  ${({ theme, color }) => 
    color == 'fire' && ({ color: theme.colors.fire})};

  ${({ theme, color }) => 
    color == 'water' && ({ color: theme.colors.water})};

  ${({ theme, color }) => 
    color == 'electric' && ({ color: theme.colors.electric})};

  ${({ theme, color }) => 
    color == 'bug' && ({ color: theme.colors.bug})};

  ${({ theme, color }) => 
    color == 'rock' && ({ color: theme.colors.rock})};

  ${({ theme, color }) => 
    color == 'ghost' && ({ color: theme.colors.ghost})};

  ${({ theme, color }) => 
    color == 'steel' && ({ color: theme.colors.steel})};

  ${({ theme, color }) => 
    color == 'psychic' && ({ color: theme.colors.psychic})};

  ${({ theme, color }) => 
    color == 'ice' && ({ color: theme.colors.ice})};

  ${({ theme, color }) => 
    color == 'dark' && ({ color: theme.colors.dark})};

  ${({ theme, color }) => 
    color == 'fairy' && ({ color: theme.colors.fairy})};

  ${({ theme, color }) => 
    color == 'normal' && ({ color: theme.colors.normal})};

  ${({ theme, color }) => 
    color == 'fighting' && ({ color: theme.colors.fighting})};

  ${({ theme, color }) => 
    color == 'flying' && ({ color: theme.colors.flying})};

  ${({ theme, color }) => 
    color == 'poison' && ({ color: theme.colors.poison})};

  ${({ theme, color }) => 
    color == 'ground' && ({ color: theme.colors.ground})};

  ${({ theme, color }) => 
    color == 'dragon' && ({ color: theme.colors.dragon})};
`;

export const InformationText = styled.Text`
  margin-top: 41px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const PhysicalCharacteristicsContainer= styled.View`
  margin-top: 32px;
  width: 100%;
  padding-right: 20px;
  flex-direction: row;
`;

export const PhysicalCharacteristicsWrap= styled.View`
  width: 33%;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const PhysicalInfoWrap = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PhysicalLogo = styled.View`
  width: 16px;
  height: 16px;
  align-items: center;
  margin-right: 8px;
`;

export const PhysicalTextTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_dark};
  text-align: center;
  text-transform: capitalize;
`;

export const PhysicalSubTitle = styled.Text`
  font-size: 12px;
  height: 16px;
  color: #767676;
`;

export const SeparatorWidget = styled.View`
  height: 100%;
  width: 0.5%;
  background-color: #E0E0E0;
`;

export const FeaturesContainer = styled.View`
  margin-top: 31px;
`;

export const TitleFeatures = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const GengerWrap = styled.View`
  flex-direction: row;
  margin-top: 17px;
`;

export const GengerTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_dark};
  width: 88px;
`;

export const GengerType = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 68px;
`;

export const GengerTypeIcon = styled.View`
  margin-right: 4px;
  width: 17px;
  height: 14px;
`;

export const GengerPercentage = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const PokemonStatusContainer = styled.View``;

export const PokemonStatusWrap = styled.View`
  margin-top: 14px;
  flex-direction: row;
`;

export const PokemonStatusTitle = styled.Text`
  width: 88px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const PokemonStatusNumber = styled.Text`
  width: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const PokemonStatusBarWrap = styled.View`
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
  align-items: flex-start;
  justify-content: center;
`;

export const PokemonStatusInactive = styled.View`
  width: 100%;
  background-color: #F4F5F4;
  height: 5px;
  border-radius: 2.5px;
`;

export const PokemonStatusActive = styled.View<PokemonStatusProps>`
  position: absolute;
  height: 5px;
  border-radius: 2.5px;

  ${({ percentage }) => ({ width: percentage})};

  ${({ theme, color }) => 
    color == 'grass' && ({ backgroundColor: theme.colors.grass})};

  ${({ theme, color }) => 
    color == 'fire' && ({ backgroundColor: theme.colors.fire})};

  ${({ theme, color }) => 
    color == 'water' && ({ backgroundColor: theme.colors.water})};

  ${({ theme, color }) => 
    color == 'electric' && ({ backgroundColor: theme.colors.electric})};

  ${({ theme, color }) => 
    color == 'bug' && ({ backgroundColor: theme.colors.bug})};

  ${({ theme, color }) => 
    color == 'rock' && ({ backgroundColor: theme.colors.rock})};

  ${({ theme, color }) => 
    color == 'ghost' && ({ backgroundColor: theme.colors.ghost})};

  ${({ theme, color }) => 
    color == 'steel' && ({ backgroundColor: theme.colors.steel})};

  ${({ theme, color }) => 
    color == 'psychic' && ({ backgroundColor: theme.colors.psychic})};

  ${({ theme, color }) => 
    color == 'ice' && ({ backgroundColor: theme.colors.ice})};

  ${({ theme, color }) => 
    color == 'dark' && ({ backgroundColor: theme.colors.dark})};

  ${({ theme, color }) => 
    color == 'fairy' && ({ backgroundColor: theme.colors.fairy})};

  ${({ theme, color }) => 
    color == 'normal' && ({ backgroundColor: theme.colors.normal})};

  ${({ theme, color }) => 
    color == 'fighting' && ({ backgroundColor: theme.colors.fighting})};

  ${({ theme, color }) => 
    color == 'flying' && ({ backgroundColor: theme.colors.flying})};

  ${({ theme, color }) => 
    color == 'poison' && ({ backgroundColor: theme.colors.poison})};

  ${({ theme, color }) => 
    color == 'ground' && ({ backgroundColor: theme.colors.ground})};

  ${({ theme, color }) => 
    color == 'dragon' && ({ backgroundColor: theme.colors.dragon})};

`;