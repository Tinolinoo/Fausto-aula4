import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconsScreen() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", flex: 1, alignItems: "center" }}>
      <Ionicons name="home" size={50} color="red" />
      <Ionicons name="star" size={50} color="blue" />
      <Ionicons name="settings" size={50} color="green" />
    </View>
  );
}
