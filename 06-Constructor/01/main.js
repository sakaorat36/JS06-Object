function Constructor () {

    this.input1 = null,
    this.input2 = null,

    this.read = () => {
        this.input1 = Number(prompt('number 1'))
        this.input2 = Number(prompt('number 2'))
    }
    
    this.sum = () => {
        return this.input1 + this.input2
    }

    this.mul = () => {
        return this.input1 * this.input2
     }
    
}

const call = new Constructor();

call.read();
console.log(call.sum());
console.log(call.mul());