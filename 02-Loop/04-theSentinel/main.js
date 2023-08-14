const TERMINATE = 'stop';
const x = {};

let key;
let value;

do {

    key = prompt('Enter Key');
    value = +prompt('Enter Value');

    if (value == 0 || +value >= 1) {
        x[key] = value;
    };

} while (key != TERMINATE && value != TERMINATE);

console.log(x);