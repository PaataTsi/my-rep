//test1
// const name ='Jack';
// const age = 17;
// const isoldenough = age >= 18;
// const yearsLeft = 18 - age;
// if(isoldenough){
//     console.log(name + ' can have a driving license')
// }
// else{
//     console.log(` can't have a driving license. He has to wat for"${yearsLeft}"years.`)
//}

//test2
// const firstName = 'Mark';
// const weightMark = 95;
// const heightMark = 1.85;
// const MarkBMI = weightMark / (heightMark **2);

// const secondName = 'jack';
// const weightJack = 85;
// const heightJack = 1.90;
// const JackBMI = weightJack / (heightJack **2);

// if (MarkBMI > JackBMI){
//     console.log("Mark's BMI is higher than Jack's")
// }
// else{
//     console.log("jack's BMI is higher than Mark's")
// }

//test3
// const birthYear = '1996';
// console.log(Number(birthYear) + 20);
// console.log(typeof birthYear );
// console.log(String(20),20);
// console.log(typeof (true));
// console.log("I'm 26 years old");
// //when minus operator, JS starts from right to left so it converts string to number
// console.log('23'-'10'-3);
// //same for multification/division
// console.log('20'*'10');
// console.log('20'/'10');
// //not for plus operator
// console.log('23'+'10'+3);
// //for example below
// let n = '1'+ 1;
// n = n-1;
// console.log(n);
//result will be 10


// console.log('10'-'4'-'3'-2+'5');
//result will be 15

//test4
//in JS there are 5 falsy values: null, '', NAN, undefined, 0.
//anythis else is truthy value.

// console.log(Boolean(0));-false
// console.log(Boolean(4));-true
// console.log(Boolean(''));-false
// console.log(Boolean('dd'));-true
// console.log(Boolean({}));-True
// console.log(Boolean(undefined));-false
// console.log(Boolean(null));-false

// const money = 0;
// if(money){
//     console.log("don't spend it all")
// }
// else{
//     console.log('You have to get a job')
// }
// //you have to get a job

// const cash = 1;
// if(cash){
//     console.log("don't spend it all")
// }
// else{
//     console.log('You have to get a job')

// }
//don't spend it all

// let height;//or height=0;
// if(height){
//     console.log('height is defined')
// }
// else{
//     console.log('height is undefined')
// }

// //result will be undefined

// let simagle=1;
// if(simagle){
//     console.log('height is defined')
// }
// else{
//     console.log('height is undefined')
// }

//result will be defined


//test5
//difference between ==&===

//=== when value is exactly the same 18===18, or '18'=='18' (true)
// == uses type coercion so '18'== 18 would be true
// === does not. so '18'===18 would be false

// const favorite = prompt("what's your favorite number?");
// console.log(favorite);

// if(favorite==20){//it would be true as == is coercion type
//     console.log('right number')
// }
// else{
//     console.log('wrong number')
// }

// if(favorite===20)//that woulf be false 


// const favorite = Number(prompt("what's your favorite number?"));
// console.log(favorite, typeof favorite);

// if(favorite === 20){//now this will work
//     console.log('right number')
// }

//opposite for == is !=
//opposite for === is !==

// const hasDricingLicense = true;
// const hasGoodVision = false;
// console.log(hasDricingLicense || hasGoodVision);
// console.log(!hasDricingLicense);

// if(hasDricingLicense && hasGoodVision){
//     console.log('can drive')
// }else{
//     console.log("can't drive")
// }

//test6
//  const avgDolphins = (96+108+89)/3;
//  const avgKoalas = (105+91+110)/3;

//  if (avgDolphins > avgKoalas){
//     console.log('Dolphins win!')
//  }
// else if(avgKoalas>avgDolphins){
//     console.log('Koalas win!')
// }else{
//     console.log('Draw!')
// };


// if(avgDolphins>avgDolphins&&avgDolphins>=100){
//     console.log('Dolphins win!')
// }else if(avgKoalas>avgDolphins&&avgKoalas>=100){
//     console.log('Koalas win!')
// }
// else if(avgDolphins<100 && avgKoalas<100){
//     console.log('Draw!')
// }
// else{
//     console.log('Draw!')
// }

//test7
// const day = 'sundakky';
// switch (day){
//     case 'monday' : 
//     console.log('watching TV show');
// break;
// case 'tuesday' :
//     console.log('watching a movie');
//     break;
//     case 'wednesday':
//         console.log('coding');
//         break;
//         case 'thursday':
//             console.log('walking');
//             break;
//             case 'friday':
//                 console.log('training');
//                 break;
//                 case 'saturady':
//                 case 'sunday':
//                     console.log('enjoy the weekend!');
//                     break;
//                     default:
//                         console.log('not a valid day!');



//}
// if(day === 'monday'){
//     console.log('watching TV show')
// }else if(day==='tuesday'){
//     console.log('watching a movie')
// }else if(day==='wednesday'){
//     console.log('coding')
// }else if(day==='thursday'){
//     console.log('walking')
// }else if(day==='friday'){
//     console.log('training')
// }else if(day==='saturady'||day==='sunday'){
//     console.log('enjoy the weekend!')
// }else{
//     console.log('wrong day!')
// }

//test8
// const age = 17;
// age>=18 ? console.log('can have a driving license'):
// console.log("can't have a driving license");

//or
// const age = 13;
// let license;
// if(age>=18){
//     license = 'can have'
// }else{
//     license = "can't have"
// }
// console.log(license);


//easier way:
//  const age = 19;
//  const license=age>=18? 'can':"can't"
//  console.log(license);
// console.log(`I ${age>=18? ' can ':" can't "}have a driving license`);

//test9

// const bill = 400;
// const tip = bill >=50&&bill<=300? (bill*15)/100:(bill*20)/100;
// console.log(tip);
// console.log(`the bill was ${bill} the tip was ${tip} and the total value was ${bill + tip}.`);

//test10



