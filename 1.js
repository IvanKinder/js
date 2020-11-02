"use strict";

let chet = 'четное число';
let nechet = 'нечетное число';

for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(i + ' - это ноль');
    }
    if (i % 2 == 0 && i != 0) {
        console.log(i + ' - это четное число');
    }
    if (i % 2 != 0) {
        console.log(i + ' - это нечетное число');
    }
}