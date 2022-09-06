import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

import Input from "../component/Input";
import Button from "../component/Button";

const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topcontainer}></View>

      <View style={styles.BottomContainer} />
      <Input text="Email" />
      <Input text="Password" />

      <View style={styles.BottomContainer} />
      <Button text="LOGIN" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  topcontainer: {
    width: 170,
    height: 170,
    backgroundColor: "#3D8361",
    marginTop: "5%",
    borderRadius: h("1%"),
  },
  BottomContainer: {
    width: "100%",
    height: "10%",
    marginBottom: h("5%"),
  },
});
