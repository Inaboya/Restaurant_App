import React, { useState } from "react";
import { StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restuarants.info.card";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled.SafeAreaView`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestuarantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`
  margin-bottom: ${(props) => props.theme.space[3]};
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

      <RestuarantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantsInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}

      />
    </SafeArea>
  );
};
