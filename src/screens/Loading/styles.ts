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
  padding-bottom: 46px;
`;

export const PokebalAnimationWrap = styled.View`
  width: 90px;
  height: 90px;
  margin-bottom: 50px;
`;

export const TitleWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleFooter = styled.Text`
  padding-bottom: 6px;
  padding-right: 2px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const DotWrap = styled.View`
  padding-left: 2px;
  width: 40px;
  height: 80px;
  align-items: center;
  justify-content: flex-end;
`;