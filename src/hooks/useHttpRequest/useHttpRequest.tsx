import axios from 'axios';
import { HttpRequest } from './types';

const useHttpRequest = () => {
  const getHeaders = () => {
    return {
      'Content-Type': 'application/json',
    };
  };

  const get = <R,>(url: string, params?: { [key: string]: string }[]) => {
    return axios.get<R>(url, {
      params,
      headers: getHeaders(),
    });
  };

  const post = <P, R>(url: string, payload?: P) => {
    return axios.post<R>(url, payload, { headers: getHeaders() });
  };

  return <P, R>(request: HttpRequest<P> | string) => {
    if (typeof request === 'string') {
      return get<R>(request);
    }

    switch (request.method) {
      case 'GET':
        return get<R>(request.path, request.params);
      case 'POST':
        return post<P, R>(request.path, request.payload);
      default:
        return get<R>(request.path, request.params);
    }
  };
};

export default useHttpRequest;
