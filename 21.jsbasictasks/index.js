// let num = +prompt ("bir eded daxil edin");

// if (num>0){
//     console.log("musbetdir")

// }
// else if (num<0){
//     console.log("eded menfidir")
// }
// else if (num=0){
//     console.log("eded sifirdir")
// }
// else{
//     console.log('eded deyil')
// }

// let num =+prompt ("bir eded daxil edin");
// if (num % 2 == 0 ){
//     console.log("eded cutdur")
// }
// else {
//     console.log("tekdir")
// };

// let age =+prompt("yasinizi daxil edin")
// if (age>18){
//     console.log("giris icazelidir");

// }else{
//     console.log("yasiniz catmir")
// }

// let password = +prompt("sifre daxil edin");
// if (password === 1234){
//     console.log("daxil oldunuz")
// }
// else {
//     console.log("yanlis sifre")
// }

// let num1 = +prompt("eded daxil edin");

// let num2 = +prompt("2 ci eded daxil edin");

// if ( num1>num2){
//     console.log(num1)
// }
// else if ( num1<num2){

//     console.log(num2)
// }

// let num = +prompt("eded daxil edin")
// if (num> 0 && num<100)
// [
//     console.log("uygundur")
// ]
//     else{
//         console.log("uygun deyil")
//     }

// let password = +prompt("sifre daxil edin");
// if (password.lenght > 8) {
//   console.log("qebul edildi");
// } else (password.lenght < 8)
// {
//     console.log("sifreniz cox qisadir")
// }

// let name1 = prompt("adinizi daxil edin")

// let numb= "5"

// let greet = "salam"

// if ( name1 == "emil"){
//     console.log(greet, "emil" )
// }else{
//     console.log(greet, name1,
//          +numb)
// }

//loops

// for (let i=0 ; i <= 10; i++){
//     console.log(i);

// }

// for (let i=0; i<=20; i++){
//     if ( i % 2 ==0){
//         console.log(i)
//     }
// }

// for (let i =0; i<=20; i++){
//     if (i % 2 !== 0){
//         console.log(i)
//     }
// }

// let num =7

// for( let i =0; i<10; i++){
//     console.log(i*num)
// }

// let sum =0;
// for (let i=1;i<=100;i++){
//     sum += i;
// }
// console.log(sum)

// for (let i=0; i<=5; i++){
//     console.log(i*i)
// }

// function sumArray(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {

//     sum += arr[i];
//   }
//   return sum;
// }

// let array = [2, 5, 6, 8];
// console.log(sumArray(array));

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([2, 8, 5, 13, 7]));

// const names = ["zaur", "gunay", "deniz", "gunel"];

// const myFunction = function (arr) {
//   let newArr = [];

//   for (i = 0; i < arr.length; i++) {
//     newArr.push(arr[i][0].toUpperCase()+arr[i].slice(1) )
//   }

//   return newArr;
// };

// console.log(myFunction(names) )

// const myFunction = (param1, param2) => {
//   return param1 + param2;

// };

// const numbers = [3, 7, 9, 12, 14, 18, 20];
// const findDivide = (arr) => {
//   let count = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//       count++;
//     }
//   }

//   return count;
// };

// console.log(findDivide(numbers));

// let fruits = ["tomato", "cucumber", "cabbage", "onion", "mushroom"];

// function veggies(arr, length) {
//   let result = [];

//   for (i = 0; i < arr.length; i++) {

//     if (arr[i].length > length) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }
// console.log(veggies(fruits, 6));

// let numbers = [4, 16, 7, 8, 58];
// numbers[5] = 33;
// console.log(numbers);
// numbers.push(17); // adds elements in the end of the list
// console.log(numbers);
// numbers.unshift(1); //adds element at the begining of the list
// console.log(numbers);
// let lastNumber = numbers.pop(); //removes last element
// console.log(numbers);
// console.log(lastNumber);

// let FirstNumber = numbers.shift(); //shift method -removes first element
// console.log(numbers);
// console.log(FirstNumber);

// numbers.splice(1, 1);
// console.log(numbers); // splice removes elements by its index


//array icindeki elementleri yazdir 
// let breakfast=[ 
//     "milk",
//     "banana",
//     "cereal",
//     "bread",
//     "tea",
//     "coffee"
// ];
// for (i=0; i<breakfast.length; i++)

// console.log(breakfast[i]);

//arraydaki edelerin cemini tap
// let numbers =[13,52,4,5,7,78];
// let sum =0;
// for(i=0; i<numbers.length; i++){
//     sum+=numbers[i]


    
// }

// console.log(sum);

//arrayin kvadratlarini yeni arraya yig

// let numbers =[2,5,6,7,9]
// let sum=[]
// for (i=0; i<numbers.length; i++){
//     sum.push(numbers[i] * numbers[i]);
// }
// console.log(sum);

// let names =["vahid", "iman", "elchin", "asif"]

// for (i=0; i<names.length; i++){
// console.log(names[i], names[i].length)
// }


// let numbers = [2, 5, 6, 7, 9, 12, 15];
// let oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) { // tək ədədlər
//         oddNumbers.push(numbers[i]);
//     }
// }

// console.log(oddNumbers); // 👉 [5, 7, 9, 15]


// let number = [4, 9, 2, 17, 6];
// let max = number[0]; // ilk ədədi ən böyük kimi götürürük

// for (let i = 1; i < number.length; i++) {

//     if (number[i] > max) {
//         max = number[i];
//     }
// }

// console.log("Ən böyük ədəd:", max); // 👉 17

// let names = ["zaur", "gunay", "deniz", "gunel"];
// let newNames = [];

// for (let i = 0; i < names.length; i++) {
//     let capitalized = names[i][0].toUpperCase() + names[i].slice(1);
//     newNames.push(capitalized);
// }

// console.log(newNames); // 👉 ["Zaur", "Gunay", "Deniz", "Gunel"]





// for (let i=0; i<100; i++){
//     console.log(i)
// }


// for (let i=0; i<100; i++){
//     if( i % 2===0);
//     console.log(i)
// }


// const numbers = [2,5,1,8,4]
// let sum =0;
// for(i=0; i<numbers.length; i++){
//     sum+=numbers[i]
// }

// let average=sum/numbers.length

// console.log(average);


// const  numbers = [2,58,7,8]
// let sum = 0;
// for (i=0; i<)

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]


// const result = countries.map((country) => country.slice(0,3 ).toUpperCase()
// )
// console.log(result)
//you use function when you want function to return value 
//  function my(a,b){
//     return a+b
//  }
//  console.log(my(2,3))




