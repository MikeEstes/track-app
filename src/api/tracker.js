import axios from 'axios';

// ngrok http 3000
// Need to update URL after 2 hours
export default axios.create({
  baseURL: 'http://a4cf7692839f.ngrok.io',
});
