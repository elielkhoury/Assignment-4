import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
  Linking,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useTheme } from "/Users/elieelkhoury/Desktop/Eurisko/Assignment/theme/ThemeContext";

export default function Settings({ navigation }) {
  // State management for theme and notification settings
  const { isDarkTheme, toggleTheme } = useTheme();
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  // Dynamic styles based on the current theme (light or dark)
  const styles = getStyles(isDarkTheme);

  // Navigate back to the previous screen
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Open the default mail client for contacting support
  const handleContactUsPress = () => {
    const email = "itseliekhoury@gmail.com";
    const subject = encodeURIComponent("Support Request");
    const body = encodeURIComponent("Hello, \n\nI need help with...");
    const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;

    // Attempt to open the email URL and catch any errors
    Linking.openURL(mailtoURL).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: isDarkTheme ? "#121212" : "#fff" }}
    >
      <TouchableOpacity
        onPress={handleBackPress}
        style={styles.backIconContainer}
      >
        <FeatherIcon
          name="arrow-left"
          size={24}
          color={isDarkTheme ? "#fff" : "#000"}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.profile}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.profileAvatarWrapper}>
                <Image
                  alt=""
                  source={{
                    uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
                  }}
                  style={styles.profileAvatar}
                />

                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.profileAction}>
                    <FeatherIcon color="#fff" name="edit-3" size={15} />
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileAddress}>
                123 Maple Street. Anytown, PA 17101
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <TouchableOpacity onPress={() => {}} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: "#fe9400" }]}>
                <FeatherIcon color="#fff" name="globe" size={20} />
              </View>

              <Text style={styles.rowLabel}>Language</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: "#007afe" }]}>
                <FeatherIcon color="#fff" name="moon" size={20} />
              </View>

              <Text style={styles.rowLabel}>Dark Mode</Text>

              <View style={styles.rowSpacer} />

              <Switch onValueChange={toggleTheme} value={isDarkTheme} />
            </View>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: "#38C959" }]}>
                <FeatherIcon color="#fff" name="at-sign" size={20} />
              </View>

              <Text style={styles.rowLabel}>Email Notifications</Text>

              <View style={styles.rowSpacer} />

              <Switch
                onValueChange={(emailNotifications) =>
                  setForm({ ...form, emailNotifications })
                }
                value={form.emailNotifications}
              />
            </View>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: "#38C959" }]}>
                <FeatherIcon color="#fff" name="bell" size={20} />
              </View>

              <Text style={styles.rowLabel}>Push Notifications</Text>

              <View style={styles.rowSpacer} />

              <Switch
                onValueChange={(pushNotifications) =>
                  setForm({ ...form, pushNotifications })
                }
                value={form.pushNotifications}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>

            <TouchableOpacity onPress={handleContactUsPress} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: "#007afe" }]}>
                <FeatherIcon color="#fff" name="mail" size={20} />
              </View>
              <Text style={styles.rowLabel}>Contact Us</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function getStyles(isDarkTheme) {
  return StyleSheet.create({
    container: {
      padding: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    backIconContainer: {
      position: "absolute",
      top: 30,
      left: 16,
      zIndex: 10,
    },
    profile: {
      padding: 24,
      backgroundColor: isDarkTheme ? "#121212" : "#fff",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    profileAvatarWrapper: {
      position: "relative",
    },
    profileAvatar: {
      width: 72,
      height: 72,
      borderRadius: 9999,
    },
    profileAction: {
      position: "absolute",
      right: -4,
      bottom: -10,
      alignItems: "center",
      justifyContent: "center",
      width: 28,
      height: 28,
      borderRadius: 9999,
      backgroundColor: "#007bff",
    },
    profileName: {
      marginTop: 20,
      fontSize: 19,
      fontWeight: "600",
      color: isDarkTheme ? "#fff" : "#414d63",
      textAlign: "center",
    },
    profileAddress: {
      marginTop: 5,
      fontSize: 16,
      color: isDarkTheme ? "#fff" : "#989898",
      textAlign: "center",
    },
    section: {
      paddingHorizontal: 24,
    },
    sectionTitle: {
      paddingVertical: 12,
      fontSize: 12,
      fontWeight: "600",
      color: isDarkTheme ? "#fff" : "#9e9e9e",
      textTransform: "uppercase",
      letterSpacing: 1.1,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      height: 50,
      backgroundColor: isDarkTheme ? "#121212" : "#f2f2f2",
      borderRadius: 8,
      marginBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
    },
    rowIcon: {
      width: 32,
      height: 32,
      borderRadius: 9999,
      marginRight: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    rowLabel: {
      fontSize: 17,
      fontWeight: "400",
      color: isDarkTheme ? "#fff" : "#0c0c0c",
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
  });
}
