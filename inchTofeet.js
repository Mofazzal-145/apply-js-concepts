

// first
// var inches = 132; 
// var feet = inches / 12;
// console.log(feet);

// // second 

// var inches = 144; 
// var feet = inches / 12;
// console.log(feet);

// // third

// var inches = 156; 
// var feet = inches / 12;
// console.log(feet);

// // fourth

// var inches = 168; 
// var feet = inches / 12;
// console.log(feet);

// ==============

function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

// first
var inches = 132; 
var feet = inchToFeet(inches);
console.log('my inches in feet', feet);

// second 

var shakilInches = 144; 
var feet = inchToFeet(shakilInches);
console.log('shakil inches in feet',feet);

// third

var mofuInches = 156; 
var feet = inchToFeet(mofuInches);
console.log('mofu inches in',feet);

// fourth

var shakibInches = 168; 
var feet = inchToFeet(shakibInches);
console.log('shakib inches in',feet);

// =====mile to kilo
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km', marathon);







