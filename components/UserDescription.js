import { View, StyleSheet, Text } from "react-native";
import React from "react";

const UserDescription = () => {
  return (
    <View>
      <Text style={styles.content}>
        Hi, I'm <Text style={{ fontWeight: "bold" }}>Anthony Terán </Text>
        Frontend Dev, I'm from Venezuela, currently living in Santiago de Chile.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    textAlign: "center",
    lineHeight: 22,
  },
});

export default UserDescription;
