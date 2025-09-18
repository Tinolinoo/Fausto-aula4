import React from "react";
import { View, Image } from "react-native";

export default function LocalImageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../assets/clashh.png")}
        style={{ width: 300, height: 300, resizeMode: "contain" }}
      />
    </View>
  );
}
