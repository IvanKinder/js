"use strict";

function ObjectNumber(num) {
    this.hundreds = ~~(num / 100);
    this.tens = String(~~(num / 10))[1];
    this.units = String(num)[2];
}

let my_num = 793;

if (my_num % 1 == 0 && String(my_num).length < 4) {
    let my_obj = new ObjectNumber(my_num);
    console.log(my_obj.hundreds);
    console.log(my_obj.tens);
    console.log(my_obj.units);
}
else {
    console.log('Плохое число!')
}


