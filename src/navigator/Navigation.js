import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false, // Hide the header provided by the navigation stack
};

// This component sets up the navigation stack for the app.
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />

      {/* This screen is expected to show more detailed information about an item selected from the Home screen. */}
      <Stack.Screen name="Detail" component={Detail} />

      {/* This screen allows users to modify app settings. */}
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
