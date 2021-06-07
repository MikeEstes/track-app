// Import Dependencies
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Create component
const AccountScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.header}>Account Screen</Text>
      <Button title='Log Out' onPress={() => navigation.navigate('Signin')} />
    </>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  header: {
    fontSize: 48,
  },
});

// Export Component
export default AccountScreen;
