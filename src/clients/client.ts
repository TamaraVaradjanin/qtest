import { ApiResponse } from '../types/client.types';

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

async function request<T>(url: string, method: string): Promise<ApiResponse<T>> {
  const response = await fetch(url, {
    method: method
  });

  const resBody = await response.json();
  if (response.ok) {
    return resBody;
  }
  throw new Error(JSON.stringify(resBody));
}

const Client = {
  get: <T>(url: string) => request<T>(url, HTTP_METHODS.GET)
};

export default Client;
