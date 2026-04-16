// src/api/apiClient.js
export class ApiClient {
  constructor(request, baseUrl, headers = {}) {
    this.request = request;
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async get(endpoint) {
    return await this.request.get(`${this.baseUrl}${endpoint}`, {
      headers: this.headers,
    });
  }

  async post(endpoint, data) {
    return await this.request.post(`${this.baseUrl}${endpoint}`, {
      data,
      headers: this.headers,
    });
  }
}