    import { View, Image, Button } from "react-native";

export default function InternetImage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0e68c" }}>
      <Image
        source={{ uri: "https://placekitten.com/300/300" }}
        style={{ width: 300, height: 300 }}
      />
      <Button title="Voltar para Home" onPress={() => window.location.href = "/"} />
    </View>
  );
}
