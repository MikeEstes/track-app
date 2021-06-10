// Import Dependencies
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

// Create component
// TODO: Style Text using React Native Elements
const NavLink = ({ navigation, linkText, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
      <Spacer>
        <Text style={styles.link}>{linkText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

// Export Component
export default withNavigation(NavLink);
