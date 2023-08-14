// const user ={
//     firstName: 'Codecamp',
//     lastName: 'Software Park',
//     age: 15,
// };

// // For IN : Loop through Object
// // for (let <key_variable> in <obj>) {}

// for (let key in user) {
    
//     console.log(`KEY : ${key}`); // auto dynamics assign by JS in <string>
//     // let key = "firstName"
//     // let key = "lastName"
//     // let key = "age"


//     console.log(`VAL : ${user[key]}`); // need to access by bracket, computed key
//     // 1st : user[key] == user["firstName"] ==> Codecamp
//     // 2nd : user[key] == user["lastName"] ==> Software Park
//     // 3rd : user[key] == user["age"] ==> 15

//     console.log(user.key);
//     console.log('\n');
//     // 1st : user.key == user['key'] ==> undefined
//     // 2nd : user.key == user['key'] ==> undefined
//     // 3rd : user.key == user['key'] ==> undefined
// }
//  KEY : firstName
//  VAL : Codecamp
//  undefined


// let key = "firstName";

// 'firstName' in user; // true
// 'age' in user; // true
// 'phone' in user; // false loop ก็จะ break


// Recap

// #1 FN Declaration
function add(x, y) {
    return x + y;
};

// #2 FN Expression
const minus = function (x, y) {
    return x - y;
};

// #3 FN Expression (Arrow)
const multiply =(x, y) => x * y;
const log = console.log; // log = FN
// const log = console.log(); // => log = undefined (FN Result) 

// ######### OBJECT #########

const user = {
    name: 'John',
    age: 33,
    isMarried: false,
    address: {
        village: 'Ladda Land',
        province: 'Ching Mai', 
    },
};

// GET DATA
log(user.name);
log(user['name']);

let a = 'name';
log(user.a); // วิ่งไปหา key a => undefined
log(user[a]); // user ['name'] => John
// Note: เมื่อชื่อ key ถูกเก็บไว้ในตัวแปร ต้อง acesss ผ่าน [ ]

// DELETE

delete user.isMarried;
log(user);
// delete user['age'];
log(user);

let b = 'address';
// delete user [b];
log(user);

// UPDATE
let x = 5;
x = x + 2;
x += 2;
// container = value + 2

user.age = user.age + 1; 
user.age += 1;
log(user.age);
// container = value + 1

user['age'] = user['age'] + 5;
log(user.age);

user['age'] += 5;
log(user.age);

user['age']++;
log(user.age);

// use key variable
let key = 'age';

// Computed key
user[key] = user[key] + 5;
// user['age'] = user['age'] + 5
log(user.age);

user[key] += 1;
user[key]++;
log(user.key);
log(user.age);

// Critical Point
// - bracket notation ใช้กับคีย์ที่เป็น string หรือ ตัวแปรที่เก็บ string
// - for (<key> in <obj>) JS จะ auto reassign key ใหม่ให้ทุกรอบ (string)
// - obj[key] = obj[key] + new => container = value + new
