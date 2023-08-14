let calculator = {
    x: null,
    y: null,
    read () {
        this.x = prompt(Number('Enter Number1')); // calculator.x
        this.y = prompt(Number('Enter Number2')); // calculator.y
    },
    sum () {
        return this.x + this.y;
    },
    mul () {
        return this.x * this.y;
    }
};

console.log(calculator);

calculator.read();
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());

