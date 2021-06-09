// Import Dependencies
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';

// Create component
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder='Enter Name'
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title='Stop' onPress={stopRecording} />
        ) : (
          <Button title='Start Recording' onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({});

// Export Component
export default TrackForm;
