//Normal Calculation.

var inch = 156;
var feet = inch / 12;
console.log(feet);

//Using function to get output more than one time.

function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}
var man = inchToFeet(156);
console.log(man);
var woman = inchToFeet(120);
console.log(woman);
