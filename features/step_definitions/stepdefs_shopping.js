const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

let shoppingCart = [];

Given(
  "the following products are added to the shopping cart:",
  function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    // return "pending";
    shoppingCart = dataTable.hashes();
  }
);

When("I calculate the total cost", function () {
  // Write code here that turns the phrase above into concrete actions
  // return "pending";
  let totalCost = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    // const products = shoppingCart[i];
    totalCost += parseInt(shoppingCart[i].Price);
  }
  console.log(totalCost);
  this.totalCost = totalCost; //this.totalCost - загальний ключ тотал прайс який надає кукумбер
});

Then("the total cost should be {int}", function (expectedTotalCost) {
  // Then('the total cost should be {float}', function (float) {
  // Write code here that turns the phrase above into concrete actions
  // return "pending";
  const actualTotalCost = this.totalCost;
  console.log("actualTotalCost", actualTotalCost);
  console.log("expectedTotalCost", expectedTotalCost);
  assert.strictEqual(actualTotalCost, expectedTotalCost);
});
