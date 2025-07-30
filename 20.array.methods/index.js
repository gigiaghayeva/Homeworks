const cars = ["BMW", "Mercedes", "Toyota", "Ferrari"];
let size = cars.length;
console.log(size);
console.log(cars);

const fruits = ["apple", "banana", "orange", "peach"];
let mylist = fruits.toString();
console.log(mylist);

const veggies = ["potato", "tomato", "cabbage", "onion"];
let veggie = veggies.at(3);
console.log(veggie);

const colors = ["black", "white", "yellow", "red"];
let color = colors[2];
console.log(color);

const friends = ["elmir", "nezrin", "vahid", "ruslan"];
document.getElementById("friend").innerHTML = friends.join(" * ");
console.log(friends.join("*"));

const numbers = [1, 2, 3, 4, 5, 6];
//numbers.pop();
//numbers.shift()
numbers.unshift();
numbers.push("89");
console.log(numbers);

const family = ["mom", "dad", "son", "daughter"];
family[2] = "daughter";
console.log(family);

const soccerTeam = ["ronaldo", "zidane"];
soccerTeam[soccerTeam.length] = "beckham";
delete soccerTeam[1];

console.log(soccerTeam);

const myGirls = ["Celine", "Sarah"];
const myBoys = ["Tobias", "Tomas"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const phones = ["iphone", "samsung", "huawei"];
phones.copyWithin(2, 0);
console.log(phones);

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

const myYear = [2000, 2001, 2002, 2003];
const newYear = myYear.flatMap((x) => [x, x * 10]);
console.log(newYear);

const sisters = ["alba", "emily", "beck"];
sisters.splice(2, 0, "Maria", "Emma");
console.log(sisters);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

const citrus = ["orange", "lemon", "grapefruit"];
const citr = citrus.slice(2);
console.log(citr);
console.log(citrus);

// Array search

const girls = ["Maria", "Aida", "Diana"];
let position = girls.indexOf("Maria") + 1;
console.log(position);

const tv = ["samsung", "apple", "lg"];
let tvs = tv.lastIndexOf("samsung") + 2;
console.log(tvs);

const drinks = ["coffee", "latte", "icetea", , "cappucino"];
let hasDrinks = drinks.includes("cappucino");
console.log(hasDrinks);

const nums = [4, 9, 16, 25, 29];
let first = nums.find(myfunction);
function myfunction(value, index, array) {
  return value > 18;
}

console.log(first);

const numers=[77,19,26,33,55]
let findInde=numers.findIndex(myFtion);
function myFtion(value,index,array){
    return value>4
}
console.log(findInde);