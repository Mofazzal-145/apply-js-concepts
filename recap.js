// variable
var time = '8:40pm'
var penPrice = 200;
var weatherIsGood = false;

// Array

var partners = ['mofu', 'shakil', 'hridoy', 'mohitul','shakib'];
var elementCount = partners.length;
var mofuIndex = partners.indexOf('mofu');
partners.push('hasan');
partners.pop();

// conditionals

if(bookPrice < 120) {
    console.log('I will buy this book');
}
else{
    console.log('I will not buy this book');
}

// loop

var i = 0;
while(i < 17){
    i++;
}

for(var i = 0; i < 20; i++){
    console.log('mofazzal');
}


// function
function isMoonUp(time) {
    if(time >= 19 && time <=5){
        return true;
    }
    return false;
}

var moonStatus = isMoonUp(21);

// let const 

// value of variable could change
let price = 250;
price = 33;
price = 50;

// value of the variable could not change
const myName = 'md.mofazzal hossain';
console.log(myName);
myName = 23;

