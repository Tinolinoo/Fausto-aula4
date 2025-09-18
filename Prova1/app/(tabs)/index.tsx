import { View, Text, Button } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Gabriel Justino Brito Vieira
      </Text>
      <Button title="Ir para Imagem da Internet" onPress={() => window.location.href = "/internet"} />
      <Button title="Ir para Imagem Local" onPress={() => window.location.href = "/local"} />
      <Button title="Ir para Ícones" onPress={() => window.location.href = "/icons"} />
    </View>
  );
}
