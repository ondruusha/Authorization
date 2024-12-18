// Задание №1 (Функции)
function func() {
    console.log('Андрей Никитин');
}
func();
// Задание №2 (Функции)
function Sum() {
    let sum = 0; // хранение суммы чисел
    for (let i = 1; i <= 100; i++) {
        sum += i; // выполняется, пока i не достигнет 100
    }
    console.log(sum);
}
Sum();
// Задание №3 (Функции)
function printCube() {
    const number = prompt("Введите число:");
    const cube = number ** 3;
    console.log('Куб числа ${number} равен ${cube}');
}
printCube();
// Задание №4 (Функции)
function checkNumber(number) {
    if (number > 0) {
        console.log("+++"); // число положительное
    } else if (number < 0) {
        console.log("---"); // число отрицательное
    } else {
        console.log("Число равно нулю"); // число равно нулю
    }
}
checkNumber(5);
// Задание №5 (Функции)
function sumThreeNumbers(num1, num2, num3) {
    const sum = num1 + num2 + num3; // сложение
    console.log(sum); // выводим сумму в консоль
}
sumThreeNumbers(1, 2, 3);
// Задание №6 (Функции)
function func(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    console.log(sum);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3);
// Задание №7 (Функции)
// Если параметр функции 2, то результат 4
// Если параметр функции 3, то результат 9
// Если параметр функции не указан, то результат 25, поскольку в функции num равен 5
// Задание №8 (Функции)
// Параметры функций можно делать не обязательными. 
// Для этого параметрам нужно задать значения по умолчанию.
// Если параметры функций 2, 3, то результат будет 5 
// Если параметры функций 3, то результат будет 3
// Если параметры функций 0, то результат будет 0
// Задание №9 (Функции)
function cube(number) {
    return number ** 3;
}
const res = cube(3);
console.log(res);
// Задание №10 (Функции)
function squareRoot(number) {
    return Math.sqrt(number);
}
const sqrt1 = squareRoot(3);
const sqrt2 = squareRoot(4);
const sum = sqrt1 + sqrt2;
console.log(sum);
// Задание №11 (Функции)
function sqrt(num) {
    return Math.sqrt(num);
}
function round(num) {
    return num.toFixed(3);
}
const sqrtResult = sqrt(2);
const roundedResult = round(sqrtResult);
console.log(roundedResult);
// Задание №12 (Функции)
function sqrt(num) {
    return Math.sqrt(num);
}
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
const sqrt2 = sqrt(2);
const sqrt3 = sqrt(3);
const sqrt4 = sqrt(4);
const res = sum(sqrt2, sqrt3, sqrt4);
console.log(res);
// Задание №13 (Функции)
function sqrt(num) {
    return Math.sqrt(num);
}
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
function round(num) {
    return num.toFixed(3);
}
const sqrt2 = sqrt(2);
const sqrt3 = sqrt(3);
const sqrt4 = sqrt(4);
const sumOfSqrt = sum(sqrt2, sqrt3, sqrt4);
const res = round(sumOfSqrt);
console.log(res);
// Задание №14 (Функции)
// В консоль будет выведено число 3 и undefined. Это происходит потому, что после
// оператора return строки кода не выполняются, если встречается оператор return
// то выполнение функции завершается и значение возвращается в то место, откуда была
// вызвана функция
// Задание №15 (Функции)
function func(num) {
    if (num <= 0) {
        return Math.abs(num); // Возвращает модуль числа, если оно меньше или равно 0
    } else {
        return num ** 2; // Возвращает квадрат числа, если оно больше 0
    }
}
console.log(func(10));
console.log(func(-5));
// Задание №16 (Функции)
function func(num) {
    if (num <= 0) {
        return Math.abs(num); // Возвращает модуль числа, если оно меньше или равно 0
    }
    return num ** 2; // Возвращает квадрат числа, если оно больше 0
}
console.log(func(10));
console.log(func(-5));
// Задание №17 (Циклы)
function func(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(func(5));
// Задание №18 (Циклы)
function Iterations(num) { // Функция для подсчета итераций
    let count = 0;
    while (num >= 10) {
        num /= 2; // Делим число на 2
        count++; // Увеличиваем счётчик итераций
    }
    return count;
}
// Задание №19 (Циклы)
function Iterations()
