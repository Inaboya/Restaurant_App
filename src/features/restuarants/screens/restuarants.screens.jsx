import React, { useState } from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restuarants.info.card";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.secondary};
`;

export const RestuarantsScreens = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (query) => {
    setSearch(query);
  };
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search for your favorite eatries..."
          onChangeText={onChangeSearch}
        />
      </SearchBarContainer>
      <ListView>
        <RestaurantsInfoCard />
      </ListView>
    </SafeArea>
  );
};
