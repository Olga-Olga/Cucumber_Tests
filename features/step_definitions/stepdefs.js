const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function isItFriday(today) {
  //   if (today === "Friday") {
  //     return "TGIF";
  //   }
  //   //skip this step
  //   else {
  //     return "Nope";
  //     }

  return today === "Friday" ? "TGIF" : "Nope";
}

Given("today is the first summer month", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Yes, it's the first summer month");
  //   return "pending";
});

// Given("today is Sunday", function () {
//   this.today = "Sunday"; // Обращение к общему объекту, предоставляемому Cucumber
//   //   return "pending";
// });

// Given("today is Friday", function () {
//   this.today = "Friday"; // Обращение к общему объекту, предоставляемому Cucumber
//   //   return "pending";
// });

Given("today is {string}", function (givenDay) {
  this.today = givenDay; // Обращение к общему объекту, предоставляемому Cucumber
  //   return "pending";
});

When("I ask whether it's Friday now", function () {
  this.actualAnswer = isItFriday(this.today);
  //   return "pending";
});

Then("I should told {string}", function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
  //   return "pending";
});

Then("I get some rest", function () {
  // Write code here that turns the phrase above into concrete actions
  //   return "pending";
  console.log("I will have a rest clg");
});
