// Import Dependencies
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Create component
const TrackDetailScreen = () => {
  return (
    <View>
      <Text style={styles.header}>Track Detail Screen</Text>
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
export default TrackDetailScreen;
