// Import Dependencies
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Create component
const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.header}>Track List Screen</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
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
export default TrackListScreen;
