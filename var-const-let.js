// var
    var favoriteFood = 'pizza'
    var numOfSlices = 8
    console.log(favoriteFood)
    console.log(numOfSlices)



// let
    let changeMe = true;
    changeMe = false;
    console.log(changeMe)

    let food;
    console.log(food)
    food = 50; // wrong

    console.log(food) // right



// const
// a const cannot be reassigned like let and var, you'll get a TypeError
    const entree = 'Enchiladas';
    console.log(entree)
    // entree = 'Tacos' // you cant do that, it will give you an error


let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5; // adding 5 to 'levelUp'
powerLevel -= 100; // subtracting 100 to 'powerLevel'
multiplyMe *= 11; // multiplying 11 to 'multiplyMe'
quarterMe /= 4; // dividing 4 to 'quarterMe'

console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++; // add 1 (++)
lostDollar--; // take away 1 (--)

// 23/08/23

var favouriteAnimal = 'leopard';
console.log('My favourite animal: ' + favouriteAnimal)

var myName = 'Hannah';
var myCity = 'London';
// learning `${example}`
console.log(`My name is ${myName}. My favourite city is ${myCity}.`);

var newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);

var newVariable = 1;
console.log(typeof newVariable)



// how to find out Fahrenhuit
// the foreast is 293 degrees in kelvin
const kelvin = 287;
// subtracting 273 from kelvin to find out celsuis
const celsius = kelvin - 273;
// finding out fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// rounding to interger using .floor()
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)




let myAge = 12; // this is my age
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

let laterYears = myAge - 2;
laterYears = laterYears * 4; // multipliying to find out the number of dog years accounted for by your later years

//adding both variables to see my age in dog years
console.log(earlyYears)
console.log(laterYears)

let myAgeInDogYears = earlyYears + laterYears;

let myName2 = 'Hannah'.toLowerCase();
console.log(`My name is ${myName2}. I am ${myAge} years old in human years which is ${myAgeInDogYears}.`)