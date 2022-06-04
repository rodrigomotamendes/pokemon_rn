import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const LogoWrap = styled.View`
  margin-top: 168px;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: red;
  padding-bottom: 86px;
`;

export const PokebalSVG = styled.View`
  width: 90px;
  height: 90px;
  margin-bottom: 50px;
  background-color: blue;
`;

export const TitleWrap = styled.View`
  flex-direction: row;
`;

export const TitleFooter = styled.Text`
  
`