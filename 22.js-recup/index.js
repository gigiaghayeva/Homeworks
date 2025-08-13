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

// const divisorCountSimple = (nums) => {
//     let count = 0;
//     for (let i = 1; i <= nums; i++) {
//         if (nums % i === 0) {
//             count++;
//         }
//     }
//     return count;
// };

// console.log(divisorCountSimple(40));

// let score = +prompt("eded daxil edin");

// if (score > 100 || score<0 ){
// console.log("error")
// } else if (score <= 100 && score>=80){
//     alert("A")
// } else if ( score >=70 && score <=79
// ){
//     console.log("B")
// }
// else if(score >=60 && score <=69){
//     console.log("C")
// }
// else if(score>=50 && score<=59){
//     console.log("D")
// }
// else if(score >=0 && score<=49){
//     console.log("E")
// }else{
//     console.log("xeta bas verdi")
// }

// const numbers = [2,5,8,12,22]
// let sum=0

// for(i=0; i<numbers.length; i++){
//     sum+=numbers[i]

// }

// let max=numbers[0]
// for (i=1; i<numbers.length; i++){

//     if( numbers[i] > max){
//         max=numbers[i]
//     }

// }

// console.log(max)

// const student = {
//   id: 101,
//   fullName: "Gunay Aghayeva",
//   age: 32,
//   isGraduated: false,
//   scores: {
//     math: 85,
//     english: 78,
//     programming: 92,
//   },
//   contact: {
//     email: "gunaysevinc23@gmail.com",
//     phone: "+994778041993",
//   },
//   getInfo: function () {
//     return `menim ${this.fullName} ${this.age} yasim var`;
//   },
//   getContactInfo: function () {
//     return `${this.contact.email} ${this.contact.phone}`;
//   },
// };

// student.calcAverageScore = function () {
//   const scores = Object.values(this.scores);

//   let sum = 0;
//   scores.forEach((score) => {
//     sum += score;
//   });

//   return `Average score is ${sum / scores.length}`;
// };

// student.gender = "female";
// student.scores.math = 94;
// student.isGraduated = true;

// // console.log(student.calcAverageScore())

// // console.log(student.contact.email);
// // console.log(student.gender);
// // console.log(student.scores.math)
// // console.log(student.isGraduated);
// // console.log( Object.keys(student))
// // console.log(student.getInfo())
// // console.log(student.getContactInfo())

// const employees = [
//   {
//     id: 1,
//     name: "Aydin Mammadov",
//     age: 32,
//     position: "Frontend Developer",
//     salary: 1800,
//     contact: {
//       email: "aydin.mammadov@example.com",
//       phone: "+994501112233",
//     },
//     address: {
//       city: "Baku",
//       street: "Nizami Street 45",
//     },
//   },
//   {
//     id: 2,
//     name: "Leyla Aliyeva",
//     age: 28,
//     position: "Backend Developer",
//     salary: 2000,
//     contact: {
//       email: "leyla.aliyeva@example.com",
//       phone: "+994502223344",
//     },
//     address: {
//       city: "Ganja",
//       street: "Heydar Aliyev Avenue 12",
//     },
//   },
//   {
//     id: 3,
//     name: "Rauf Hasanov",
//     age: 40,
//     position: "Project Manager",
//     salary: 3000,
//     contact: {
//       email: "rauf.hasanov@example.com",
//       phone: "+994503334455",
//     },
//     address: {
//       city: "Sumqayit",
//       street: "28 May Street 6",
//     },
//   },
//   {
//     id: 4,
//     name: "Sevda Mehdiyeva",
//     age: 25,
//     position: "UI/UX Designer",
//     salary: 1700,
//     contact: {
//       email: "sevda.mehdiyeva@example.com",
//       phone: "+994504445566",
//     },
//     address: {
//       city: "Shaki",
//       street: "Mirza Fatali Akhundov Street 19",
//     },
//   },
//   {
//     id: 5,
//     name: "Elvin Ismayilov",
//     age: 30,
//     position: "QA Engineer",
//     salary: 1600,
//     contact: {
//       email: "elvin.ismayilov@example.com",
//       phone: "+994505556677",
//     },
//     address: {
//       city: "Lankaran",
//       street: "Seaside Road 7",
//     },
//   },
//   {
//     id: 6,
//     name: "Narmin Karimova",
//     age: 26,
//     position: "Marketing Specialist",
//     salary: 1500,
//     contact: {
//       email: "narmin.karimova@example.com",
//       phone: "+994506667788",
//     },
//     address: {
//       city: "Baku",
//       street: "Badamdar Highway 10",
//     },
//   },
//   {
//     id: 7,
//     name: "Kamran Suleymanov",
//     age: 35,
//     position: "DevOps Engineer",
//     salary: 2700,
//     contact: {
//       email: "kamran.suleymanov@example.com",
//       phone: "+994507778899",
//     },
//     address: {
//       city: "Mingachevir",
//       street: "Neftchilar Street 9",
//     },
//   },
//   {
//     id: 8,
//     name: "Aygun Abbasova",
//     age: 29,
//     position: "Data Analyst",
//     salary: 1900,
//     contact: {
//       email: "aygun.abbasova@example.com",
//       phone: "+994508889900",
//     },
//     address: {
//       city: "Guba",
//       street: "Central Park Street 2",
//     },
//   },
//   {
//     id: 9,
//     name: "Farid Guliyev",
//     age: 31,
//     position: "System Administrator",
//     salary: 2200,
//     contact: {
//       email: "farid.guliyev@example.com",
//       phone: "+994509990011",
//     },
//     address: {
//       city: "Baku",
//       street: "Khatai Avenue 55",
//     },
//   },
//   {
//     id: 10,
//     name: "Zarina Huseynova",
//     age: 27,
//     position: "Business Analyst",
//     salary: 2100,
//     contact: {
//       email: "zarina.huseynova@example.com",
//       phone: "+994501010101",
//     },
//     address: {
//       city: "Nakhchivan",
//       street: "Babek Avenue 3",
//     },
//   },
// ];

