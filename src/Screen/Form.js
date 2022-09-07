import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import * as Animatable from "react-native-animatable";

import Input from "../component/Input";
import Header from "../component/Header";
import Button from "../component/Button";

const Form = () => {
  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        <Animatable.View
          animation="fadeInDown"
          iterationCount={1}
          direction="normal"
          delay={100}
        >
          <Header text="Enter Data" />
        </Animatable.View>

        <View style={styles.Container} />
        <Animatable.View
          animation="fadeInUp"
          iterationCount={1}
          direction="normal"
          delay={300}
          style={styles.AnimatedContainer}
        >
          <Input text="Camp Name" />
        </Animatable.View>
        <Animatable.View
          animation="fadeInUp"
          iterationCount={1}
          direction="normal"
          delay={400}
          style={styles.AnimatedContainer}
        >
          <Input text="Location" />
        </Animatable.View>
        <Animatable.View
          animation="fadeInUp"
          iterationCount={1}
          direction="normal"
          delay={600}
          style={styles.AnimatedContainer}
        >
          <Input text="Plot no" />
        </Animatable.View>
        <Animatable.View
          animation="fadeInUp"
          iterationCount={1}
          direction="normal"
          delay={600}
          style={styles.AnimatedContainer}
        >
          <Input text="Website" />
        </Animatable.View>
        <Animatable.View
          animation="fadeInUp"
          iterationCount={1}
          direction="normal"
          delay={700}
          style={styles.AnimatedContainer}
        >
          <Input text="Makani number" />
        </Animatable.View>
        <Animatable.View
          animation="fadeInUp"
          iterationCount={1}
          direction="normal"
          delay={800}
          style={styles.AnimatedContainer}
        >
          <Input text="Owner Name" />
        </Animatable.View>

        <View style={styles.Container} />

        <Animatable.View
          animation="fadeInUp"
          iterationCount={1}
          direction="normal"
          delay={1200}
        >
          <Text style={styles.TextContainer}>Add Images</Text>
          <TouchableOpacity style={styles.LeftContainer}>
            <Image
              style={styles.Imag}
              source={require("../../assets/ing.png")}
            />
          </TouchableOpacity>
        </Animatable.View>
        <TextInput
          style={styles.Textinput}
          placeholder={"Description"}
          placeholderTextColor={"#3D8361"}
        />

        <View style={styles.Container} />
        <Button text="Submit" />
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: h("140%"),
    backgroundColor: "white",
    alignItems: "center",
  },
  Container: {
    width: "100%",
    height: h("3%"),
  },
  TextContainer: {
    color: "#3D8361",
    fontSize: h("2.5%"),
    fontWeight: "bold",
  },
  LeftContainer: {
    width: 120,
    height: 120,
    marginTop: h("2%"),
  },

  Imag: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  Textinput: {
    width: "95%",
    height: h("25%"),
    marginTop: h("2%"),
    borderRadius: h("2%"),
    borderColor: "#3D8361",
    borderWidth: h("0.3%"),
    paddingLeft: h("1%"),
    fontSize: h("2.2%"),
    color: "#3D8361",
  },
  AnimatedContainer: {
    width: "100%",
    height: h("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
