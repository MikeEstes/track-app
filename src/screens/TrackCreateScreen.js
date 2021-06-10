// Import Dependencies
// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
//import { Text } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

// Create component
const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView>
      <Text style={styles.header}>Create a Track</Text>
      <Map />
      {err ? (
        <Text style={styles.err}>Please enable location services</Text>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name='plus' size={20} />,
};

// Create Stylesheet
const styles = StyleSheet.create({
  err: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  header: {
    fontSize: 22,
    marginLeft: 10,
    marginTop: 10,
  },
});

// Export Component
export default withNavigationFocus(TrackCreateScreen);
