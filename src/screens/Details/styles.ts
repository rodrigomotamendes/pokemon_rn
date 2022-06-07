import styled from 'styled-components/native';
import { Image } from 'react-native';

interface ColorProps {
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

export const ImagePokemon = styled(Image)`
  width: 100%;
  height: 100%;
`;