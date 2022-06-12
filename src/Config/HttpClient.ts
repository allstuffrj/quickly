import axios, { AxiosInstance } from 'axios';
const apiClient: AxiosInstance = axios.create({
  baseURL: `${process.env.VITE_API_BASE_URL}/api`,
  headers: {
    'Content-type': 'application/json'
  }
});

export default apiClient;
