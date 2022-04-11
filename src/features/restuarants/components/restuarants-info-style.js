import styled from 'styled-components/native';
import { Card } from "react-native-paper";

export const RestuarantsCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const RestuarantsCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.nanospace};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const FlexDiv = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Open = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Icon = styled.Image`
  height: 15px;
  width: 15px;
`;