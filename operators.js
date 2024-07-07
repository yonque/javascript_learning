// тернарные операторы
const bmwX3_price = 100000;
const fordFocus_price = 10000;
const budgetUSD = 200;
let message;

if (budgetUSD > 100000) {
    message = 'BMW';
} else if (budgetUSD > fordFocus_price) {
    message = 'Ford Focus'
} else {
    message = ' Велосипед'
}

10 > 0 ? console.log('Bigger nolya') : console.log('not bigger'); // 
// равносильные строки сверху и снизу!!
if (10 > 0) {
    console.log('Bigger nolya');
} else {
    console.log('not bigger');
}
// ? === if; : === else
const str = 10 > 0 ? 'bigger' : 'menshe';
console.log(str);

console.log(`Я хочу купить ${budgetUSD > bmwX3_price ? 'BMW' : 'Велосипед'}`);
// if = утверждение

const mukaGramm = 500;
const mukaReceipt = 300;

console.log(`Я приготовлю ${mukaGramm > mukaReceipt ? 'хлеб' : 'хлеб завтра'}`);

const Toyota = 200000;
const Lada = 1000;
let message_two = budgetUSD > Toyota ? 'Toyota' : budgetUSD > Lada ? 'Lada' : 'велик' ;
// тернарный оператор внутри тернарного оператора (читаются очень плохо, лучше не юзать)

console.log(`Я хочу купить ${message_two}`);

// excersise

const res = prompt('Сколько будет 7 + или - 15?');
switch(true) {
    case res === 'Я не робот':
    case Number(res) === 22:
    case Number(res) === -8:
        console.log('Uspeh');
        break;
    default:
        console.log('youre robot');
};

// альтернатива

if (res === 'Я не робот') {
    console.log('uspehh');
} else {
    const resNum = Number(res);
    switch(resNum) {
        case 22:
        case -8:
            console.log('Uspehno');
            break;
        default:
            console.log('youre robot');
    }
}