import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "/Users/elieelkhoury/Desktop/Eurisko/Assignment/theme/ThemeContext";

const Detail = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [imageSource, setImageSource] = useState(require("../img/2.png"));
  const { isDarkTheme } = useTheme();

  // Function to change the car image based on selected color
  const selectColor = (color) => {
    setSelectedColor(color);
    if (color === "red") {
      setImageSource(require("../img/3.png"));
    } else {
      setImageSource(require("../img/2.png"));
    }
  };

  // Function to get border color for color selection buttons based on the current selection
  const getBorderColor = (color) => ({
    borderColor: color === "black" ? "blue" : "black",
    borderWidth: 2,
  });

  // Determine the style of the car image based on the selected color
  const imageStyle =
    selectedColor === "red" ? styles.imgRed : styles.imgDefault;

  // Dynamic styles that change based on the current theme (dark or light)
  const dynamicStyles = StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: isDarkTheme ? "#121212" : "#FFFFFF",
    },
    title: {
      ...styles.title,
      color: isDarkTheme ? "#FFFFFF" : "#212121",
    },
    subtitle: {
      ...styles.subtitle,
      color: isDarkTheme ? "#FFFFFF" : "#757575",
    },
    text: {
      ...styles.text,
      color: isDarkTheme ? "#FFFFFF" : "#212121",
    },
    header: {
      ...styles.header,
      backgroundColor: isDarkTheme ? "#121212" : "#FFFFFF",
    },
    colorCircle: {
      ...styles.colorCircle,
      borderColor: isDarkTheme ? "#FFFFFF" : "#000",
    },
    cont3: {
      ...styles.cont3,
      backgroundColor: isDarkTheme ? "#121212" : "#F8F8F8",
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="chevron-left"
            color={isDarkTheme ? "#FFF" : "#000"}
            size={25}
          />
        </TouchableOpacity>
        <Feather
          name="shopping-cart"
          color={isDarkTheme ? "#FFF" : "#000"}
          size={25}
        />
      </View>
      <Image source={imageSource} style={imageStyle} />
      <View style={styles.cont3}>
        <Text style={dynamicStyles.title}>Audi RS6</Text>
        <Text style={dynamicStyles.subtitle}>Mansory</Text>
        <View style={styles.cont2}>
          <Text style={{ ...dynamicStyles.title, flex: 2, marginTop: 0 }}>
            Colors
          </Text>
          <TouchableOpacity onPress={() => selectColor("black")}>
            <View
              style={[
                styles.colorCircle,
                styles.blackColor,
                selectedColor === "black" ? getBorderColor("black") : {},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectColor("red")}>
            <View
              style={[
                styles.colorCircle,
                styles.redColor,
                selectedColor === "red" ? getBorderColor("red") : {},
              ]}
            />
          </TouchableOpacity>
        </View>
        <Text style={dynamicStyles.title}>Description</Text>
        <Text style={dynamicStyles.text}>
          The Audi RS6 boasts a twin-turbocharged V8 engine delivering 591
          horsepower, featuring quattro all-wheel drive, cutting-edge technology
          with a luxurious interior.
        </Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
    zIndex: 1,
  },
  imgDefault: {
    width: "100%",
    height: "45%",
    resizeMode: "cover",
    alignSelf: "center",
    marginTop: -80,
  },
  imgRed: {
    width: "100%",
    height: "30%",
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
  },
  cont3: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: "Montserrat_700Bold",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Montserrat_400Regular",
    marginTop: 10,
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    marginTop: 20,
    lineHeight: 20,
  },
  cont2: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 25,
  },
  colorCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  blackColor: {
    backgroundColor: "#000000",
  },
  redColor: {
    backgroundColor: "#FF0000",
  },
});
