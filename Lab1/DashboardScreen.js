import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function DashboardScreen() {
  const news = [
    { title: 'Оновлення версії', date: '16.04.2025', description: 'Це найновіше оновлення нашого додатку, яке включає нові функції.', image: 'https://alumni.ztu.edu.ua/wp-content/uploads/2021/10/asotsyatsyya-krugla-norm-vse-3-768x768.png' },
    { title: 'Подія року', date: '15.04.2025', description: 'Не пропустіть важливу подію для всіх користувачів!', image: 'https://armyinform.com.ua/wp-content/uploads/2024/02/2_years.jpg' },
    { title: 'Нові можливості', date: '14.04.2025', description: 'Додано нові можливості в користувацькому інтерфейсі.', image: 'https://ztu.edu.ua/img/mainpage/header/photo1.jpg' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Актуальні новини</Text>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textBlock}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  header: { fontSize: 24, fontWeight: '700', color: '#333', marginBottom: 15 },
  card: { flexDirection: 'row', marginBottom: 20, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 6 },
  image: { width: 100, height: undefined, marginRight: 15, borderRadius: 8 },
  textBlock: { flex: 1, padding: 10 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  date: { fontSize: 12, color: '#777' },
  description: { fontSize: 14, color: '#5у5' },
});
