// Generated from: tests\features\ui\multiplelogins.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User navigate to the login page "https://practicetestautomation.com/practice-test-login"'); 
  });
  
  test('Successful login with DataTable', async ({ When, Then }) => { 
    await When('User login with the following details:', {"dataTable":{"rows":[{"cells":[{"value":"username"},{"value":"password"}]},{"cells":[{"value":"testing"},{"value":"test123"}]},{"cells":[{"value":"student"},{"value":"test123"}]},{"cells":[{"value":"student"},{"value":"Password123"}]}]}}); 
    await Then('User should see the corresponding messages:', {"dataTable":{"rows":[{"cells":[{"value":"message"}]},{"cells":[{"value":"Your username is invalid!"}]},{"cells":[{"value":"Your password is invalid!"}]},{"cells":[{"value":"Logged In Successfully"}]}]}}); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\ui\\multiplelogins.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigate to the login page \"https://practicetestautomation.com/practice-test-login\"","isBg":true,"stepMatchArguments":[{"group":{"start":32,"value":"\"https://practicetestautomation.com/practice-test-login\"","children":[{"start":33,"value":"https://practicetestautomation.com/practice-test-login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User login with the following details:","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see the corresponding messages:","stepMatchArguments":[]}]},
]; // bdd-data-end