// employees.forEach(employee=>{
//     console.log(employee);

// });

// const names = employees.map((item) => item.name);
// console.log(names);

// const nameSalary = employees.map((item) => {
//   return {
//     name: item.name,
//     salary: item.salary,
//   };
// });
// console.log(nameSalary);
// const salary = employees.filter((item) => item.salary > 2000);
// console.log(salary);

// const cityBaku = employees.filter(
//   (item) => item.address.city.toLocaleLowerCase() === "baku"
// );
// console.log(cityBaku);

// const findDev = employees.find((item) => item.position === "DevOps Engineer");

// console.log(findDev);

// const sortSal = employees.toSorted((a, b) => a.salary - b.salary);
// console.log(sortSal);

// const sortNames = employees.toSorted((a, b) => a.name.localeCompare(b.name));
// console.log(sortNames);
// const findAd = employees.some(item=> item.position ==="System Administrator");

// console.log(findAd)


// const aboveTweenty = employees.every((employee) => employee.age >=20);
// console.log(aboveTweenty)
  



const students = [
  { id: 1, name: "Aysel", age: 20, score: 85, city: "Baku" },
  { id: 2, name: "Murad", age: 22, score: 58, city: "Ganja" },
  { id: 3, name: "Nigar", age: 19, score: 92, city: "Sumqayit" },
  { id: 4, name: "Elvin", age: 21, score: 74, city: "Baku" },
  { id: 5, name: "Rauf", age: 23, score: 60, city: "Shaki" },
  { id: 6, name: "Lala", age: 20, score: 99, city: "Baku" },
];

const capitalize =  students.map(names => names.name.toLocaleUpperCase())
console.log(capitalize);

const nameScore = students.map((item)=> {
    return{
        name:item.name,
        score: item.score
    };
})
console.log(nameScore)

const highScore= students.filter((item)=> item.score>70)
console.log(highScore)

const highToLow= students.toSorted((a,b)=> a.score-b.score)
console.log(highToLow)

const bakufilter = students.filter(student => student.city.toLowerCase()=== "baku").sort((a,b)=> a.score - b.score).map(student => student.name)
console.log(bakufilter)

const age=students.toSorted((a,b)=> a.age-b.age)
console.log(age)

const bestThree= students.toSorted((a,b)=>b.score-a.score).slice(0,3)
console.log(bestThree)
 const bestScore= students.toSorted((a,b)=> b.score-a.score).slice(0,1)
 console.log(bestScore)


 const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1500, stock: 12, rating: 4.5, discount: true },
  { id: 2, name: "Phone", category: "Electronics", price: 800, stock: 25, rating: 4.7, discount: false },
  { id: 3, name: "Headphones", category: "Electronics", price: 120, stock: 50, rating: 4.2, discount: true },
  { id: 4, name: "Shoes", category: "Fashion", price: 90, stock: 40, rating: 4.0, discount: false },
  { id: 5, name: "Jacket", category: "Fashion", price: 200, stock: 15, rating: 4.3, discount: true },
  { id: 6, name: "Backpack", category: "Fashion", price: 70, stock: 60, rating: 4.1, discount: false },
  { id: 7, name: "Coffee Maker", category: "Home", price: 250, stock: 8, rating: 4.6, discount: true },
  { id: 8, name: "Vacuum Cleaner", category: "Home", price: 400, stock: 5, rating: 4.4, discount: false },
  { id: 9, name: "Blender", category: "Home", price: 180, stock: 20, rating: 4.0, discount: true },
  { id: 10, name: "Book", category: "Education", price: 25, stock: 100, rating: 4.9, discount: false },
  { id: 11, name: "Notebook", category: "Education", price: 5, stock: 200, rating: 4.3, discount: false },
  { id: 12, name: "Pen", category: "Education", price: 2, stock: 500, rating: 4.1, discount: true }
];

 const stock= products.find((item)=> item.stock<=5)
 console.log(stock)


 const expensive=products.some((item)=> item.price>=2000 )
 console.log(expensive)

 const rate= products.every((item)=> item.rating >=4)
 console.log(rate)


 const fashionP= products.filter((item)=> item.category.toLocaleLowerCase()==="fashion").sort((a,b)=> a.discount-b.discount).map(item=>item.name)
 console.log(fashionP)
  

 const lessThanHundred= products.filter((item) => item.price<=100)
 console.log(lessThanHundred)

 const highRating =  products.reduce((max,products)=> products.rating >max.rating ? products : max);
  console.log(highRating)


  let group ={ }
  products.forEach(item =>{
    if (!group[item.category]){
          group[item.category] = []

    }
    group[item.category].push(item)
  })

  console.log(group)


  const names=["Ali", "Nigar", "Murad"];

  const newArr = names.map((item) =>item.length)
  console.log(newArr)

  const prices =[100,250,75]
  const newPrices = prices.map((item)=> item-(item *10)/100)
  console.log(newPrices)


  

   const nums = [2,3,4]
   const newNums = nums.map((item)=> item *item)
   console.log(newNums)


   const nam = ["Sara", "Zaur"]
   nam.forEach(item=>{



   })



   