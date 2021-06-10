import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

// Create Reducer
const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

// Create Action Functions
const fetchTracks = (dispatch) => async () => {
  const response = await trackerApi.get('/tracks');

  dispatch({ type: 'fetch_tracks', payload: response.data });
};

const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

// Export Context
export const { Context, Provider } = createDataContext(
  trackReducer,
  {
    fetchTracks,
    createTrack,
  },
  []
);
