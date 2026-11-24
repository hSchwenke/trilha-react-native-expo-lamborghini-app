import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import GarageScreen from "./src/screens/GarageScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="#1E1E20" />
      <GarageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E20",
    alignItems: "center",
    justifyContent: "center",
  },
});
