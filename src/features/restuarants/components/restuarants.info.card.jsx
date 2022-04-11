import React, { useState } from "react";
import { Image } from "react-native";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  RestuarantsCard,
  RestuarantsCardCover,
  Address,
  FlexDiv,
  Open,
  Info,
  Rating,
  Icon,
} from "./restuarants-info-style";


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
          <Text variant="error">{name}</Text>

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
                <Text variant="error">
                  CLOSED TEMPORARILY 
                </Text>
              )}

              {isOpenNow && (
                <Spacer position="left" size="large">
                  <SvgXml xml={open} style={{ width: 20, height: 20 }} />
                </Spacer>
              )}

              <Spacer position="left" size="large">
                <Icon
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
