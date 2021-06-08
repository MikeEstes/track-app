// Import Dependencies
// import '../_mockLocation';
import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

// Create component
const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h2>Create a Track</Text>
        <Map />
        {err ? (
          <Text style={styles.errorMessage}>
            Please enable location services
          </Text>
        ) : null}
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
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
});

// Export Component
export default TrackCreateScreen;
