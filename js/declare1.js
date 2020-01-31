"use strict";
console.log('Dname', Dname);
console.log('Dfn', Dfn(2020));
var cclass = new Dclass('lwh', 18);
cclass.say(); //Dclass
var directive = [Denum.left, Denum.right, Denum.top, Denum.bottom];
console.log('Denum', directive);
Dnamespace.extend.fn('lwh Dnamespace'); //Dnamespace
var Dinterface = {
    name: 'allen',
    age: 18,
    say: function (b) {
        if (b === void 0) { b = true; }
        return b;
    }
};
console.log(Dinterface, 'Dinterface');
var dsm = Dshengming('sm key');
console.log(dsm, dsm.key, 'Dshengming');
