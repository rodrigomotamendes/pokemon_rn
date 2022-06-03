import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { PokeDTO } from '../../dtos/PokeDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 154px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  padding-top: 76px;
  padding-left: 22px;
  padding-right: 33px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const TextHeader = styled.View`
  flex: 1;
`;

export const TitleHeader = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const SubtitleHeader = styled.Text`
  font-size: 14px;
  font-weight: 400;
  padding-top: 2px;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const ImagePeople = styled.View`
  width: 47px;
  height: 47px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const TextTitlePokemon = styled.Text`
  padding-top: 29px;
  padding-left: 21px;
  padding-bottom: 21px;

  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const PokeList = styled(FlatList as new (props: FlatListProps<PokeDTO>)=> FlatList<PokeDTO>).attrs({
  contentContainerStyle: {
    paddingHorizontal: 14.5,
  },
  showsVerticalScrollIndicator: false,
})``;