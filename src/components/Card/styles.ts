import styled from 'styled-components/native';

export const Container = styled.View`
  width: 50%;
  height: 110px;
  padding-left: 5.5%;
  padding-right: 3%;
  padding-top: 9px;
  padding-bottom: 9px;
`;

export const CardBackground = styled.View`
  flex: 1;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.plant};
`;

export const TitleNumberWrap = styled.View`
  margin-top: 10px;
  align-items: flex-end;
`;

export const TitleNumber = styled.Text`
  padding-right: 20px;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.5;
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
`;

export const ImagePokemonWrap = styled.View`
  flex: 1;
`;

export const ImagePokemon = styled.Image`
  width: 100%;
  height: 100%;
`;
