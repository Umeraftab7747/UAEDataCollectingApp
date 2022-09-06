import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const Splash = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.topcontainer}></View>

      <View style={styles.BottomContainer} />
      <ActivityIndicator size="large" color="#3D8361" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    // justifyContent: "center",
    alignItems: "center",
  },
  topcontainer: {
    width: 170,
    height: 170,
    backgroundColor: "#3D8361",
    marginTop: "2%",
    borderRadius: h("1%"),
  },
  BottomContainer: {
    width: "100%",
    height: "10%",
    marginBottom: h("55%"),
  },
});
