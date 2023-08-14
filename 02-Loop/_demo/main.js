// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

// Object => BOOL
function isEmptyObj (obj) {
    let isEmpty = true;

    for(let key in obj) {
        isEmpty = false;
    }
    return isEmpty;
};

// const a = {
//     name: 'CC',
//     age: 15,
// };



const product = {
    id: 227,
    name: 'IPhone',
    price: 50_000,
    // discount: 0.05,
    // 'is mobile': true,
};

// #1 Dot
// console.log(product.id);

// #2 Bracket[string]
// console.log(product['id']);

// #3 Bracket[variable_key]
let key = 'id';
// console.log(product[key]);

// a variable ที่เก็บชื่อ key 
// และเปลี่ยนใหม่ทุกครั้งที่ลูป
for (let a in product) {
  // 1st : let a = "id"
  // 2nd : let a = 'name'
  // 3rd : let a = 'price'
  // console.log(a)
  console.log(a, product[a])
  product[a] =   product[a] + 50
}