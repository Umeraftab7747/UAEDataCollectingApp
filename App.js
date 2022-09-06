import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

//screens
import Splash from "./src/Screen/Splash";
import Login from "./src/Screen/Login";
import Home from "./src/Screen/Home";

export default function App() {
  return (
    <>
      <SafeAreaView />
      <StatusBar />
      <Home />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
