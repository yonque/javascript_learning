// Пишу какой-то комментарий
// Базовые арифметические операторы
const width = 10;
const height = 5;
const space = width * height;
const newWidth = width / 4;
const division = width / newWidth;
const volume = 2 ** 3; // 2 in square.
console.log(volume);
console.log(division);
console.log(newWidth);
console.log(space);

// stroki 
const city = 'Moscow';
const street = 'Novoslobodskaya';
console.log(city + ', ' + street + ' ' + 5);

// операторы присваивания 
let age = 18;
age += 2 // age = age + 2
age -= 3; // age = age - 3 (последовательно)
age *= 5;
age /= 8,5;

age++; // age = age + 1 
age--; // age = age - 1

console.log(age);

// операторы сравнения
const vasia = 100 - 10 > 90 - 5;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);

console.log(vasia);

// 100 - (12) 10 > (10) 90 - (12) 5
// [- (digit)] = приоретизация оператора

const a = (6 + 10 )/ 2;
console.log(a);

let b;
let c;
c = b = 100 + 50 + 30;
console.log(c);
console.log(b);

// типы данных
let Arc = 5;
let Ber = 5.6;
console.log(typeof Arc);
Arc = 'stroke';
console.log(typeof Arc);
console.log(typeof Ber);

// boolean
let isAdmin = false;
console.log(typeof isAdmin);

//undefined & null
let Cerra; // переменная не задана
console.log(typeof Cerra);
Cerra = 'cjoza'; // переменная задана
console.log(typeof Cerra);

let Delta = null;
console.log(typeof Delta); // null будет объектом в консоли
console.log(Delta == null);
console.log(typeof (Delta == null));