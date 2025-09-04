import { View, Text, StyleSheet, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Detalhes</Text>

      <View style={styles.spacing} />

      <Button title="Ir para Perfil" onPress={() => navigation.navigate('Perfil')} />

      <View style={styles.spacing} />

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  titulo: { fontSize: 24, color: '#007AFF', fontWeight: '600' },
  spacing: { height: 12 },
});
