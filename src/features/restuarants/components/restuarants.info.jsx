import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export const RestaurantsInfo = ({ restaurant = {} }) => {
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.textStyling}>{name}</Text>
    </Card>
  );
};

// const styles = StyleSheet.create({
//     card: { backgroundColor: "white" },
//     cover: { padding: 14, backgroundColor: "white" },
//     textStyling: { padding: 16 },
// });

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 14, backgroundColor: "white" },
  textStyling: { padding: 16 },
});
