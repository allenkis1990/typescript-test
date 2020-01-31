"use strict";
let a1;
a1 = 1;
a1 = '2';
let a2 = {
    name: 'allen',
    age: 18
};
let a3;
a3 = 12;
a3 = 'allen';
a3 = {};
let a4;
a4 = null;
a4 = undefined;
console.log(a4);
function fn() {
    throw '123';
}
fn();
//never只能用在死循环或者抛错不能赋给任何
// let a5:never
// a5 = 1
