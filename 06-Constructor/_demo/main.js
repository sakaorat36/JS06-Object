const log = console.log;

log('Constructor Function');

const dev1 = {
    name: 'John',
    age: 32,
    role: 'dev',
    salary: 40_000,
    dev: function () {
        console.log("I'm develop some features")
    },
};

// Object Creators == Constructor Function

function Developer (name, age) {
    // [1] Implicit create this {}
    this.name = name; // {name:"Ploy"}
    this.age = age; // {age:25}
    this.role = 'dev'; // {name:"Ploy", age:25, role: 'dev', salary: 40_000}
    this.salary = 40_000;
    this.dev = function () {
        console.log("I'm develop some features");
    }; // {name...., dev : fn()}

    // [2] Implicit Return this
    // return {name...., dev : fn()}
};


// this == dev2
// [3] this === Instance
const dev2 = new Developer("Ploy", 25);
log(dev2);

const dev3 = new Developer('Jane', 50);
// log(dev3);
dev3.dev();