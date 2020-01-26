"use strict";
function fn1(val1, val2) {
    console.log(val1 + val2);
}
fn1('1', 2);
function fn2() {
    return 2020;
}
console.log(fn2());
function fn33(val1, val2) {
    return val1 + val2;
}
var fn3;
fn3 = fn33;
console.log(fn3('lwh', 520));
//fucntion类型定义的语法可以为   fn(key:string):void   fn:(key:string)=>void
var fnObj = {
    fn: function () {
    }
};
