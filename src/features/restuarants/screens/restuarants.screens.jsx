import React, { useState } from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/restuarants.info";

export const RestuarantsScreens = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (query) => {
    setSearch(query);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Searchbar
          placeholder="Search for your favorite eatries..."
          onChangeText={onChangeSearch}
          style={styles.searchStyling}
        />
      </View>
      <View style={styles.listStyling}>
        <RestaurantsInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  searchStyling: {
    padding: 16,
  },

  listStyling: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
