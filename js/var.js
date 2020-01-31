"use strict";
var a1;
a1 = 1;
a1 = '2';
var a2 = {
    name: 'allen',
    age: 18
};
var a3;
a3 = 12;
a3 = 'allen';
a3 = {};
var a4;
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
