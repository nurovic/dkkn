import axios, { AxiosHeaders, AxiosInstance, InternalAxiosRequestConfig } from "axios";

const baseURL: string = "http://localhost:3000/api";

const getTokenFromStorage = (): string | null => {
  const token = localStorage.getItem("token");
  return token;
};

const service: AxiosInstance = axios.create({
  baseURL,
});

service.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = getTokenFromStorage();
    if (token) {
      config.headers = AxiosHeaders.from({
        ...config.headers,
        Authorization: `Bearer ${token}`,
      });
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default service;
