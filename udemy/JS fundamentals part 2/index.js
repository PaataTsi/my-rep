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

// function calcTip (bill){
//     if (bill>=50&&bill<=300){
//         return (bill * 15)/100;
//     }
//     else{
//         return (bill * 20)/100;
//     }
// }
//  const bills = [125, 555, 44];
// const tips = [bills[0], bills[1], bills[2] ];
// const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

// console.log(total[2]);

//test9
// const Paata = {
//     firstName: 'Paata',
//     lastName: 'tsitsishvili',
//     age: 2023-1996,
//     job: 'tutor',
//     languages: ['html','css','javascript']
// };
// console.log(Paata['lastName']);
// console.log(Paata.languages[1]);

//important part--
// const nameKey = 'Name';
// console.log(Paata['first'+nameKey]);
// console.log(Paata['last'+nameKey]);

// const interestedIn = prompt ('what do you want to know about me?choose between firstName, lastName, age, job or languages ');
// console.log(Paata[interestedIn]);

//now with if else -- 
// if(Paata[interestedIn]){
//     console.log(Paata[interestedIn])
// }else{
//     console.log('wrong request!')
//};

//how to add objects to arrays from outside (2 ways)
// Paata.location = 'Tbilisi';
// Paata ['marriedTo'] = 'Ani';
// console.log(Paata['marriedTo']);

//just try
// console.log(`${Paata.firstName} knows ${Paata.languages.length} languages, and his favorite one is ${Paata.languages[2]}`);


//test10
// const Paata = {
//     firstName: 'Paata',
//     lastName: 'tsitsishvili',
//     location: 'Tbilisi',
//     languages: ['html','css','javascript'],
//     hasDrivingLicense: true,

//     calcAge: function(birthYear){
//        return 2023-birthYear;
//     }
    
// }
// console.log(Paata.calcAge(1996));
// console.log(Paata['calcAge'](1996));

//this keyword
//this keyword hold the whole object(array)
//this keyword is essential for 'don't repeat youself' principle

// const Paata = {
//     firstName: 'Paata',
//     lastName: 'tsitsishvili',
//     birthyear: 1996,
//     location: 'Tbilisi',
//     languages: ['html','css','javascript'],
//     job: 'tutor',
//     hasDrivingLicense: false,
    
//     calcAge: function(){
//         this.age = 2023 - this.birthyear;
//         return this.age;
//     },
// getSummary : function(){
//     return `${this.firstName} is ${this.age} years old ${this.job} and he has ${this.hasDrivingLicense ? 'a ' : 'no '}driving License }`
// }



// };

// console.log(Paata.calcAge());
// console.log(Paata.getSummary());

//test11

// const jack = {
//     Fullname : 'Jack Shephard',
//     mass : 90,
//     height : 1.87,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// };
// const sawyer = {
//     Fullname : 'Tom Sawyer',
//     mass : 88,
//     height : 1.89,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// };

// jack.calcBMI();
// sawyer.calcBMI();

// console.log(jack.bmi);

// if(jack.bmi > sawyer.bmi){
//     console.log (`${jack.Fullname}'s bmi (${jack.bmi}) is higher than that of ${sawyer.Fullname}'s (${sawyer.bmi})`);
// }else if(sawyer.bmi > jack.bmi){
//     console.log (`${sawyer.Fullname}'s bmi (${sawyer.bmi}) is higher than that of ${jack.Fullname}'s (${jack.bmi})`);
// }else{
//     console.log ("jack's bmi and sawyer's bmi are equal");
// }

//test12 the for loop
// for loop keeps running while the condition is true
// it consists of 3 stages:
// 1) creating first value by variable 
 //2) creating last value by variable 
 //3) creating iteration one by one
 // in the console.log we write teplate literals.

//  console.log('lifting weights repetition 1');
//  console.log('lifting weights repetition 2');
//  console.log('lifting weights repetition 3');
//  console.log('lifting weights repetition 4');
//  console.log('lifting weights repetition 5');
//  console.log('lifting weights repetition 6');
//  console.log('lifting weights repetition 7');
//  console.log('lifting weights repetition 8');
//  console.log('lifting weights repetition 9');
//  console.log('lifting weights repetition 10');
 
 //instead of writing this, we can write this --
  
