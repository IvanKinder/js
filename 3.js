"use strict";

let a2 = parseInt(prompt("Введите целочисленное a: "));
let b2 = parseInt(prompt("Введите целочисленное b: "));

if (a2 >= 0 && b2 >= 0) {
    alert(a2 - b2)
}
else if (a2 < 0 && b2 < 0) {
    alert(a2 * b2)
}
else {
    alert(a2 + b2)
}