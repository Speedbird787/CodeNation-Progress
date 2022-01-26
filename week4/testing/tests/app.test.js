// const app = require ('../app.js');


// test("should equal 15 when passed 10 and 5",()=>{
//     expect(app.addFunc(10,5)).toBe(15);
// })

//example

// const myArray = require ('../myArray')

// test('should contain Stuart', () => {
//     expect(app.myArray).toContain('Stuart')
// })

// test ('string to describe test',() => {
//     expect('your function here').toEqual(some value);
// });


// test('Should equal 15 when passed 10 and 5', () => {
//     expect(app.addFunc(10,5)).toEqual(9);
// })

// Challenge: Create a function that creates an object with 2 properties, test to makes sure that the objects properties are equal to your test function

// it('Should have the properties that are inputted', () => {
//     app.makeObject('one','two')
//     expect(testObject).toHaveProperty('propertyOne','one');
//     expect(testObject).toHaveProperty('propertyTwo','two');
// });

// Challenge: Make sure what is returned is not null

// let itsNull = null;
// let itsNotNull = '';

// it('Should not return null', () => {
//     expect(itsNotNull).not.toBeNull();
// })

// Challenge: A value that is truthy

// coinFlipper = () => {
//     let coin = Math.floor(Math.random() * 2) + 1;
//     if (coin = 1) {return true} else {return false}
// };

// it('Should be truthy', () => {
//     let result = coinFlipper();
//     expect(result).toBeTruthy();
// });

// Challenge: A value that is falsy

// it('Should be falsy', () => {
//     let result = coinFlipper();
//     expect(result).toBeFalsy();
// })
