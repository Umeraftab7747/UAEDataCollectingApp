import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import * as Animatable from "react-native-animatable";

import Header from "../component/Header";
import ItemTab from "../component/ItemTab";

const Home = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
      <Animatable.View
        animation="fadeInDown"
        iterationCount={1}
        direction="normal"
        delay={100}
        style={styles.AnimatedContainer}
      >
        <Header text="HEADER" />
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        direction="normal"
        delay={300}
        style={styles.AnimatedContainer}
      >
        <Text style={styles.MainText}>My Data</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        direction="normal"
        delay={400}
        style={styles.AnimatedContainer}
      >
        <ItemTab
          onPress={() => {
            navigation.navigate("ItemDetail");
          }}
        />
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        direction="normal"
        delay={500}
        style={styles.AnimatedContainer}
      >
        <ItemTab
          onPress={() => {
            navigation.navigate("ItemDetail");
          }}
        />
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        direction="normal"
        delay={600}
        style={styles.AnimatedContainer}
      >
        <ItemTab
          onPress={() => {
            navigation.navigate("ItemDetail");
          }}
        />
      </Animatable.View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  MainText: {
    color: "#3D8361",
    fontSize: h("3%"),
    marginLeft: h("3%"),
    fontWeight: "bold",
    marginTop: h("2%"),
  },
});
