// Generated from: tests\features\api\sf_eapi_GET_healthcheck.feature
import { test } from "playwright-bdd";

test.describe('Validate SF EAPI Health Check Endpoint', () => {

  test('Successful response for Health check endpoint', async ({ Given, When, Then, request }) => { 
    await Given('User have access to SF_EAPI'); 
    await When('User send GET request to SF_EAPI "https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io" endpoint "/health"', null, { request }); 
    await Then('SF_EAPI should return a 400 OK response'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\api\\sf_eapi_GET_healthcheck.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User have access to SF_EAPI","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User send GET request to SF_EAPI \"https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io\" endpoint \"/health\"","stepMatchArguments":[{"group":{"start":33,"value":"\"https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io\"","children":[{"start":34,"value":"https://hamptons-sf-eapi-sit.uk-e1.cloudhub.io","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":91,"value":"\"/health\"","children":[{"start":92,"value":"/health","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then SF_EAPI should return a 400 OK response","stepMatchArguments":[{"group":{"start":24,"value":"400","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end