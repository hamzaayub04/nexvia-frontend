import { API_BASE_URL } from '../constants';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  getHeaders(token) {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers.Authorization = `Bearer ${token}`;
    return headers;
  }

  async request(endpoint, options = {}) {
    const { method = 'GET', body, token, headers: customHeaders } = options;
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      method,
      headers: this.getHeaders(token),
      ...customHeaders,
    };
    if (body) config.body = JSON.stringify(body);

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Request failed');
    }
    return data;
  }

  get(endpoint, token) {
    return this.request(endpoint, { method: 'GET', token });
  }

  post(endpoint, body, token) {
    return this.request(endpoint, { method: 'POST', body, token });
  }

  put(endpoint, body, token) {
    return this.request(endpoint, { method: 'PUT', body, token });
  }

  delete(endpoint, token) {
    return this.request(endpoint, { method: 'DELETE', token });
  }

  async uploadFile(endpoint, formData, token) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {};
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Upload failed');
    return data;
  }
}

export const api = new ApiService();
export default api;
