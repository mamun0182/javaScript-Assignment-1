var business = 350;
var minister = 650;
var sochib = 550;

//Find out which one is the biggest by using condition.

/*
if (business > minister) {
    if (business > sochib) {
      console.log("Business is the biggest.");
    } else {
      console.log("Sochib is the biggest.");
    }
  } else {
    if (minister > sochib) {
      console.log("Minister is the biggest.");
    } else {
      console.log("Sochib is the biggest.");
    }
  }
  */

//Find out which one is the biggest by using Math.max.

var max = Math.max(business, minister, sochib);
console.log(max);
