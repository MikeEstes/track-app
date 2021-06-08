// Import Dependencies
import React from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Map from '../components/Map';

// Create component
const TrackCreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h2>Create a Track</Text>
        <Map />
      </View>
    </SafeAreaView>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});

// Export Component
export default TrackCreateScreen;
