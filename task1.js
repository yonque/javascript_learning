// данные
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

// results
console.log('Смогу ли я работать?' + ' ' + (availableHours >= projectHours));
console.log('Стоимость работы' + ' ' + projectHours * payRateUSD + '$');

// шаблонные строки
const projectName = 'Vkusochka';
const price = 2000;
const author = 'Vasiliy';

const template = author + ' ordered ' + projectName + ' po cene ' + price + '$';
console.log(template);

const template2 = `${author} ordered ${projectName} по цене ${price}`
console.log(template2);

const template3 = 'project: ' + projectName + '\n' + 'price: ' + price + '$';
console.log(template3);

const temp4 = `project: ${projectName} \n price: ${price} $`;
console.log(temp4);

const temp5 = `Project ${projectName}
Price: ${price}`;
console.log(temp5);

//конвертация типов
const age = '18';
console.log(Number(age) + 5); // = 23, явная конвертация string to number
console.log(age - 3); // = 15, неявное преобразование string to number
const userName = 'Galina_Blanca';
console.log(Number(userName) + 5); // - NaN = no converting! = Not a Number
console.log(typeof NaN);
console.log(String(4) + 7); // - конкатенация
console.log(Boolean(-3)); // ВСЕ числа, кроме нуля, = true(=1)
console.log(Boolean('1') + 10); // пусто без пробела/текста - false(=0)

const ara_ara = 2 + '10';
console.log(ara_ara - 10);

// false only next
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Number('seven'))); // текст нельзя в числа
console.log(Boolean(NaN));

//if else
const money = 4;;

if (money >= 50) {
    console.log('Можно купить')
} else if (money > 5) {
    console.log('куплен микро-продукт')
} else {
    console.log('лошок, чо сказать')
};


// задача 2
const vasiaMoneyUSD = 10000;
const vkladProcenti = 0.07;
const vasiaHappyHouseUSD = 13500;
const years = 24;

const itogo = vasiaMoneyUSD * (1 + vkladProcenti / 12) ** years;
if (itogo > vasiaHappyHouseUSD) {
    console.log(`Вася победил. Накопили ${itogo} Остаток ${itogo - vasiaHappyHouseUSD}`)
} else if (itogo < vasiaHappyHouseUSD) {
    console.log(`пипец, Вася! ${itogo}`)
};

// операторы равенства
const secretNumber = '9';
if (Number(secretNumber) === 9){ // == нестрогое равенство, === строгое равенство (и по типу тоже)
    console.log('угадал!')
} 
if (secretNumber == 9) {
    console.log('угадал не строго');
}

const role = 'ceo';

if (role === 'manager') {
    console.log('Манагер, ясно, следыщ');
} else if (role === 'admin') {
    console.log('сосадминка');
} else if (role === 'CEO') {
    console.log('нащяника?');
} else {
    console.log('who are you?');
}

switch (role) {
    case 'manager' : // role === manager
        console.log('Manager');
        break;
    case 'admin' : // role === admin
        console.log('sisdmanin');
        break;
    case 'ceo' : // role === ceo
        console.log('рукой водит');
        break;
    default:
        console.log('who are you?');
}

switch (role) {
    case 'manager' : // role === manager
    case 'admin' : // role === admin
        console.log('ne rukovod');
        break;
    case 'ceo' : // role === ceo
        console.log('рукой водит');
        break;
    default:
        console.log('who are you?');
}

const num = 1;

switch (true) { // выполнить сравнение внутри без if else
    case num > 0: // true === num > 0
        console.log('положит');
        break;
    case num < 0:
        console.log('отриц');
        break;
    default:
        console.log('ноль');
}