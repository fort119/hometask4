let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];



// 1
let value = 0;
arr.forEach((i) => {
  if (i > 0) {
    value += i;
  }
})
console.log(value + ' - сумма всех позитивных элементов');
let posArr = arr.filter(elem => (elem > 0));
console.log(posArr.length + ' - Количество позитивных элементов');

// 2
const min = Math.min.apply(null, arr);
console.log(min + ' - минимал значение');
console.log(arr.indexOf(min) + ' - индекс минимального значения');

// 3
const max = Math.max.apply(null, arr);
console.log(max + ' - максимал значение');
console.log(arr.indexOf(max) + ' - индекс максимального значения');

// 4
let negArr = arr.filter(elem => (elem < 0));
console.log(negArr.length + ' - Количество негативных элементов');

// 5
let oddArr = [];
posArr.forEach(function odd(x) {
  if (x % 2 != 0) {
    oddArr.push(x);
  }
})
console.log(oddArr.length + ' - количество непарных позитивных элементов');

//6
let evenArr = [];
posArr.forEach(function odd(x) {
  if (x % 2 == 0) {
    evenArr.push(x);
  }
})
console.log(evenArr.length + ' - количество парных позитивных элементов');

//7
let value2 = 0;
evenArr.forEach((i) => {
  value2 += i;
})
console.log(value2 + ' - сумма всех парных позитивных элементов');

//8
let value3 = 0;
oddArr.forEach((i) => {
  value3 += i;
})
console.log(value3 + ' - сумма всех непарных позитивных элементов');

//9
let value4 = 1;
posArr.forEach((i) => {
  value4 *= i;
})
console.log(value4 + ' - произведение всех парных элементов')

//10
let maxOrNull = arr.map(i => i == max ? i : 0);

console.log(maxOrNull);




