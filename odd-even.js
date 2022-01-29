
// first 
// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0)


// ==for even number
const number = 145;
function isEven(number) {
    if(number % 2 ==0){
        return true;
    }
    return false;
}

const myNumber = 42345;
const isMyNumberEven = isEven(myNumber);
// console.log('is my number even',isMyNumberEven);

const shakilnumber = 1892;
const fadfj = isEven(shakilnumber);
// console.log("is shakil number even", fadfj);

// ===for odd number

function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}

const shakibNum = 345;
const shakib = isOdd(shakibNum);
console.log('is odd num', shakib);
