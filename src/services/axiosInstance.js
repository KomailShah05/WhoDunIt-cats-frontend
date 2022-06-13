// libraries
import axios from "axios";

// constants
import { API_BASE_URL } from "../enviroments";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: {
    Accept: "*/*",
  },
});

// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
