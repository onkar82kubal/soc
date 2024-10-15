import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8088/api/v1', // Replace with your API base URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
}); // Create the axios instance

// Add a request interceptor
axiosInstance.interceptors.request.use(
 (config) => {
    // Do something before the request is sent
    // For example, add an authentication token to the headers
    const token = localStorage.getItem('ACCESS_TOKEN'); // taking auth token from local Storage
     if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default axiosInstance