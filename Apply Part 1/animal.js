function animalCalculator(dept) {
  var animal = 0;
  if (dept <= 10) {
    var animal = dept * 50;
  } else if (dept <= 20) {
    var firstPart = 10 * 50;
    var remaining = dept - 10;
    var secondPart = remaining * 100;
    var animal = firstPart + secondPart;
  } else {
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = dept - 20;
    var thirdPart = remaining * 300;
    var animal = firstPart + secondPart + thirdPart;
  }
  return animal;
}
var count = animalCalculator(32);
console.log(count);
