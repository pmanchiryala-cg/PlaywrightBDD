// Generated from: tests\features\ui\loginscenariooutline.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to the login homepage "https://practicetestautomation.com/practice-test-login"', null, { page }); 
  });
  
  test.describe('Login attempts with different credentials', () => {

    test('Example #1', { tag: ['@smoke', '@regression'] }, async ({ When, Then, page }) => { 
      await When('I login with uname "<username>" and pwd "<password>"', null, { page }); 
      await Then('I should see a "error" message "Your username is invalid!"', null, { page }); 
    });

    test('Example #2', { tag: ['@smoke', '@regression'] }, async ({ When, Then, page }) => { 
      await When('I login with uname "<username>" and pwd "<password>"', null, { page }); 
      await Then('I should see a "error" message "Your password is invalid!"', null, { page }); 
    });

    test('Example #3', { tag: ['@smoke', '@regression'] }, async ({ When, Then, page }) => { 
      await When('I login with uname "<username>" and pwd "<password>"', null, { page }); 
      await Then('I should see a "success" message "Logged In Successfully"', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\ui\\loginscenariooutline.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":13,"tags":["@smoke","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login homepage \"https://practicetestautomation.com/practice-test-login\"","isBg":true,"stepMatchArguments":[{"group":{"start":33,"value":"\"https://practicetestautomation.com/practice-test-login\"","children":[{"start":34,"value":"https://practicetestautomation.com/practice-test-login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I login with uname \"<username>\" and pwd \"<password>\"","stepMatchArguments":[{"group":{"start":19,"value":"\"<username>\"","children":[{"start":20,"value":"<username>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"<password>\"","children":[{"start":41,"value":"<password>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see a \"error\" message \"Your username is invalid!\"","stepMatchArguments":[{"group":{"start":15,"value":"\"error\"","children":[{"start":16,"value":"error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"Your username is invalid!\"","children":[{"start":32,"value":"Your username is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":14,"tags":["@smoke","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login homepage \"https://practicetestautomation.com/practice-test-login\"","isBg":true,"stepMatchArguments":[{"group":{"start":33,"value":"\"https://practicetestautomation.com/practice-test-login\"","children":[{"start":34,"value":"https://practicetestautomation.com/practice-test-login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I login with uname \"<username>\" and pwd \"<password>\"","stepMatchArguments":[{"group":{"start":19,"value":"\"<username>\"","children":[{"start":20,"value":"<username>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"<password>\"","children":[{"start":41,"value":"<password>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see a \"error\" message \"Your password is invalid!\"","stepMatchArguments":[{"group":{"start":15,"value":"\"error\"","children":[{"start":16,"value":"error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"Your password is invalid!\"","children":[{"start":32,"value":"Your password is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":["@smoke","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login homepage \"https://practicetestautomation.com/practice-test-login\"","isBg":true,"stepMatchArguments":[{"group":{"start":33,"value":"\"https://practicetestautomation.com/practice-test-login\"","children":[{"start":34,"value":"https://practicetestautomation.com/practice-test-login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I login with uname \"<username>\" and pwd \"<password>\"","stepMatchArguments":[{"group":{"start":19,"value":"\"<username>\"","children":[{"start":20,"value":"<username>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"<password>\"","children":[{"start":41,"value":"<password>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see a \"success\" message \"Logged In Successfully\"","stepMatchArguments":[{"group":{"start":15,"value":"\"success\"","children":[{"start":16,"value":"success","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"Logged In Successfully\"","children":[{"start":34,"value":"Logged In Successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end