// Generated from: tests\features\api\sf_homesearch_GET_addresses.feature
import { test } from "playwright-bdd";

test.describe('Validate Homesearch Addresses Endpoint', () => {

  test('Successful response for Addresses endpoint', async ({ Given, When, Then, request }) => { 
    await Given('User have access to Homesearch API'); 
    await When('User send GET request to Homesearch API "https://hamptons-homesearch-sapi-sit.uk-e1.cloudhub.io:443" endpoint "/api/addresses?postcode=W2%201DG"', null, { request }); 
    await Then('Homesearch API should return a 200 OK response'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\api\\sf_homesearch_GET_addresses.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User have access to Homesearch API","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User send GET request to Homesearch API \"https://hamptons-homesearch-sapi-sit.uk-e1.cloudhub.io:443\" endpoint \"/api/addresses?postcode=W2%201DG\"","stepMatchArguments":[{"group":{"start":40,"value":"\"https://hamptons-homesearch-sapi-sit.uk-e1.cloudhub.io:443\"","children":[{"start":41,"value":"https://hamptons-homesearch-sapi-sit.uk-e1.cloudhub.io:443","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":110,"value":"\"/api/addresses?postcode=W2%201DG\"","children":[{"start":111,"value":"/api/addresses?postcode=W2%201DG","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Homesearch API should return a 200 OK response","stepMatchArguments":[{"group":{"start":31,"value":"200","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end