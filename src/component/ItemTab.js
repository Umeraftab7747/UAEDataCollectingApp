import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const ItemTab = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.MainContainer}>
      <View style={styles.COntainer}>
        <View style={styles.LeftContainer}>
          <Image
            style={styles.Imag}
            source={{
              uri: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            }}
          />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.HeaderText}>Apratment 22 sharja</Text>
          <Text style={styles.HeaderText2}>
            aschja skjahjkcha sakjcbjks akbcjs ckba asd csbajcacs akjcsbba
            cskjcbajc aksuhakc
          </Text>
          <Text style={styles.HeaderText3}>Check Details</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemTab;

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: h("19%"),

    justifyContent: "center",
    alignItems: "center",
    marginTop: h("2%"),
  },
  COntainer: {
    backgroundColor: "#3D8361",
    width: "95%",
    height: "100%",
    borderRadius: h("1%"),
    flexDirection: "row",
    overflow: "hidden",
  },
  LeftContainer: {
    width: "30%",
    height: "100%",
  },
  middleContainer: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: h("1%"),
  },
  Imag: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  HeaderText: {
    color: "white",
    fontSize: h("2.5%"),
    fontWeight: "bold",
    marginBottom: h("1%"),
  },
  HeaderText2: {
    color: "#fff7",
    fontSize: h("2%"),
    marginBottom: h("1%"),
  },
  HeaderText3: {
    color: "white",
    fontSize: h("2%"),
    fontWeight: "bold",
    position: "absolute",
    bottom: "5%",
    right: "5%",
  },
});
