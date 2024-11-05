import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8088/api/v1",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  },
});

//Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    document.body.classList.add("loading-indicator");
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//Add a response interceptor
axiosInstance.interceptors.response.use(
  (config) => {
    document.body.classList.remove("loading-indicator");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
