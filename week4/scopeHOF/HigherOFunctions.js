// challenge 1

// function greeting() {
//     console.log("Hello Code Nation");
// }

// greeting();

// let greeting5 = (fn,number) => {
//     for (i = 0; i < (number); i++)
//     fn()
// }

// greeting5 (greeting,4)

// challenge 2

let numberAdder = (num1,num2) => {
    return (num1 + num2)
};

let numberSummer = (num1,num2,times,fn) => {
    let numberTotal = 0
    for (i = 0; i <(times); i++) {
        numberTotal = (fn(num1,num2) + numberTotal) }
    console.log(numberTotal)
};

numberSummer(6,2,5,numberAdder)

// challenge 3
let array = [1, 2, 3, 4, 5];

let modifiedArray = array.map(function(element){
    return element *3;
});

const multiply = (a,b) => {
    return a*b
}

const add = (a,b) => {
    return a+b
}

const divide =(a,b) => {
    return a/b
}

const subtract =(a,b) => {
    return a-b
}

const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1,num2)
    }
}


console.log(doMath(3)(9,add));