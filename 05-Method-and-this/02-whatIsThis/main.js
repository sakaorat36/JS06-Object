var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser(); // {name: "John", ref : this}
console.log(user.ref.name); // * Joe เพราะ console.log(user.ref.name); ใน window 

// user.ref ==  ใน window มี Joe
// ser.ref.name == Joe ใน window 