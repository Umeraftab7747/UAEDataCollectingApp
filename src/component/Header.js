import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const Header = ({ text }) => {
  return (
    <View style={styles.TopHeader}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  TopHeader: {
    width: "100%",
    height: "7%",
    backgroundColor: "#3D8361",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: h("2%"),
  },
});
