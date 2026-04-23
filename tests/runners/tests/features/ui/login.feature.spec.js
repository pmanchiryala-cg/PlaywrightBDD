// Generated from: tests\features\ui\login.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to the login page "https://practicetestautomation.com/practice-test-login"'); 
  });
  
  test('Successful login with valid credentials', { tag: ['@smoke'] }, async ({ When, Then }) => { 
    await When('I login with username "student" and password "Password123"'); 
    await Then('I should see a success message "Logged In Successfully"'); 
  });

  test('Unsuccessful login with invalid username', { tag: ['@regression', '@smoke'] }, async ({ When, Then }) => { 
    await When('I login with username "testing" and password "test123"'); 
    await Then('I should see an error message "Your username is invalid!"'); 
  });

  test('Unsuccessful login with invalid password', { tag: ['@regression'] }, async ({ When, Then }) => { 
    await When('I login with username "student" and password "test123"'); 
    await Then('I should see an error message "Your password is invalid!"'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\ui\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page \"https://practicetestautomation.com/practice-test-login\"","isBg":true,"stepMatchArguments":[{"group":{"start":29,"value":"\"https://practicetestautomation.com/practice-test-login\"","children":[{"start":30,"value":"https://practicetestautomation.com/practice-test-login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I login with username \"student\" and password \"Password123\"","stepMatchArguments":[{"group":{"start":22,"value":"\"student\"","children":[{"start":23,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"Password123\"","children":[{"start":46,"value":"Password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see a success message \"Logged In Successfully\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Logged In Successfully\"","children":[{"start":32,"value":"Logged In Successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":["@regression","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page \"https://practicetestautomation.com/practice-test-login\"","isBg":true,"stepMatchArguments":[{"group":{"start":29,"value":"\"https://practicetestautomation.com/practice-test-login\"","children":[{"start":30,"value":"https://practicetestautomation.com/practice-test-login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I login with username \"testing\" and password \"test123\"","stepMatchArguments":[{"group":{"start":22,"value":"\"testing\"","children":[{"start":23,"value":"testing","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"test123\"","children":[{"start":46,"value":"test123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Your username is invalid!\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your username is invalid!\"","children":[{"start":31,"value":"Your username is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page \"https://practicetestautomation.com/practice-test-login\"","isBg":true,"stepMatchArguments":[{"group":{"start":29,"value":"\"https://practicetestautomation.com/practice-test-login\"","children":[{"start":30,"value":"https://practicetestautomation.com/practice-test-login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I login with username \"student\" and password \"test123\"","stepMatchArguments":[{"group":{"start":22,"value":"\"student\"","children":[{"start":23,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"test123\"","children":[{"start":46,"value":"test123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Your password is invalid!\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your password is invalid!\"","children":[{"start":31,"value":"Your password is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end