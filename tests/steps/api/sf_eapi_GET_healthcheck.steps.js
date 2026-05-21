import { test } from 'playwright-bdd';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('User have access to SF_EAPI', async function () {
  // handled in hooks.js Before hook
    /*this.clientId = process.env.CLIENT_ID;
  this.clientSecret = process.env.CLIENT_SECRET; */
}); 

When('User send GET request to SF_EAPI {string} endpoint {string}',
  async function ({ request }, baseUrl, endpoint) {
    const fullUrl = `${baseUrl}${endpoint}`;

    this.response = await request.get(fullUrl, {
      headers: {
        'client_id': this.clientId,
        'client_secret': this.clientSecret,
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });
  }
);

Then('SF_EAPI should return a {int} OK response',
  async function ({}, statusCode) {
    expect(this.response.status()).toBe(statusCode);
    const body = await this.response.json();
    console.log("SF_EAPI Response body:", body);
  }
);