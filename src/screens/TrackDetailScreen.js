// Import Dependencies
import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

// Create component
const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={styles.header}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}>
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

TrackDetailScreen.navigationOptions = {
  title: 'Tracks',
};

// Create Stylesheet
const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  header: {
    fontSize: 22,
    marginLeft: 10,
    marginTop: 10,
  },
});

// Export Component
export default TrackDetailScreen;
