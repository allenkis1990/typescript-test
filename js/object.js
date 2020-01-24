"use strict";
var obj1 = { name: 'allen', age: 18 };
console.log(obj1);
var obj2 = {
    name: 'allen',
    fn: function () {
        console.log(this.name);
    }
};
obj2.fn();
var obj3 = {
    obj: {
        name: 'allen'
    },
    arr: [
        1,
        { job: 'web' }
    ],
    fn: function () {
        console.log(this.obj, this.arr);
    }
};
obj3.fn();
var obj4 = {
    name: 'allen',
    obj3: {
        obj: { name: 'tom' },
        arr: [1, 2, 3],
        fn: function () {
            console.log(this.obj);
        }
    }
};
obj4.obj3.fn();
//# sourceMappingURL=object.js.map