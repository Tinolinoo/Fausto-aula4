import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Perfil</Text>
      <Text style={styles.sub}>Personalize aqui suas infos ✨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  titulo: { fontSize: 24, fontWeight: 'bold' },
  sub: { marginTop: 8, fontSize: 16, opacity: 0.7 },
});
