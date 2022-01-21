// wednesday activities 15/12/2021

// let coffeeOrder = [
//     "alex - cortardo",
//     "ben - cortardo",
//     "charlie - whatever is new",
//     ];
// console.log (coffeeOrder[2]);


// let coffeeOrder = [
//     "alex - cortardo",
//     "ben - cortardo",
//     "charlie - whatever is new",
//     ];
//     coffeeOrder[1]= 'ann - vanilla latte'
//     console.log (coffeeOrder);

//     console.log(coffeeOrder.length)

// let coffeeOrder = [
//     "alex - cortardo",
//     "ben - cortardo",
//     "charlie - whatever's new"
// ]
// coffeeOrder.push ("adam - flat white")
// console.log (coffeeOrder)

// coffeeOrder.pop()

// wednesday activity 1 and 2 15/12/2021

// let favSongs = [
//     "Pendulum - watercolour",
//     "Ed sheeran - bad habits",
//     "weeknd - save your tears"
// ]
// console.log (favSongs);

// stretch activity 

// let favSongs = [
//     "Pendulum - watercolour",
//     "Ed sheeran - bad habits",
//     "weeknd - save your tears"
// ]
// favSongs.push ("adele - hello","justin beieber - ghost");

// console.log (favSongs);

// favSongs.pop();

// console.log(FavSongs);

// favSongs.unshift("pendulum - watercolour");
// favSongs.unshift("Ed sheeran - bad habits");

// console.log(favSongs); 

// let pos = favSongs.indexOf('Ed sheeran - bad habits');

// console.log(pos); 

//splice() method adds to the array cant remove from it too

// let fruits = ["Banana", "Pineapple", "strawberry", "Passionfruit"];

// fruits.splice(2, 0, "Apple", "Orange");
// console.log (fruits)


// loops activities 

// let favouriteDrinks = ["coke", "water", "strawberry juice"];

// console.log(favouriteDrinks[0]);
// console.log(favouriteDrinks[1]);
// console.log(favouriteDrinks[2]);

// let favouriteDrinks = ["coke", "water", "strawberry juice","redbull"];

// for (let i = 0; i < favouriteDrinks.length; i++)
// // {console.log(favouriteDrinks[i]);}

// let multiplesTwo = [];
// for (let i = 0 ; i <= 20; i++){
//     if (i % 2 == 0){multiplesTwo.push(i);
//     }
// } 
// console.log(`numbers divisible by 2 between 0 and 20 are: ${multiplesTwo} .`)


// // // added a = after , on let i= 0 so that 20 can be included.

// let age = 15;

// while (age < 18)
// {console.log ("you're a child!")age++ 
// }
// console.log ("you're an adult!"); 


// let cards = ["diamond", "spade", "heart", "club"];
// let currentCard = "club";

// while (currentCard != "spade") {
//     console.log (currentCard);
//     currentCard = cards [Math.floor(Math.random()*4)];
// }
// console.log (currentCard);

// activity 1


// let favMovies = [
//     "Never back down",
//     "Nightmare on Elm street",
//     "Bad boys",
//     "American Pie",
//     "Robocop"
// ];
// favMovies.push("Cheaper by the dozen");
// favMovies.push("Deep blue sea");

// for(let i = 0; i < favMovies.length; i++){
//     console.log(favMovies[i])
// }

// activity 2
// generating rand number from 1-50

// const rndInt = Math.floor(Math.random() * 50) + 1
//     console.log(rndInt)

// activity 3
// 9-0

// for(let i=9;i>=0;i--)
// {
//   console.log(i);  
// }

// activity 4 

// let favMovies = [
//     "Never back down",
//     "Nightmare on Elm street",
//     "ghostbusters",
//     "American Pie"];
// for(let i = 0; i < favMovies.length; i++){
//     console.log(films[i])
// } if (favmMovies[2] === "Ghostbusters") {
// console.log("Yay it's Ghostbusters!");    
// } else {
//     console.log("Boo! We want Ghostbusters");
// }

// activity 5

// let num = Math.floor(Math.random() * 30)
// for (let i = 0; i < 6; i++){
//   console.log(num)
//   if (num % 7 == 0){
//     console.log(` ----- ${num} is divisble by 7!`)
//   }
//   num = Math.floor(Math.random() * 30)
// }

// actvity 6

// const moeFollowers = ["Susan", "Haris", "Dale", "Chip"]

// const amyFollowers = ["Rob", "paddie", "Ann", "Haris"]

// for(let i = 0; i < moeFollowers.length; i++){
//     for(let n = 0; n < amyFollowers.length; n++){
//         if(moeFollowers[i] === amyFollowers[n]){
//             console.log( "These are your Matching followers: " + amyFollowers[n]);
//         }
//     }
// };

// activity 7 self-researched online do...while loop

// let result = '';
// let i = 0;
// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);
// console.log(result);