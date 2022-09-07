import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

import Header from "../component/Header";
import Button from "../component/Button";

const ItemDetail = () => {
  return (
    <View style={styles.MainContainer}>
      <Animatable.View
        animation="fadeInDown"
        iterationCount={1}
        direction="normal"
        delay={100}
      >
        <Header text="Apratment 22 sharja" />
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        direction="normal"
        delay={100}
        style={styles.ImageContainer}
      >
        {/* img */}

        <Image
          style={styles.Imag}
          source={{
            uri: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          }}
        />

        {/* img */}
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        direction="normal"
        delay={300}
        style={styles.BottomContainer}
      >
        {/* bottom */}

        <Text style={styles.Text}>Apratment 22 ,sharja</Text>
        {/* spec 1 */}
        <View style={styles.ItemContainer}>
          <View style={styles.leftContainer}>
            <Ionicons name="location" size={30} color="#3D8361" />
          </View>
          <View style={styles.RightContainer}>
            <Text style={styles.LeftText}>Sharja</Text>
          </View>
        </View>
        {/* spec 1 */}
        {/* spec 1 */}
        <View style={styles.ItemContainer}>
          <View style={styles.leftContainer}>
            <Ionicons name="logo-chrome" size={30} color="#3D8361" />
          </View>
          <View style={styles.RightContainer}>
            <Text style={styles.LeftText}>www.umeraftab.com</Text>
          </View>
        </View>
        {/* spec 1 */}
        {/* spec 1 */}
        <View style={styles.ItemContainer}>
          <View style={styles.leftContainer}>
            <Ionicons name="globe" size={30} color="#3D8361" />
          </View>
          <View style={styles.RightContainer}>
            <Text style={styles.LeftText}>Makani number 123</Text>
          </View>
        </View>
        {/* spec 1 */}

        {/* bottom */}
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        direction="normal"
        delay={300}
        style={styles.BottomContainer}
      >
        {/* bottom */}

        <View style={styles.BottomContainer}>
          <Text style={styles.Text}>Description</Text>
          <Text style={styles.Text2345}>
            aschja skjahjkcha sakjcbjks akbcjs ckba asd csbajcacs akjcsbba
            cskjcbajc aksuhakc asd csajbnckjasc akschsu ushak cksjakchaa asd
            casjhc ashcihas scknaschkas
          </Text>
        </View>

        {/* bottom */}
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        direction="normal"
        delay={300}
        style={styles.AnimatedContainer}
      >
        {/* bottom */}
        <Button
          text="EDIT"
          onPress={() => {
            alert("BACKEND NOT ATTACH");
          }}
        />
        {/* bottom */}
      </Animatable.View>

      {/* bottom */}
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  ImageContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: "#3D8361",
  },
  Imag: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  Text: {
    color: "#3D8361",
    fontSize: h("3%"),
    fontWeight: "bold",
    marginLeft: h("0.8%"),
  },
  Text2345: {
    color: "#3D8361",
    fontSize: h("1.9%"),
    marginLeft: h("0.8%"),
  },
  BottomContainer: {
    width: "90%",
    // backgroundColor: "red",
    height: h("20%"),
    marginTop: h("1%"),
  },
  ItemContainer: {
    width: "100%",
    height: "22%",
    // backgroundColor: "green",
    flexDirection: "row",
  },
  leftContainer: {
    width: "10%",
    height: "100%",
    // backgroundColor: "gold",
    justifyContent: "center",
    // alignItems: "center",
  },
  RightContainer: {
    width: "80%",
    height: "100%",
    // backgroundColor: "gold",
    justifyContent: "center",
    // alignItems: "center",
  },
  LeftText: {
    color: "#3D8361",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  AnimatedContainer: {
    width: "100%",
    height: h("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
  AnimatedContainer: {
    width: "100%",
    height: h("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemDetail;
