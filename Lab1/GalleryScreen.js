import React from 'react';
import { ScrollView, Image, StyleSheet, Text } from 'react-native';

export default function GalleryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Фотогалерея</Text>
      <Image source={{ uri: 'https://ztu.edu.ua/img/mainpage/header/photo8.jpg' }} style={styles.image} />
      <Image source={{ uri: 'https://ztu.edu.ua/images/DSC01575.jpg' }} style={styles.image} />
      <Image source={{ uri: 'https://ztu.edu.ua/img/mainpage/header/photo1.jpg' }} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', padding: 15 },
  title: { fontSize: 24, textAlign: 'center', fontWeight: '700', marginBottom: 15 },
  image: { width: '100%', height: 200, marginBottom: 15, borderRadius: 10 },
});
