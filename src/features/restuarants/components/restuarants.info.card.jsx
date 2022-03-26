import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestuarantsCard = styled(Card)`
  backgroundColor: white;
`;

const RestuarantsCardCover = styled(Card.Cover)`
  padding: 15px;
  backgroundColor: white

`;
const Title = styled.Text`
  padding: 10px;
`;

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ],
    address = "Some Address",
    rating = 4.5,
    isOpenNow = true,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestuarantsCard elevation={5}>
      <RestuarantsCardCover
        key={name}
        source={{ uri: photos[0] }}
      />
      <Title>{name}</Title>
    </RestuarantsCard>
  );
};

