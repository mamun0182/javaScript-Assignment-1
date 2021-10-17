function isPrime(n) {
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return "This number is not a Prime Number.";
    }
  }
  return "This number is prime number.";
}
var result = isPrime(139);
console.log(result);
