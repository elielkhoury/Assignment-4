import React from "react";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "/Users/elieelkhoury/Desktop/Eurisko/Assignment/theme/ThemeContext";

const Home = ({ navigation }) => {
  const { isDarkTheme } = useTheme();
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  // Dynamic styles that change based on the theme
  const dynamicStyles = StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: isDarkTheme ? "#121212" : "#FFFFFF",
    },
    title: {
      ...styles.title,
      color: isDarkTheme ? "#FFFFFF" : "#000000",
    },
    detail: {
      ...styles.detail,
      color: isDarkTheme ? "#E0E0E0" : "#000000",
    },
    settingsButton: {
      ...styles.settingsButton,
      color: isDarkTheme ? "#FFFFFF" : "#000000",
    },
  });

  // Show loading text until fonts are loaded
  if (!fontsLoaded) {
    return (
      <View style={dynamicStyles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={dynamicStyles.container}>
        <Pressable
          style={styles.settingsButton}
          onPress={() => navigation.navigate("Settings")}
        >
          <Feather
            name="settings"
            size={24}
            color={isDarkTheme ? "white" : "black"}
          />
        </Pressable>

        <Image source={require("../img/1.png")} style={styles.img} />
        <Text style={dynamicStyles.title}>Audi RS6</Text>
        <Text style={dynamicStyles.detail}>
          Discover the Audi RS6 Mansory, where elite performance meets bespoke
          luxury. Customize your ride for an exclusive driving sensation.
        </Text>
        <Pressable onPress={() => navigation.navigate("Detail")}>
          <LinearGradient
            colors={["#0A0F0D", "#3A7BD5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.btn}
          >
            <Text style={styles.text}>Details</Text>
          </LinearGradient>
        </Pressable>
      </View>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  img: {
    height: "50%",
    width: "120%",
    marginLeft: 30,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 20,
  },
  btn: {
    marginTop: 60,
    marginBottom: 40,
    paddingHorizontal: 90,
    paddingVertical: 10,
    borderRadius: 30,
    width: "80%",
    alignSelf: "center",
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
    color: "#FFFFFF",
  },
  settingsButton: {
    position: "absolute",
    right: 10,
    top: 50,
    padding: 10,
    zIndex: 1,
  },
});
