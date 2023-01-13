//test1 functions

// function fruitProcessor(apples,oranges){
//     const juice = `this juice has ${apples} apples and ${oranges} oranges in it`;
//     return juice
// }
// const appleFruit=fruitProcessor(3,1);
// console.log(appleFruit);

// const appleOrangeJuice=fruitProcessor(2, 2);
// console.log(appleOrangeJuice);
//just
// const num=Number('23');

//test2
//function declaration

// function calcAge(birthYear){
//     return 2023-birthYear;
// }
// const age = calcAge(1996);
// console.log(age);


//function expression
// const calcAge = function(birthYear){
//     return 2023-birthYear
// }
// const age = calcAge(1996);
// console.log(age);
 
//test3
//arrow functions

// const calcAge = birthYear => 2023 - birthYear;
// const age = calcAge(1996);
// console.log(age);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const currentAge = 2023 - birthYear;
//     const retirement = 65 - currentAge;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`

// }
// console.log(yearsUntilRetirement(1996, 'Paata'));
// console.log(yearsUntilRetirement(1999, 'Ani'));

//test4 calling function

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apple, orange){
//     const applePieces = cutFruitPieces(apple);
//     const orangePieces = cutFruitPieces(orange);
//     return `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    
// }
// console.log(fruitProcessor(2,3));

//test5


// function calcAverage(a,b,c){
//     return(a+b+c)/3
//} --- this is equivalent to this below
//---- // const calcAverage = (a,b,c) => (a+b+c)/3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWInner = function(avgDolphins, avgKoalas){
//     if(avgKoalas>=(avgDolphins)*2){
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
// }
// else if(avgDolphins>=(scoreKoalas)*2){
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
// }
// else{
//     console.log('no team wins');
// }
// }
// checkWInner(scoreDolphins,scoreKoalas);//that was callback

//test6 arrays
// const animals = ['cat','dog','bird'];
// const cars = new Array ('mercedes','bmw','lada');
// console.log(cars[2]);
// console.log(cars.length);
// console.log(animals.length - 1);
// console.log(animals[animals.length - 2]);

// const animals = ['cat','dog','bird'];
// animals[1] = 'koala';
// animals[0] = 'lion'
// animals[2] = 'tiger'
// console.log(animals);
// even though animals was const, 
//dog was still replaced by koala since arrays are not primitive value,
//  so we can mutate it,
//   but we still cannot replace the entire array.
//so we can't do this --
// --  animals = ['bear', 'cheetah'];

// const firstName = 'Paata';
// const Paata = [firstName, 'TsiTsishvili', 2023-1996 ];
// console.log(Paata);


// function calcAge(birthYear){
//     return 2023-birthYear
// }
// const years = [1990, 1992, 1996, 1998, 1999];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

//or

// const ages = [calcAge(years[0]),calcAge(years[2]),calcAge(years[years.length - 1])];
// console.log(ages);
//(3)-in terminal is number of callbacks.

//test7 arrow operations(methods)

//to add element at the end
// const animals = ['dog','cat','bird'];
// animals.push('tiger');
// console.log(animals);

//to add element at the start

// const animals = ['dog','cat','bird'];
// animals.unshift('tiger');
// console.log(animals);

// to remove last element

// const animals = ['dog','cat','bird'];
// animals.pop();
// console.log(animals);
 
//to remove the first one

// const animals = ['dog','cat','bird'];
// animals.shift();
// console.log(animals);

//to know where the given element is in the array
// const animals = ['dog','cat','bird'];
// console.log(animals.indexOf('cat'));

//to know whether given element is in the array or not(this method returns boolean)
// const animals = ['dog','cat','bird'];
// console.log(animals.includes('bird'));

//this method can be used in if/else statement

// if(animals.includes('lion')){
//     console.log('lion is in array');
// }else {
//     console.log("lion isn't in array");
// }

//test 8