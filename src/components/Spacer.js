// Import Dependencies
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Create component
const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

// Create Stylesheet
const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

// Export Component
export default Spacer;
