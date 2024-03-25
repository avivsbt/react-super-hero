import axios, { AxiosInstance } from "axios";
import { API, API_KEY } from "shared/config";

/* create a axios instance*/
export const api: AxiosInstance = axios.create({
  baseURL: `${API}/api.php/${API_KEY}`,
  headers:{}
})

/* Request interceptor*/
api.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
);

/* Response interceptor*/
api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)