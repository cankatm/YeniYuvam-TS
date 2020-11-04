import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from '@helpers/navigationStructure';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
