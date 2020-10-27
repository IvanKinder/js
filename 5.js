"use strict";

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            alert(summ(arg1, arg2));
            break;
        case "min":
            alert(minn(arg1, arg2));
            break;
        case "mul":
            alert(mull(arg1, arg2));
            break;
        case "del":
            alert(dell(arg1, arg2));
            break;
    }
}
let arg1 = parseInt(prompt("Введите первое число: "));
let arg2 = parseInt(prompt("Введите второе число: "));
let operation = prompt("Введите операцию (sum, min, mul, del): ");
mathOperation(arg1, arg2, operation);