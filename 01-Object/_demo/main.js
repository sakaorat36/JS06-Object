console.log('learn object');

// DataTypes
// -Primitive : Boolean, Number, String etc...
// -Non-Primitive : Object

// ######################
// ## Object Declaration
// ######################
// {} == stand for Object / Scope
// { record_1, record_2, record_3,...}
// each record => <key_name>:<value>
// <value> any Datatype 
// <key_name> Datatype : String
// record === property (คุณสมบัติ, สิ่งที่มี) == key-value pair

// let user = {
//     firstName: "Sakaorat",
//     lastName: "Na Thalang",
//     age: 20,
//     isAdmin: true,
//     'like human': true,
// };

// console.log(user);

// ##########################
// ### ACCESS, MODIFY, DELETE
// ##########################

// Every action NEEDn <KEY_NAME> !!
// Dot Notation 
// <obj>.<key_name> === <value>
// ถ้าไม่มี record => return undefined
// ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้

// GET, POLL, READ
// console.log(user);
// console.log(user.firstName === 'Sakaorat');
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.isAdmin);
// console.log(user.salary);
// console.log(user.like human);


// MODIFY, UPDATE
// Syntex : <obj>.<old_key> = newValue

// user.firstName = 'Sakaowarat';
// user.age = 25;
// user.age += 2;
// user.age++;
// console.log(user.age);

// ADD
// Syntex : <obj>.<new_key> = newValue
// user.address = 'bangkok';
// console.log(user);

// DELETE
// Syntex : delete <obj>.<key_name>

// delete user.isAdmin;
// console.log(user);

// ##########################
// ### NESTED Object
// ##########################

// const employee = {
//     fullName: "John Doe",
//     salary: 500_000,
//     address: {
//         district : 'Phaya Thai',
//         province : 'Bangkok',
//         country : 'Thailand',

//     },
// };


// ACCESS, MODIFY, DELETE 
// console.log(employee.salary);
// console.log(employee.address);
// console.log(employee.address.province);
// console.log(employee.address.district);
// console.log(employee.address.village); // key = village ไม่ได้้ถูกกำหนดไว้ ผลที่ออกมาคือ undefined

// employee.address.province = 'Nonthaburian';
// delete employee.address.country;

// Dot ใช้กับ Object เท่านั้น !!
// ห้ามมมมมมมมมมม ใช้กับ undefined <undefined>.<key>
// วิธีแก้ optional chaining => <undefined>?.<key>



// console.log(employee.addr); // undefined
// // console.log(employee.addr.province); // undefined.province
// console.log(employee.addr?.province); // undefined  ? chk befor dot continuous ?
// console.log(employee.address?.province); //   ? chk befor dot continuous ? object ?
// console.log(employee.address?.village);


// ##########################
// ### 4. Check key?
// ##########################

const product = {
    id: 227,
    name: 'IPhone',
    price: 50_000,
    // discount: 0.05,
}
console.log(product.discount); // undefined

// IN Operator
// Syntax  : <key_name_string> in <obj>
console.log('name' in product);
console.log('discount' in product);


// method hasOwnProperty
// Syntax : <obj>.hasOwnProperty(<key_name>) => BOOL
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));


// ##########################
// ### 5. Bracket Notation []
// ##########################

// Syntax : <obj>["<key_name_string>"]
// *** 1 ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
// *** 2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // Computed key
// ACCESS key-value ผ่านชื่อตัวแปรได้
console.log(product.id);
console.log(product['id']);

// console.log(product.is mobile) crash
console.log(product['is mobile']);

product['name'] = 'IPhone-15';
// console.log(product);

let aaaaa = 'name';

console.log(product['name']);
console.log(product[aaaaa]);
console.log(product.aaaaa); // product.aaaaa === product['aaaaa'] === undefined



// #############################
// ###### 6.Property ShortHand
// ############################
/*
{
	username : <value in username variable>,
	age : <value in age variable>
}
*/
let username = 'Codecamp';
let age = 15;

// let USER = {
//     username: username,
//     age: age,
// };
let USER = { username, age };

console.log(USER);