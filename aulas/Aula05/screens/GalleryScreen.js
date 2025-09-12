import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IMAGES = [
  'https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png',
  'https://img.freepik.com/vetores-gratis/simbolo-de-anarquia-de-design-plano-desenhado-a-mao_23-2149244363.jpg?semt=ais_hybrid&w=740&q=80',
  'https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg'
];

export default function GalleryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="camera" size={28} color="black" />
        <Text style={styles.headerText}> Galeria </Text>
      </View>

      {IMAGES.map((uri, idx) => (
        <Image key={idx} source={{ uri }} style={styles.image} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems:'center', padding:16 },
  header: { flexDirection:'row', alignItems:'center', marginBottom:12 },
  headerText: { fontSize:18, marginLeft:8 },
  image: { width:320, height:200, borderRadius:8, marginVertical:8, resizeMode:'cover' }
});
