import React, { useState } from "react";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestuarantsCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestuarantsCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.nanospace};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.nanospace};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const FlexDiv = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Open = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ],
    address = "Some Address",
    rating = 4.5,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  const newArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestuarantsCard elevation={5}>
        <RestuarantsCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>

          <FlexDiv>
            <Rating>
              {newArray.map((item, index) => (
                <SvgXml
                  key={index}
                  xml={star}
                  style={{ width: 20, height: 20 }}
                />
              ))}
            </Rating>

            <Open>
              {isClosedTemporarily && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}

              {isOpenNow && (
                <Spacer position="left" size="large">
                  <SvgXml xml={open} style={{ width: 20, height: 20 }} />
                </Spacer>
              )}

              <Spacer position="left" size="large">
                <Image
                  style={{ height: 15, width: 15 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </Open>
          </FlexDiv>

          <Address>{address}</Address>
        </Info>
      </RestuarantsCard>
    </>
  );
};
