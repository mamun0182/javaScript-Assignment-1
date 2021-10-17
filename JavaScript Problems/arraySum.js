//by using for loop.

var numbers = [45, 81, 63, 98, 56, 35, 23];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  var element = numbers[i];
  var sum = sum + element;
}
console.log("Sum of this Array is:", sum);

//by using function to use more than one time.

function getArraySum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    var sum = sum + element;
  }
  return sum;
}
var numbers = [45, 81, 63, 98, 56, 35, 23];
var result = getArraySum(numbers);
console.log(result);
