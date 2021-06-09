// Import Dependencies
import '../_mockLocation';
import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/TrackForm';

// Create component
const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h2>Create a Track</Text>
        <Map />
        {err ? (
          <Text style={styles.err}>Please enable location services</Text>
        ) : null}
      </View>
      <TrackForm />
    </SafeAreaView>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
  err: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
});

// Export Component
export default withNavigationFocus(TrackCreateScreen);
