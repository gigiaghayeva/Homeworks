for(i=0; i<7; i++){
    console.log("hello my name is gigi")

}
let candies =3;
while(candies >0){
    console.log("eat a candy");

    candies--;

}


for (i=10; i>=1;i--){
    console.log(i)
}


const fruits = ["apple", "banana", "orange"];
fruits.forEach(function (fruit){
    console.log(fruit)


})





const numbers= [2,4,6,8]
const number =numbers.map(item => item* item);
console.log(number)

const nums =[12,5,8,130,44]
const newNums = nums.filter((item)=> item>10);
console.log(newNums)


const findGreater =[3,10,18,20]
const newGreater = findGreater.find((item)=> item>15);
console.log(newGreater)

const someGreater = [1,2,3,4,5]
const newSomeGreater = someGreater.some((item)=> item >=4)
 console.log(newSomeGreater)


 const evenNums = [2,4,6,8]
 const newEvenNums = evenNums.every((item) => item %2 ===0)
 console.log (newEvenNums)


 const  reduceNums = [1,2,3,4]
 const sum= reduceNums.reduce((total, curr)=> total + curr,0)
 console.log(sum)


 const combineMethods=[ 1,2,3,4,5]
 const newCombine = combineMethods.filter ((item)=>item%2===0)
 .map(item => item *3) 
 .reduce((total, num)=> total +num , 0)

 console.log(newCombine)