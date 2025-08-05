//1) düzbucaqlının sahəsini hesablayan funksiya yazın
// const calcRectangleArea = (a, b) =>{ ... }

// Nümunə:
// console.loga(calcRectangleArea(3,4)) // 12
// console.loga(calcRectangleArea(10,7)) // 70

// const calcRectangleArea = (a, b) => a * b;
// let rectangleArea = calcRectangleArea(3, 4);
// console.log(rectangleArea);

// const calcRecArea = (w, l) => w * l;
// let recArea = calcRecArea(10, 7);
// console.log(recArea);

// //2) Qiymət endirimi hesablayan funksiya yazın. İstifadəçi məhsulun qiymətini və endirim faizini daxil edir. Funksiya endirimli qiyməti hesablayır.
// // function calculateDiscount(price, discountPercent){ ... }

// // /* ==== Test nümunələri ==== */
// // console.log(calculateDiscount(100, 20));   // 80
// // console.log(calculateDiscount(59.9, 15));  // 50.92
// // console.log(calculateDiscount(200, 0));    // 200
// // console.log(calculateDiscount(150, 110));  // Xəta mesajı
// // console.log(calculateDiscount(-10, 10));   // Xəta mesajı

// // console.log(getGradeByScore(85)) // nəticə: A
// // console.log(getGradeByScore(68)) // nəticə: C

// function calculateDiscount(price, discount) {
//   return price - (price * discount) / 100;
// }
// let finalPrice = calculateDiscount(100, 80);
// console.log("Final Price:", finalPrice);

// function calculateDisc(p, d) {
//   return p - (p * d) / 100;
// }
// let finPrice = calculateDisc(59.9, 15);
// console.log(finPrice);

// function calculatePrcDsc(prc, disc) {
//   return prc - (prc * disc) / 100;
// }
// let newprc = calculatePrcDsc(200, 0);
// console.log(newprc);

// function calculateDiscount(price,discount){
//     return price-( price*discount/100);
// } 
// let finalPrce = calculateDiscount(150,110);

// console.log(finalPrce)



// 3) Array daxilindəki ədədlərin ortalamasını hesablayan funksiya yazın.
// function findAverage(array){
//     ...
// }

// console.log(findAverage([1,2,3])) // Average: 2
// console.log(findAverage([15,25,10,30])) // Average: 20
// const numbers = [1, 2, 3];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// let average = sum / numbers.length;
// console.log("Average:", average); 

// const nums=[15,25,10,30]
// let summary =0;
// for(let i=0; i<nums.length; i++){
//     summary +=nums[i]
// }
// let aveSum=summary/nums.length;
// console.log(aveSum)


const divisorCountSimple = (nums) => {
    let count = 0;
    for (let i = 1; i <= nums; i++) {
        if (nums % i === 0) {
            count++;
        }
    }
    return count;
};

console.log(divisorCountSimple(40));
