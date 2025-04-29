import React from 'react';
import { View, Text, Image, StatusBar, Platform, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import DashboardScreen from './DashboardScreen';
import GalleryScreen from './GalleryScreen';
import UserProfileScreen from './UserProfileScreen';

const Tab = createMaterialTopTabNavigator();

function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={{ uri: 'https://ztu.edu.ua/img/logo/university-white.png' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.headerText}>Новітній додаток 4.0</Text>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Скрипник Анна Павлівна</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <CustomHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FF8C00',
          tabBarInactiveTintColor: '#C04000',  
          tabBarStyle: {
            backgroundColor: '#424242',  
            height: undefined,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: '500', 
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="tachometer-alt" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="image" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user-circle" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#263238',
    paddingTop: Platform.OS === 'android' ? 30 : 20,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 35,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 12,
  },
  footerContainer: {
    width: '100%',
    backgroundColor: '#263238',
    paddingVertical: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});