//  for(let rep=1; rep<=10; rep++){
//     console.log(`lifting weights repetition ${rep}`);
//  }

//test13 looping arrays, breaking and continuing

// const Paata = [
//     'Paata',
//     'Tsitsishvili',
//     2023-1996,
//     'tutor',
//     'Skillwill',
//     ['tall', 'attractive', 'smart'],
//     true
// ];

// for(let i=0; i<Paata.length; i++){
//     console.log(Paata[i]);
// }

//interesting method

// const Paata = [
//     'Paata',
//     'Tsitsishvili',
//     2023-1996,
//     'tutor',
//     'Skillwill',
//     ['tall', 'attractive', 'smart'],
//     true
// ];

// const types = [];
// for(let i=0; i<Paata.length; i++){
//     console.log(Paata[i]);
//     types[i] = typeof Paata[i]; (also we can write like this -- types.push(typeof Paata[i]));
// }
// console.log(types);

// loop as a function

// const birthYear = [1996, 1982, 2002, 1999];
// const ages = [];
// for(let i=0; i<birthYear.length; i++){
//     ages.push(2023-birthYear[i]);
// }
// console.log(ages);

//continue and break

// const Paata = [
//     'Paata',
//     'Tsitsishvili',
//      2023-1996,
//     'tutor',
//     'Skillwill',
//     ['tall', 'attractive', 'smart'],
//     true
//     ];
     
//     console.log('---only strings---');
//     for(let i =0; i<Paata.length; i++){
//         if (typeof Paata[i] !=='string') continue;  
//           console.log(Paata[i], typeof Paata[i]);
//     }
    
// const Paata = [
//     'Paata',
//     'Tsitsishvili',
//      2023-1996,
//     'tutor',
//     'Skillwill',
//     ['tall', 'attractive', 'smart'],
//     true
//     ];
     
//     console.log('---break with number---');
//     for(let i =0; i<Paata.length; i++){
//         if (typeof Paata[i] ==='number') break;  
//           console.log(Paata[i], typeof Paata[i]);
//     }

//looping backwards and loops in loops

// const Paata = [
//     'Paata',
//     'Tsitsishvili',
//      2023-1996,
//     'tutor',
//     'Skillwill',
//     ['tall', 'attractive', 'smart'],
//     true
//     ];
     
//     for(let i = Paata.length - 1; i >= 0; i--){
//         console.log(Paata[i]);
//     }

//loops in loop

// for(let exercise = 1; exercise < 4; exercise ++ ){
//    console.log(`-----starting exercise ${exercise}`) ;

// for(let rep = 1; rep < 6; rep++){
//     console.log(`exercise ${exercise}: lifting weihts repetition ${rep}`);
// }
// };
    
//test14 while loops

// let rep = 1;
// while(rep<=10){
//     console.log(`lifting weights repetition ${rep}`);
//     rep++
// };

// let dice = Math.trunc (Math.random()*6)+1;

// while(dice!==6){
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc (Math.random() * 6)+1;
//     console.log(dice);
//     if(dice === 6)
//         console.log('loop is about to end...');
    
// };

//test15

// function calcTip (bill){
//        if (bill>=50&&bill<=300){
//         return (bill * 15)/100;
//         }
//        else{
//            return (bill * 20)/100;
//         }
//     };

//     const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//     const tips = [];
//     const totals = [];

//     for(let i=0; i<bills.length; i++){
//         const tip = calcTip(bills[i]);
//         tips.push(tip);
//         totals.push(tip + bills[i]);
//     }
    // console.log(bills, tips, totals);


    // const calcAverage = function(arr){
    //     let sum = 0;
    //     for(let i =0; i < arr.length; i++){
    //         sum += arr[i];
    //     }
    //     return sum/arr.length;

    // }
    // console.log(calcAverage([2, 3, 7]));
    // console.log(calcAverage(totals));
    // console.log(calcAverage(tips));
    // console.log(calcAverage(bills));
    











