import React from "react";
import { ExpoConfigView } from "@expo/samples";
import AppBar from "../components/AppBar";
import { ScrollView, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <AppBar
        title="Settings"
        dark={true}
        style={{ backgroundColor: "black" }}
      />
      <ExpoConfigView />
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: "Config"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "black"
  }
});
