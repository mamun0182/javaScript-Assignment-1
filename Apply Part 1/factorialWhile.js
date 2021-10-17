/**Find out Factorial by using while loop. */

// var i = 1;
// var factorial = 1;
// while(i <= 5){
//     factorial = factorial * i;
//     i++;
// }
// console.log(factorial);

/**Find out Factorial by using Function. */

function fact(n) {
  var i = 1;
  var fact = 1;
  while (i <= n) {
    fact = fact * i;
    i++;
  }
  return fact;
}
var result = fact(5);
console.log(result);
