// ให้สร้าง Constructor Function: Accumulator(startingValue) 
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

function Accumulator(startingValue) {

    this.currentValue = startingValue

    this.read = () => {
        this.input = Number(prompt('number 1'))
        this.currentValue = this.currentValue + this.input
    };

    this.show = () => {
        alert (this.currentValue);
    };

};

const call = new Accumulator(5);

call.read();
call.show();