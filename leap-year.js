function isLeapYear(year){
    if((year % 4 == 0)  && (year % 100 ==0) && (year % 400 ==0) ){
        return true;
    }
    // else if(year % 100 ==0){
    //     return true;
    // }
    // else if (year % 400 ==0){
    //     return true;
    // }
    else {
        return false;
    }
}

const givenYear = 2024;
const isTheYear = isLeapYear(givenYear);
console.log('the leap year', isTheYear);

const secondYear = 2000; //2100
const yearTwo = isLeapYear(secondYear);
console.log('is it leap year',yearTwo);
