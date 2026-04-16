// src/api/userService.js
import { ApiClient } from './apiClient.js';
import { getAuthHeaders } from './authService.js';

export class UserService {
  constructor(request, baseUrl) {
    this.client = new ApiClient(request, baseUrl, getAuthHeaders());
  }

  async getUsers(endpoint) {
    return await this.client.get(endpoint);
  }
}