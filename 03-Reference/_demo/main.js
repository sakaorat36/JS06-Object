const log = console.log;
log('Learn Ref.');

// Copied by Value
// Copied by Reference


// PRIMITIVE
let message = 'Hello';

// ***
let word = message;
// log(message);
// log(word);

message = "Hi";
log(message); 
log(word);

// OBJECT
// User เก็บ address ของ Literal Object
let user = {
     name: "John",
     age: 33,
};

// *** COPIED BY REFERENCE 
// assign address ของ  user ให้กับ employee
let employee = user;
log(employee);

user.name = "Joe";
log(user);
log(employee);


