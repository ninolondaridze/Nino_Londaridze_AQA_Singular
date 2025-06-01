const { Given, When, Then, Before, setDefaultTimeout } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');

let baseUrl;
let response;

Before(() => {
  response = undefined;
});

Given('I open the registration page', function () {
  baseUrl = 'https://09215xnnrg.execute-api.us-east-1.amazonaws.com/singular_task';
});

When(
  'I register with username {string}, password {string}, and confirm password {string}',
  async function (username, password, confirmPassword) {
    try {
      response = await axios.post(
        `${baseUrl}/register`,
        {},
        {
          params: {
            username,
            password,
            confirmPassword,
          },
        }
      );
    } catch (err) {
      if (err.response) {
        response = err.response;
      } else {
        throw err;
      }
    }
  }
);

Then('the response status should be {int}', function (expectedStatus) {
  assert.ok(response, 'No response received');
  assert.strictEqual(
    response.data.status,
    expectedStatus,
    `Expected status ${expectedStatus}, got ${response.data.status}`
  );
});