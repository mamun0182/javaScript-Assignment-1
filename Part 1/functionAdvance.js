function doubleIt(num){
    var result = num * 2;
    console.log(result);
}
doubleIt(5);
doubleIt(10);

function doubleIt(num){
    var result = num * 2;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(10);
var total = first + second;
console.log(total);

function add(num1, num2){
    var result = num1 + num2;
    return result;
}
var sum = add(15, 20);
console.log(sum);
//how to comment one line.
/**How to comment multiple line. */