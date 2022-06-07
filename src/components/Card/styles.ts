import styled from 'styled-components/native';
import { Image, TouchableOpacity } from 'react-native';

interface ColorProps {
  color: string;
};

export const Container = styled(TouchableOpacity)`
  width: 50%;
  height: 120px;
  padding-left: 5.5px;
  padding-right: 5.5px;
  padding-top: 9px;
  padding-bottom: 9px;
`;

export const CardBackground = styled.View<ColorProps>`
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

  border-radius: 14px;
`;

export const TitleNumberWrap = styled.View`
  margin-top: 10px;
  align-items: flex-end;
`;

export const TitleNumber = styled.Text`
  padding-right: 20px;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
`;

export const TitleNameContainer = styled.View`
  flex: 1;
  padding-left: 16px;
  flex-direction: row;
`;

export const TitleNameWrap = styled.View``;

export const TitleName = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_light};
  padding-bottom: 7px;
  text-transform: capitalize;
`;

export const ImagePokemonWrap = styled.View`
  flex: 1;
  margin-right: 8px;
  margin-left: 3px;
  margin-bottom: 3px;
  align-items: center;
  justify-content: flex-end;
`;

export const ImagePokemon = styled(Image)`
  width: 100%;
  height: 100%;
`;