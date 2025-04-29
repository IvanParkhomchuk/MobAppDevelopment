import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function UserProfileScreen() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      alert('Паролі не збігаються!');
    } else {
      alert(`Вітаємо, ${form.firstName} ${form.lastName}!`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Мій профіль</Text>
      <TextInput style={styles.input} placeholder="Ім'я" onChangeText={(value) => handleInputChange('firstName', value)} />
      <TextInput style={styles.input} placeholder="Прізвище" onChangeText={(value) => handleInputChange('lastName', value)} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={(value) => handleInputChange('email', value)} />
      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry onChangeText={(value) => handleInputChange('password', value)} />
      <TextInput style={styles.input} placeholder="Повторіть пароль" secureTextEntry onChangeText={(value) => handleInputChange('confirmPassword', value)} />
      <Button title="Зберегти" onPress={handleSubmit} color="#FF4F00" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    marginBottom: 18,
  },
});
