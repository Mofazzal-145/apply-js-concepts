// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while(i <= number){
//         factorial = factorial *i;
//         i++;
//     }
//     return factorial;
// } 

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// anothre its reverse way
// function getFactorial(number){
//     let factorial = 1;
//     let i = number;
//     while(i >=1){
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }

// var secondFactorial = getFactorial(7);
// console.log(secondFactorial);


// for loop reversre

function getFactorial2(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

var thirdFactorial = getFactorial2(5);
console.log(thirdFactorial);















