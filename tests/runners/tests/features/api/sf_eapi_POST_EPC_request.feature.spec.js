// Generated from: tests\features\api\sf_eapi_POST_EPC_request.feature
import { test } from "playwright-bdd";

test.describe('Validate SF EAPI1 POST EPC Request', () => {

  test('Successful response for EPC request', async ({ Given, When, Then, request }) => { 
    await Given('User have access to SF_EAPI1 API'); 
    await When('User send POST request to SF_EAPI1 "https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io" endpoint "/api/epc-requests"', null, { request }); 
    await Then('SF_EAPI1 should return a 201 Created response'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\api\\sf_eapi_POST_EPC_request.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User have access to SF_EAPI1 API","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User send POST request to SF_EAPI1 \"https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io\" endpoint \"/api/epc-requests\"","stepMatchArguments":[{"group":{"start":35,"value":"\"https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io\"","children":[{"start":36,"value":"https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":93,"value":"\"/api/epc-requests\"","children":[{"start":94,"value":"/api/epc-requests","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then SF_EAPI1 should return a 201 Created response","stepMatchArguments":[{"group":{"start":25,"value":"201","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end