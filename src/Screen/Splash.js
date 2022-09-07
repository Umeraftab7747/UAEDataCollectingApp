import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { useToast } from "react-native-toast-notifications";

const Splash = ({ navigation }) => {
  const toast = useToast();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, []);

  return (
    <View style={styles.MainContainer}>
      <View style={styles.topcontainer}>
        <Image style={styles.img} source={require("../../assets/logo.png")} />
      </View>

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
    marginTop: "5%",
    borderRadius: h("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  BottomContainer: {
    width: "100%",
    height: "10%",
    marginBottom: h("55%"),
  },
  img: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
});
