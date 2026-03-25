"use strict";
// var: function scoped, có hoisting, có thể re-assign
function testVar() {
  console.log('trước khi khai báo var x:', x); // undefined (hoisting)
  var x = 10;
  console.log('sau khai báo var x:', x);
  if (true) {
    var x = 20; // cùng phạm vi function, ghi đè biến x ở trên
    console.log('trong block if var x:', x);
  }
  console.log('sau block if var x:', x); // 20
}
testVar();

// let: block scoped, không hoist giá trị, không được redeclare trong cùng block
function testLet() {
  // console.log(y); // ReferenceError (temporal dead zone)
  let y = 10;
  console.log('y ban đầu:', y);
  if (true) {
    let y = 20; // khác biến y ở outer block
    console.log('trong block if let y:', y);
  }
  console.log('sau block if let y:', y); // 10
}
testLet();

// const: block scoped, không thể re-assign
function testConst() {
  const z = 30;
  console.log('z ban đầu:', z);
  // z = 40; // TypeError: Assignment to constant variable.
  if (true) {
    const z = 50; // hoàn toàn độc lập với z ngoài block
    console.log('trong block if const z:', z);
  }
  console.log('sau block if const z:', z); // 30
}
testConst();
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
} 
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}