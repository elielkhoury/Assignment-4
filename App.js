import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigator/Navigation";
import { ThemeProvider } from "/Users/elieelkhoury/Desktop/Eurisko/Assignment/theme/ThemeContext";

export default function App() {
  return (
    // Wrap the whole app with the ThemeProvider to provide a theme context to all components.
    <ThemeProvider>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
