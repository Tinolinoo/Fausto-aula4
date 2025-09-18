import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Gabriel Justino Brito Vieira
      </Text>
      <Button title="Ir para Imagem da Internet" onPress={() => navigation.navigate("InternetImage")} />
      <Button title="Ir para Imagem Local" onPress={() => navigation.navigate("LocalImage")} />
      <Button title="Ir para Ícones" onPress={() => navigation.navigate("Icons")} />
    </View>
  );
}

