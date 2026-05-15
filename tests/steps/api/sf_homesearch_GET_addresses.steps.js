import { test } from 'playwright-bdd';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('User have access to Homesearch API', async function () {
  this.clientId = process.env.CLIENT_ID;
  this.clientSecret = process.env.CLIENT_SECRET;
});

When('User send GET request to Homesearch API {string} endpoint {string}',
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

Then('Homesearch API should return a {int} OK response',
  async function ({}, statusCode) {
    expect(this.response.status()).toBe(statusCode);
    const body = await this.response.json();

    expect(body[0].id).toEqual(47117250);
    console.log(body);
  }
);