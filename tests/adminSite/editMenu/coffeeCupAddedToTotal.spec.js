import { test } from '../../_fixtures/fixtures';
import * as allure from "allure-js-commons";

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.
  await allure.parentSuite(`Admin site`);
  await allure.suite('Add/remove coffee');
  await allure.subSuite('Add coffee');
  await allure.severity(`critical`);

  await allure.epic(`'Admin-panel' Admin panel`);
  await allure.feature('Change menu');
  await allure.story("User story title");
});
