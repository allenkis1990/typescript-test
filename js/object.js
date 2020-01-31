"use strict";
let obj1 = { name: 'allen', age: 18 };
console.log(obj1);
let obj2 = {
    name: 'allen',
    fn: function () {
        console.log(this.name);
    }
};
obj2.fn();
let obj3 = {
    obj: {
        name: 'allen'
    },
    arr: [
        1,
        { job: 'web' }
    ],
    fn() {
        console.log(this.obj, this.arr);
    }
};
obj3.fn();
let obj4 = {
    name: 'allen',
    obj3: {
        obj: { name: 'tom' },
        arr: [1, 2, 3],
        fn() {
            console.log(this.obj);
        }
    }
};
obj4.obj3.fn();
