// let salaries = {
//     // John: 100,
//     // Ann: 160,
//     // Pete: 130
// };

function isEmptyObj (object) {
    let isEmpty = true;
    for(let key in object) {
        isEmpty = false;
    } 
    return isEmpty;
}

// (OBJ) => NUMBER
function calSalaries (object) {
    // 1.Varidate => แยก Service
    if(isEmptyObj(object)) return 0;
    // 2. Calculate
    let sum = 0;
    for (let key in object){
        //<obj>.<key>
        //<obj>.<key>
        //console.log(object[key]);
        sum += object[key];
    }
    return sum;
}

let salaries ={
    John: 100,
    Ann: 160,
    Pete: 130
};

let total = calSalaries(salaries);
console.log(total); // 390