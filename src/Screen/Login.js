import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import * as Animatable from "react-native-animatable";
import { useToast } from "react-native-toast-notifications";

import Input from "../component/Input";
import Button from "../component/Button";

import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase";

const Login = ({ navigation }) => {
  const toast = useToast();
  const [email, SetEmail] = useState("");
  const [password, Setpassword] = useState("");
  const [Data, SetData] = useState("");

  React.useEffect(() => {
    // toast.show(`Welcome UMER AFTAB`, {
    //   type: "success",
    //   placement: "bottom",
    //   duration: 4000,
    //   animationType: "zoom-in",
    // });
    // ============================================================
    // toast.show(`Check Email and Password Again!`, {
    //   type: "danger",
    //   placement: "bottom",
    //   duration: 4000,
    //   animationType: "zoom-in",
    // });
  }, []);

  const Login = async () => {
    const arr = [];

    // if (email === "") {
    //   return toast.show(`Email is Required`, {
    //     type: "danger",
    //     placement: "bottom",
    //     duration: 4000,
    //     animationType: "zoom-in",
    //   });
    // }

    // if (password === "") {
    //   return toast.show(`Password is Required`, {
    //     type: "danger",
    //     placement: "bottom",
    //     duration: 4000,
    //     animationType: "zoom-in",
    //   });
    // }

    const querySnapshot = await getDocs(collection(db, "users"));
    await querySnapshot.forEach(async (doc) => {
      arr.push(doc.data());
    });

    await arr.forEach(async (item) => {
      if (item.Email === email) {
        SetData(item);
      }
    });

    if (Data.Email === email && Data.Password === password) {
      navigation.navigate("MyTabs");
      return toast.show(`Welcome ${Data.Name} !`, {
        type: "warning",
        placement: "bottom",
        duration: 4000,
        animationType: "zoom-in",
      });
    } else {
      return toast.show(`Check Your Email & Password again !`, {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "zoom-in",
      });
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Animatable.View
        animation="fadeInDown"
        iterationCount={1}
        direction="normal"
        delay={100}
      >
        <View style={styles.topcontainer}>
          <Image style={styles.img} source={require("../../assets/logo.png")} />
        </View>
      </Animatable.View>

      <View style={styles.BottomContainer} />

      <Animatable.View
        animation="fadeInDown"
        iterationCount={1}
        direction="normal"
        delay={300}
        style={styles.AnimatedContainer}
      >
        <Input
          text="Email"
          onChangeText={(text) => {
            SetEmail(text);
          }}
        />
      </Animatable.View>
      <Animatable.View
        animation="fadeInDown"
        iterationCount={1}
        direction="normal"
        delay={300}
        style={styles.AnimatedContainer}
      >
        <Input
          text="Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            Setpassword(text);
          }}
        />
      </Animatable.View>

      <View style={styles.BottomContainer} />
      <Animatable.View
        animation="fadeInDown"
        iterationCount={1}
        direction="normal"
        delay={500}
        style={styles.AnimatedContainer}
      >
        <Button text="LOGIN" onPress={Login} />
      </Animatable.View>
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
    marginTop: "5%",
    borderRadius: h("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  BottomContainer: {
    width: "100%",
    height: "10%",
    marginBottom: h("5%"),
  },
  AnimatedContainer: {
    width: "100%",
    height: h("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
});
