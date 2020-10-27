"use strict";

let money = prompt('Введите сумму: ');
let money_len = money.length;
let al1 = 'Ваша сумма в ' + money + ' рублей успешно зачислена!';
let al2 = 'Ваша сумма в ' + money + ' рубль успешно зачислена!';
let al3 = 'Ваша сумма в ' + money + ' рубля успешно зачислена!';

if (money[money_len - 2] != '1' || money[money_len - 1] == '0') {
    switch (money[money_len - 1]) {
        case '0':
            alert(al1);
            break;
        case '5':
            alert(al1);
            break;
        case '6':
            alert(al1);
            break;
        case '7':
            alert(al1);
            break;
        case '8':
            alert(al1);
            break;
        case '9':
            alert(al1);
            break;
        case '1':
            alert(al2);
            break;
        case '2':
            alert(al3);
            break;
        case '3':
            alert(al3);
            break;
        case '4':
            alert(al3);
            break;
    }
} else {
    alert(al1);
}