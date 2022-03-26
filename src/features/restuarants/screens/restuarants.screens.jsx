import React, { useState } from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restuarants.info.card";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  marginTop: ${StatusBar.currentHeight}px;
`;

const Search = styled(Searchbar)`
  padding: 16px;
`;


const ListView = styled.View`
    flex: 1;
    padding: 16px;
    backgroundColor: blue;
`;

export const RestuarantsScreens = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (query) => {
    setSearch(query);
  };
  return (
    <SafeArea>
      <View>
        <Search
          placeholder="Search for your favorite eatries..."
          onChangeText={onChangeSearch}
        />
      </View>
      <ListView>
        <RestaurantsInfoCard />
      </ListView>
    </SafeArea>
  );
};


