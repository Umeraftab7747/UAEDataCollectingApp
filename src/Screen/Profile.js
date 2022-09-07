import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import * as Animatable from "react-native-animatable";

import Button from "../component/Button";

const Profile = () => {
  return (
    <View style={styles.MainContainer}>
      <Animatable.View
        animation="fadeInDown"
        iterationCount={1}
        direction="normal"
        delay={100}
        style={styles.AnimatedContainer}
      >
        {/* top Container */}
        <View style={styles.TopContainer}>
          <Animatable.View
            animation="zoomIn"
            iterationCount={1}
            direction="normal"
            delay={400}
            style={styles.AnimatedContainer}
          >
            {/* profile img */}
            <View style={styles.ProfileImg}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                }}
              />
            </View>
            {/* profile img */}
          </Animatable.View>

          <Animatable.View
            animation="zoomIn"
            iterationCount={1}
            direction="normal"
            delay={500}
            style={styles.AnimatedContainer}
          >
            <Text style={styles.Text1}>Umer Aftab</Text>
          </Animatable.View>
          <Animatable.View
            animation="zoomIn"
            iterationCount={1}
            direction="normal"
            delay={700}
            style={styles.AnimatedContainer}
          >
            <Text style={styles.Text2}>UmerAftab7747@gmail.com</Text>
          </Animatable.View>
        </View>
        {/* top Container */}
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        direction="normal"
        delay={900}
        style={styles.container2}
      >
        {/* my Collection */}

        <Text style={styles.Texting1}>Today Target</Text>
        <Text style={styles.Texting2}>12</Text>

        {/* my Collection */}
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        direction="normal"
        delay={1200}
        style={styles.container2}
      >
        {/* my Collection */}

        <Text style={styles.Texting1}>Monthly Target</Text>
        <Text style={styles.Texting2}>22</Text>

        {/* my Collection */}
      </Animatable.View>

      <View style={styles.Container222} />

      <Animatable.View
        animation="fadeInDown"
        iterationCount={1}
        direction="normal"
        delay={1200}
      >
        <Button text="Logout" />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  TopContainer: {
    width: w("100%"),
    height: h("30%"),
    backgroundColor: "#3D8361",
    // justifyContent: "center",
    alignItems: "center",
  },
  ProfileImg: {
    width: 130,
    height: 130,
    backgroundColor: "white",
    borderRadius: h("100%"),
    marginTop: h("2%"),
    borderColor: "#fff",
    borderWidth: h("0.7%"),
    overflow: "hidden",
  },
  HeadrProfile: {
    fontSize: h("2%"),
    color: "white",
    fontWeight: "bold",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  Text1: {
    color: "white",
    fontSize: h("2.4%"),
    fontWeight: "bold",
    marginTop: h("0.7%"),
  },
  Text2: {
    color: "white",
    fontSize: h("2%"),
    marginTop: h("0.3%"),
  },
  container2: {
    width: "90%",
    height: h("10%"),

    justifyContent: "center",
  },
  Texting1: {
    color: "#3D8361",
    fontSize: h("2.4%"),
    fontWeight: "bold",
  },
  Texting2: {
    color: "#3D8361",
    fontSize: h("2.2%"),
  },
  Container222: {
    width: "100%",
    height: h("30%"),
  },
});

export default Profile;
