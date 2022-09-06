import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const Input = ({ text }) => {
  return (
    <View style={styles.TopContaner}>
      <TextInput
        style={styles.TopTextInput}
        placeholderTextColor="#3D8361"
        placeholder={`Enter ${text}`}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  TopContaner: {
    width: "90%",
    height: h("7%"),
  },
  TopTextInput: {
    width: "100%",
    height: "100%",
    borderBottomColor: "#3D8361",
    borderBottomWidth: h("0.3%"),
    fontSize: h("2%"),
    color: "#3D8361",
  },
});
