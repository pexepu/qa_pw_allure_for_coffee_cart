import { test } from '../../../_fixtures/fixtures';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';
import * as allure from "allure-js-commons";

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {

    await allure.parentSuite(`Customer site`);
    await allure.suite('Menu');
    await allure.subSuite('Update correct cost');
    await allure.severity(`normal`);

    await allure.epic(`'CoffeeCart' Customer site`);
    await allure.feature('Total cost');
    await allure.story(`The ${coffee} cup has correct cost`);

    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
