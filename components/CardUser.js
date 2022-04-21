import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UserDescription from "./UserDescription";
import UserPhoto from "./UserPhoto";

const CardUser = () => {
  return (
    <View style={styles.card}>
      <UserPhoto />
      <UserDescription />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    height: "auto",
    padding: 30,
    width: "100%",
    maxWidth: 320,
    borderRadius: 10,
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.42,
    shadowRadius: 4.22,
    elevation: 10,
  },
});

export default CardUser;
