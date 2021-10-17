// kilometerToMeter

function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "This value can not be negative.";
  } else {
    return kilometer / 1000;
  }
}
var result = kilometerToMeter(-10000);
console.log(result);

// budgetCalculator

function budgetCalculator(clock) {
  if (clock < 0) {
    return "This value can not be negative.";
  } else {
    return clock * 50;
  }
}
var result1 = budgetCalculator(5);

function budgetCalculator(phone) {
  if (phone < 0) {
    return "This value can not be negative.";
  } else {
    return phone * 100;
  }
}
var result2 = budgetCalculator(2);

function budgetCalculator(laptop) {
  if (laptop < 0) {
    return "This value can not be negative.";
  } else {
    return laptop * 500;
  }
}
var result3 = budgetCalculator(2);

var totalCost = result1 + result2 + result3;
console.log(totalCost);

// hotelCost

function hotelCost(days) {
  var cost = 0;
  if (days < 0) {
    return "This value can not be negative.";
  }
  if (days <= 10) {
    var cost = days * 100;
  } else if (days <= 20) {
    var firstPart = 10 * 100;
    var remaining = days - 10;
    var secondPart = remaining * 80;
    var cost = firstPart + secondPart;
  } else {
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = days - 20;
    var thirdPart = remaining * 50;
    var cost = firstPart + secondPart + thirdPart;
  }
  return cost;
}
var totalCost = hotelCost(-5);
console.log(totalCost);

// megaFriends

function megaFriends(arr) {
  var longest = "";
  arr.map(function (str) {
    if (str.length > longest.length) {
      longest = str;
    }
  });
  return longest;
}
var bigName = megaFriends(["Mamun", "Tanim", "Tammim"]);
console.log(bigName);
