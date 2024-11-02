import axios from 'axios';

export const storageService = {
  //query,
  get,
  post,
  //put,
  //remove,
};

// Set the base URL for your API requests
const API_URL = 'http://localhost:3000';

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example function to get data from the backend
export async function get(endpoint) {
  try {
    const response = await client.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Example function to post data to the backend
export async function post(endpoint, payload) {
  try {
    const response = await client.post(endpoint, payload);
  
    return response;
  } catch (error) {
    throw error;
  }
}
