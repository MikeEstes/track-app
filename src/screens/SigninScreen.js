// Import Dependencies
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as authContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

// Create component
const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(authContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign In to Your Tracker'
        submitText='Sign In'
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink linkText="Don't have an account? Sign up!" routeName='Signup' />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

// Create Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

// Export Component
export default SigninScreen;
