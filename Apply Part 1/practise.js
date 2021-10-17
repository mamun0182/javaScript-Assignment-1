//inchToFeet Conversion.

function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}
var firstValue = inchToFeet(120);
console.log(firstValue);
var secondValue = inchToFeet(240);
console.log(secondValue);

//LeapYear Find out.

function leapYear(year) {
  const reminder = year % 4 & year % 400;
  if (reminder == 0) {
    return "Your year is a leap year.";
  } else {
    return "Your year is not a leap year.";
  }
}
let year = leapYear(2000);
console.log(year);

//To make a string uppercase and lowercase.

var promise = "Since I am hard working I will be a successful person.";
console.log(promise.toLocaleUpperCase());
var promise2 = "I AM GOING NTO LEAVE. I WILL NEVER COME BACK.";
console.log(promise2.toLowerCase());

//To make number absolute.
var number = -5;
var absulateNumber = Math.abs(number);
console.log(absulateNumber);

//To make number Round, Round up, Round down.

var roll = 6.6;
var round = Math.round(roll);
//var round = Math.ceil(roll);
//var round = Math.floor(roll);
console.log(round);

//Lottery

var number3 = Math.random() * 100;
var final = Math.round(number3);
console.log(final);

//object

var student = { id: 1, phone: 2, name: "Mamun" };
//console.log(student);
console.log(student.phone);
student.phone = 100;
console.log(student);

//Factorial
/**var facTorial = 1;
for (i = 1; i <= n; i++) {
  facTorial = facTorial * i;
}
console.log(facTorial); */

//Factorial By using while loop.

/**var i = 1;
var factorial = 1;
while (i <= 5) {
  factorial = factorial * i;
  console.log(factorial);
  i++;
} */

//Factorial By using while loop.

/**function fact(n) {
  var factorial = 1;
  for (i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
var result1 = fact(5);
console.log(result1);**/

//Factorial By using a recursive function.

/**function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
var result2 = factorial(5);
console.log(result2);**/

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
var result2 = factorial(10);
console.log(result2);

//Fibonacci Sequence.

var fibo = [0, 1];
for (var i = 2; i <= 5; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

//Fibonacci in Recursive way.

function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
var result3 = fibonacci(5);
console.log(result3);
