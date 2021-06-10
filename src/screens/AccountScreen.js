// Import Dependencies
import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

// Create component
const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text style={styles.header}>Your Account</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    marginLeft: 10,
    marginTop: 10,
  },
});

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name='user-circle-o' size={20} />,
};

// Export Component
export default AccountScreen;
