import { View, Image } from "react-native";

export default function LocalImage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../assets/images/clashh.png")}
        style={{ width: 300, height: 300, resizeMode: "contain" }}
      />
    </View>
  );
}
