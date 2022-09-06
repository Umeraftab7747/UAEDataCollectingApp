import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

import Header from "../component/Header";

const Home = () => {
  return (
    <View style={styles.MainContainer}>
      <Header text="HEADER" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
});
