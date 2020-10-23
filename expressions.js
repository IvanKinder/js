"use strict";

/*
1. 10 плюс 10 получаем 20
2. 20 неявно приводится к строковому типу
3. 20 конкатенируется с 10
4. с помощью console.log выводим v1 в консоль
*/
let v1 = 10 + 10 + "10";
console.log(v1)
/*
1. 10 неявно приводится к строковому типу
2. 10 конкатенируется с 10
3. другая 10 неявно приводится к строковому типу и конкатенируется с предыдущим результатом
4. с помощью console.log выводим v2 в консоль
*/
let v2 = 10 + "10" + 10;
console.log(v2)
/*
1. 10 плюс 10 получаем 20
2. не знаю наверняка, но наверное плюс перед строкой 10 даёт компилятору сигнал, что со значением в строке необходимо работать как с положительным числом
3. поэтому третья десятка тоже складывается с предыдущими
4. с помощью console.log выводим v3 в консоль
*/
let v3 = 10 + 10 + +"10";
console.log(v3)
/*
1. минус перед строкой дает сигнал, что в строке отрицательное число (странно, без минуса и плюса получается все равно бесконечность)
2. нулевая строка неявно приводится к числовому типу и значению 0
3. делим на минус 0 получаем минус бесконечность
4. с помощью console.log выводим v4 в консоль
*/
let v4 = 10 / -"";
console.log(v4)
/*
1. знак плюс пытается перевести строку 2,5 в число
2. у него не получается так как в десятичных дробях надо использовать точку
3. но так как тип уже числовой в результате получается NaN
4. с помощью console.log выводим v1 в консоль
*/
let v5 = 10 / +"2,5";
console.log(v5)
