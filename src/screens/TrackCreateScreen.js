// Import Dependencies
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Create component
const TrackCreateScreen = () => {
  return (
    <View>
      <Text style={styles.header}>Track Create Screen</Text>
    </View>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  header: {
    fontSize: 48,
  },
});

// Export Component
export default TrackCreateScreen;
