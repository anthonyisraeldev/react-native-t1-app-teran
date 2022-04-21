import { View, Image, StyleSheet } from "react-native";
import React from "react";

const UserPhoto = () => {
  return (
    <View style={styles.containerPhoto}>
      <Image source={require("../assets/user.jpg")} style={styles.photo} />
    </View>
  );
};
const styles = StyleSheet.create({
  containerPhoto: {
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: "100%",
    maxWidth: 50,
    height: 50,
    marginBottom: 15,
    borderRadius: 200,
  },
});

export default UserPhoto;
