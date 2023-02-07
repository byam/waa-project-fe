import * as axios from 'axios';
import Cookies from 'universal-cookie';
import { notifyError } from '../helpers/notification';

export const API_BASE_URL = 'http://localhost:8080/api/v1';

const cookies = new Cookies();

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = cookies.get('access_token');

    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// const { status, data, statusText } = response;

httpClient.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    // on error

    const { status } = response ?? {};

    if (parseInt(status, 10) === 401) {
      cookies.remove('access_token');
    }

    if (parseInt(status, 10) === 500) {
      notifyError('Server side error 500');
    }

    return Promise.reject(response);
  }
);

export const httpGet = (props) => httpClient.request({ method: 'get', ...props });

export const httpPost = (props) => httpClient.request({ method: 'post', ...props });

export const httpPut = (props) => httpClient.request({ method: 'post', ...props });

export const httpDelete = (props) => httpClient.request({ method: 'delete', ...props });
