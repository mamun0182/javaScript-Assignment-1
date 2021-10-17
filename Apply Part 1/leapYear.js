//using if else condition.

/**const year = 3998;
const reminder = year % 4;
if(reminder == 0){
    console.loh('Your year is a leapYear.')
}
else{
    console.log('Your year is not a leap year.')
} */

//Using function.

function leapYear(year) {
  const reminder = (year % 4, year % 400);
  if (reminder == 0) {
    return true;
  } else {
    return false;
  }
}
const checkLeapYear = leapYear(2000);
console.log(checkLeapYear);
