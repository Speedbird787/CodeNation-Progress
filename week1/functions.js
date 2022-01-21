// const pressGrindBeans = () => {
//     console.log ("grinding for 20 seconds")
// }
// pressGrindBeans ();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
// if  (coffeeIsGrinding) {
//     console.log ("stopping the grind");
//     coffeeIsGrinding = false;
// } else {
//     console.log ("grinding is about to begin")
//     coffeeIsGrinding = true;
// }
// }
// pressGrindBeans();


// function greeting(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }
// greeting('carl', 'junior');

// const cashWithdrawal = (amount, accnum) => {
//     console.log (`withdrawing ${amount} from account ${accnum}`);

// }
// cashWithdrawal (300, 504499210);
// cashWithdrawal (30, 50449921);
// cashWithdrawal (200, 50449921);

// const addUp = (num1, num2) => {
//     return num1 = num2;
// }
// addUp (7,3);                     (this parameter has not been told to run so wont appear on console.)
// console.log (addUp (2,5));

// declaring functions

// function square (number) {
//     return number * number;
// };
// square (25);
//output 

// expression - anonymous function

// const square = function (number) {
//     return number * number;
// };

// square (5);
// output 25

// activity 1

// function factorial (n) {
//     if ((n=== 0) || (n===1)) {
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }
// console.log (factorial (33));


// changing above code to arrow syntax below 

// const factorial = (n) => {
//     if ((n=== 0) || (n===1)) {
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }
// console.log (factorial (33));

// activity 2

// let orderCount = 0;
// const getSubTotal = (itemCount) => {
//     return itemCount + 0;
//   };

// const takeOrder = (topping1, topping2) => {
//     console.log (`A pizza with ${topping1} and ${topping2}`);
//     orderCount++;
// }
// takeOrder ("pineapple, chicken");
// takeOrder ("BBQ, chilli");

// console.log(getSubTotal(orderCount));

// activity 3

// let pinNum =7778
// let accBal = 276000;

// const withdraw = (accBal, withdrawAmmount, pinNum) => {
//     if ((accBal >= withdrawAmmount) && (pinNum == 7778)) {
//     console.log(`Pin Correct, requested amount approved. Please collect the amount of £${withdrawAmmount}.`);
// } else {
//     console.log("Transaction Denied your skint!");}

// }

// withdraw(276000, 2200, 7778);


































