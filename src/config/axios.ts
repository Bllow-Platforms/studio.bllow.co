import axios, { AxiosError } from "axios";

export const AXIOS_CONFIG = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  timeout: 10000,
  timeoutErrorMessage: "Request timeout. Please try again",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

AXIOS_CONFIG.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

AXIOS_CONFIG.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
