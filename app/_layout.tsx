import { Slot } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from '../components/Sidebar';

export default function Layout() {
  return (
    <View style={styles.container}>
      {/* The Sidebar stays constant */}
      <Sidebar />
      
      {/* The 'Slot' is where your page content will appear */}
      <View style={styles.main}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
  },
  main: {
    flex: 1,
  },
});