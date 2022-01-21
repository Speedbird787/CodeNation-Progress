// lecture activity 1

// const person = {
//     name: "moe",
//     age: 28,
// }

// console.log(person.name)



// let offer = "None";
// let time = 1200;

// const cafe = {
//     name: "whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true, 
// drinks: [
//     "cappucino",
//     "latte",
//     "filter coffee",
//     "tea",
//     "hot chocolate"
//  ],
//  breakfastOffer: "free crossitant with coffee",
//  lunchtimeOffer: "free drink with surprisingly priced sandwich",
//  noOffer: "sorry no offers",
// };
// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log (cafe.breakfastOffer);
// } else if (time <1500){
//     offer = cafe.lunchtimeOffer
//     console.log (cafe.lunchtimeOffer)
// };

// group activity 2

// let day = "saturday"
// let alarm = {
// weekdayAlarm : "no alarm needed",
// weekendAlarm : "get up at 7am"
// };
// if (day = "Saturday" || "Sunday"){
//     alarm = weekendAlarm;
//     console.log(alarm.weekendAlarm);

// lecture activity 3

// const favouriteSongList = {
// name : "Moe",
// age: 28,
// favSongs: ["pendulum - watercolour", "weeknd - tears", "twenty one pilots - pretty thing"]
// };
// console.log (favouriteSongList.favSongs)

//  let offer = "None";
// let time = 1200;

//  const cafe = {
//      name: "whitesheep",
//      seatingCapacity: 100,
//      hasSpecialOffers: true, 
//  drinks: [
//      "cappucino",
//      "latte",
//      "filter coffee",
//      "tea",
//      "hot chocolate"
//   ],
//   breakfastOffer: "free crossitant with coffee",
//   lunchtimeOffer: "free drink with surprisingly priced sandwich",
//   noOffer: "sorry no offers",
 
//   openCafe: ()=> {
//       return "come on in";
//   },
//   closeCafe:()=>{
//       return "we are closed now, come back tomorrow!"
//   }
// };
// console.log (cafe.openCafe());
// console.log (cafe.closeCafe());

//ES6 format


// let offer = "None";
// let time = 1200;

//  const cafe = {
//      name: "whitesheep",
//      seatingCapacity: 100,
//      hasSpecialOffers: true, 
//  drinks: [
//      "cappucino",
//      "latte",
//      "filter coffee",
//      "tea",
//      "hot chocolate"
//   ],
//   breakfastOffer: "free crossitant with coffee",
//   lunchtimeOffer: "free drink with surprisingly priced sandwich",
//   noOffer: "sorry no offers",
 
//   openCafe() {
//       return "come on in";
//   },
//   closeCafe() {                                      //no colons or arrow syntaxs needed in new ES6 JS
//       return "we are closed now, come back tomorrow!"
//   }
// };
// console.log (cafe.openCafe());
// console.log (cafe.closeCafe());

//functions within object

// let offer = "None";
// let time = 1200;

//  const cafe = {
//      name: "whitesheep",
//      seatingCapacity: 100,
//      hasSpecialOffers: true, 
//  drinks: [
//      "cappucino",
//      "latte",
//      "filter coffee",
//      "tea",
//      "hot chocolate"
//   ],
//   breakfastOffer: "free crossitant with coffee",
//   lunchtimeOffer: "free drink with surprisingly priced sandwich",
//   noOffer: "sorry no offers",
 
//   openCafe() {
//       if (this.hasSpecialOffers)                        // this. needs to be added for it work
//       return "time for a special offer!";
//   },
//   closeCafe() {                                      
//       return "we are closed now, come back tomorrow!"
//   }
// };
// console.log (cafe.openCafe());
// console.log (cafe.closeCafe());

// activity 1

// let person = new Object();

// person.name = "Moe";
// person.age = 28; 

// const person = {              //say hi function added to person object
//     name: "Moe",
//     age: 28,
//     favSong: "adele - hello",
  
//     sayHi() {
//       return `Hello, my name is ${this.name}.`;
//     },
//   };
  
//   console.log(person.sayHi(), person.age, person.favSong);

// activity 2

// const pet = {
//     name: "milli",
//     typeOfPet: "kitten",
//     age: 1,
//     colour: "grey",
//     eat (){
//         return `${this.name} is eating.`;
//     },
//     drink (){
//         return `${this.name} is drinking.`;
//     }
// }
// console.log(pet.drink());

//activity 3

// const coffeeShop = {

// branch: "manchester",
// drinks: {
//     flatWhite: 1.5,
//     latte: 2.50,
//     redbull: 1.5,
//     capuccino: 3,
//   },

//   food: {
//     pastie: 2,
//     burger: 4.5,
//     sandwich: 2.5,
//   },

//   drinksOrdered(...drinks) {
//     let cost = 0;
//     const drinksStr = drinks.join(' & ');
//     drinks.forEach(drink => (cost += this.drinks[drink]));
//     cost = cost.toString().split('.');
//     cost[1] = cost[1].padEnd(2, '0');
//     cost = cost.join('.');

//     return this.displayOrder(drinksStr, cost);
//   },

//   foodOrdered(...food) {
//     let cost = 0;
//     const foodStr = food.join(' & ');

//     food.forEach(item => (cost += this.food[item]));

//     cost = cost.toString().split('.');
//     cost[1] = cost[1].padEnd(2, '0');
//     cost = cost.join('.');

//     return this.displayOrder(foodStr, cost);
//   },

//   displayOrder(order, cost) {
//     return console.log(
//       `Your order is - ${order}, the total is £${cost}.`
//     );
//   },
// };

// coffeeShop.drinksOrdered('capuccino', 'redbull');
// coffeeShop.foodOrdered('burger', 'pastie');
