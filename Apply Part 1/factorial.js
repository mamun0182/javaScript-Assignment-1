/**Find out Factorial by using for loop.*/

// var factorial = 1;

// for (var i = 1; i <= 10; i++){
//     factorial = factorial * i;
//     console.log(factorial);
// }

/**Find out Factorial by using Function.*/

function fact(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = fact(10);
console.log(result);