// libraries
import axios from "axios";

// constants
import { API_BASE_URL, API_TIME_OUT } from "../enviroments";
import { notfiFail } from "../lib/helper/toast";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIME_OUT,
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
    if (error.hasOwnProperty("message") || error.hasOwnProperty("response")) {
      notfiFail(error.response?.data?.error || error.message);
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
