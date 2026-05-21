	
import { test } from 'playwright-bdd';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

const epcrequest = {
  id: 'a1iAd0000048L9uIAE',
  address: {
    subBuildingName: 'Flat 305',
    buildingName: 'Courtenay House',
    buildingNumber: '9',
    street: 'New Park Road',
    dependentLocality: 'Brixton Hill',
    city: 'LONDON',
    state: 'London',
    postalCode: 'SW2 4DN',
    country: 'GB'
  }
};

Given('User have access to SF_EAPI1 API', async function () {
  this.clientId = process.env.CLIENT_ID;
  this.clientSecret = process.env.CLIENT_SECRET;
});

When('User send POST request to SF_EAPI1 {string} endpoint {string}',
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

Then('SF_EAPI1 should return a {int} Created response',
  async function ({}, statusCode) {
    expect(this.response.status()).toBe(statusCode);
    const body = await this.response.json();
    console.log(body);
  }
);
