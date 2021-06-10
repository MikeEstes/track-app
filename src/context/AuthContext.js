import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { token: action.payload, errormessage: '' };
    case 'signout':
      return { token: null, errormessage: '' };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      // Store JWT
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'signin',
        payload: response.data.token,
      });
      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });
      // Store JWT
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'signin',
        payload: response.data.token,
      });
      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
    }
  };

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
};

const signout = (dispatch) => async () => {
  // Clear JWT
  await AsyncStorage.removeItem('token');
  dispatch({
    type: 'signout',
  });
  navigate('loginFlow');
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, tryLocalSignin, signout, clearErrorMessage },
  { token: null, errorMessage: '' }
);
