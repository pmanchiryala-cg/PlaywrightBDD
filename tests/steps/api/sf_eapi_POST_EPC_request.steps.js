    
import { test } from 'playwright-bdd';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const { Given, When, Then } = createBdd(test);

const epcrequest = JSON.parse(
  fs.readFileSync(
    path.resolve('test-data/epc_request.json'),
    'utf-8'
  )
);

Given('User have access to SF_EAPI API', async function () {
  
  this.clientId = process.env.CLIENT_ID;
  this.clientSecret = process.env.CLIENT_SECRET;
});

When('User send POST request to SF_EAPI {string} endpoint {string}',
  async function ({ request }, baseUrl, endpoint) {
    const fullUrl = `${baseUrl}${endpoint}`;

    this.response = await request.post(fullUrl, {
      headers: {
        'client_id': this.clientId,
        'client_secret': this.clientSecret,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(epcrequest),
      timeout: 30000,
    });
  }
);

Then('SF_EAPI should return a {int} Created response',
  async function ({}, statusCode) {
    expect(this.response.status()).toBe(statusCode);
    const body = await this.response.json();
    console.log(body);
  }
);
