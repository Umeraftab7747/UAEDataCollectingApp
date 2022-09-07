import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  ButtonContainer: {
    width: w("80%"),
    height: h("7%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D8361",
    borderRadius: h("100%"),
    marginTop: h("1%"),
  },
  Text: {
    color: "white",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
});
