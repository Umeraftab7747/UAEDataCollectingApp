import { StatusBar, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ToastProvider } from "react-native-toast-notifications";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
//screens
import Splash from "./src/Screen/Splash";
import Login from "./src/Screen/Login";
import Home from "./src/Screen/Home";
import ItemDetail from "./src/Screen/ItemDetail";
import Form from "./src/Screen/Form";
import Profile from "./src/Screen/Profile";

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      barStyle={{ backgroundColor: "#3D8361" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Form"
        component={Form}
        options={{
          tabBarLabel: "Form",
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <ToastProvider successColor="#3D8361" textStyle={{ color: "white" }}>
        <SafeAreaView />
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MyTabs" component={MyTabs} />
            <Stack.Screen name="ItemDetail" component={ItemDetail} />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </>
  );
}
