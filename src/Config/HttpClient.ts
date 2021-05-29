import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://192.168.11.35:3000/api",
  headers: {
    "Content-type": "application/json",
  }
});

export default apiClient;
